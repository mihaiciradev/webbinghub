"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { SVG_SRC } from "@/components/LogoMark3D/logoSvg";

export default function HeroLogo3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || 600;
    const h = mount.clientHeight || 700;

    /* ── Renderer ───────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = false;
    // ACES filmic tone mapping — makes gold look rich, not washed out
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.48;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    /* ── Scene & Camera ─────────────────────────── */
    const scene = new THREE.Scene();
    // Pull camera back + narrower FOV = less perspective distortion
    const camera = new THREE.PerspectiveCamera(38, w / h, 1, 2000);
    camera.position.z = 380;

    /* ── Environment map (critical for MeshPhysical metallic look) ── */
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    // No scene.background — keep canvas transparent

    /* ── Lighting ───────────────────────────────── */
    // Hemisphere — sky warm cream, ground muted dark — replaces flat ambient
    const hemi = new THREE.HemisphereLight(0xfff8ee, 0xd4c9b0, 0.14);
    scene.add(hemi);

    // Key — top-right
    const key = new THREE.DirectionalLight(0xffffff, 0.75);
    key.position.set(150, 180, 220);
    scene.add(key);

    // Fill — left/below, very soft gold tint
    const fill = new THREE.DirectionalLight(0xd4b47a, 0.14);
    fill.position.set(-180, -60, 100);
    scene.add(fill);

    // Rim — edge definition from behind
    const rim = new THREE.DirectionalLight(0xffe0a0, 0.32);
    rim.position.set(-80, 120, -200);
    scene.add(rim);

    /* ── Materials ──────────────────────────────── */
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#b8975a"),
      metalness: 0.65,       // reduced → more colour, less mirror
      roughness: 0.18,       // low → sharp highlights
      clearcoat: 0.4,        // lacquered finish layer
      clearcoatRoughness: 0.08,
      envMapIntensity: 0.38,
    });

    const darkMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#28261f"),  // slightly warmer/darker for contrast
      metalness: 0.08,
      roughness: 0.72,       // matte — contrasts nicely with gold
      envMapIntensity: 0.22,
    });

    /* ── Parse SVG & build geometry ─────────────── */
    const loader = new SVGLoader();
    const parsed = loader.parse(SVG_SRC);

    const inner = new THREE.Group(); // flipped for SVG→Three.js y-axis

    const extrudeSettings = {
      depth: 18,            // slightly shallower — proportionally better
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2,
      bevelSegments: 8,     // more segments = smooth rounded edges, less faceted
    };

    parsed.paths.forEach((path) => {
      const fillStr = (path.userData?.style?.fill ?? "").toLowerCase().replace(/\s/g, "");
      const isDark = fillStr.includes("3e3c3a");
      const mat = isDark ? darkMat : goldMat;

      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const mesh = new THREE.Mesh(geo, mat);
        inner.add(mesh);
      });
    });

    // ── Step 1: flip Y first (SVG y-down → Three.js y-up) ──────────
    inner.scale.y = -1;

    // ── Step 2: measure the flipped content in world space ──────────
    const flippedBox = new THREE.Box3().setFromObject(inner);
    const flippedCenter = flippedBox.getCenter(new THREE.Vector3());
    const flippedSize   = flippedBox.getSize(new THREE.Vector3());

    // ── Step 3: create a PIVOT at world origin; offset inner inside it
    //            so that inner's content centre aligns with pivot's origin.
    //            → all rotations on pivot spin around the logo's true centre ──
    const pivot = new THREE.Group();
    inner.position.set(
      -flippedCenter.x,
      -flippedCenter.y,
      -flippedCenter.z,
    );
    pivot.add(inner);

    // ── Step 4: scale pivot uniformly to fill canvas ────────────────
    const fovRad     = (camera.fov * Math.PI) / 180;
    const visH       = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const visW       = visH * (w / h);
    const logoMaxDim = Math.max(flippedSize.x, flippedSize.y);
    const targetVis  = Math.min(visH, visW) * 0.82;
    const scaleFactor = targetVis / logoMaxDim;
    pivot.scale.setScalar(scaleFactor);

    // ── Step 5: start slightly tilted left so scroll "unfolds" it ───
    const BASE_Y = -0.13; // ≈ -7.5° — just a hint of diagonal
    const BASE_X =  0.06; //   slight upward tilt
    pivot.rotation.y = BASE_Y;
    pivot.rotation.x = BASE_X;

    scene.add(pivot);

    /* ── Scroll → rotation targets ──────────────── */
    let targetRotY = BASE_Y;
    let targetRotX = BASE_X;
    let currentRotY = BASE_Y;
    let currentRotX = BASE_X;

    const onScroll = () => {
      const sy = window.scrollY;
      targetRotY = BASE_Y + sy * 0.0012;
      targetRotX = BASE_X - sy * 0.0003;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Drag to rotate (desktop only) ─────────── */
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let dragY = 0;
    let dragX = 0;

    const DRAG_SENS = 0.008;

    const startDrag = (x: number, y: number) => {
      isDragging = true;
      lastX = x;
      lastY = y;
      renderer.domElement.style.cursor = "grabbing";
    };

    const moveDrag = (x: number, y: number) => {
      if (!isDragging) return;
      dragY += (x - lastX) * DRAG_SENS;
      dragX += (y - lastY) * DRAG_SENS * 0.6; // X axis less sensitive
      lastX = x;
      lastY = y;
    };

    const endDrag = () => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    if (!isTouch) {
      renderer.domElement.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
      window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
      window.addEventListener("mouseup",   endDrag);
      renderer.domElement.style.cursor = "grab";
    }

    /* ── Resize ─────────────────────────────────── */
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ─────────────────────────── */
    let raf: number;
    let t = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.007;

      currentRotY += (targetRotY - currentRotY) * 0.055;
      currentRotX += (targetRotX - currentRotX) * 0.055;

      const baseY = currentRotY + dragY;
      const baseX = currentRotX + dragX;

      // Idle breathing pauses while dragging for crisp responsiveness
      pivot.rotation.y = isDragging ? baseY : baseY + Math.sin(t * 0.55) * 0.04;
      pivot.rotation.x = isDragging ? baseX : baseX + Math.sin(t * 0.38) * 0.022;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup ────────────────────────────────── */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      if (!isTouch) {
        window.removeEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
        window.removeEventListener("mouseup",   endDrag);
      }
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      goldMat.dispose();
      darkMat.dispose();
      envTexture.dispose();
      pmrem.dispose();
      scene.remove(pivot);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
}
