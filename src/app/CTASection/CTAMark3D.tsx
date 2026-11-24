"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { SVG_SRC } from "@/components/LogoMark3D/logoSvg";

/**
 * The mascot in the closing CTA. It looks at the cursor: the head turns on a
 * weighted spring, the eyes move inside their sockets, and a warm light follows
 * the pointer across the gold. Hovering a contact link makes it lean in.
 * With no pointer it looks around and blinks.
 *
 * The scene is built as soon as this mounts (the parent mounts it while the
 * browser is idle), and it only renders while the section is on screen.
 */
export default function CTAMark3D({ onReady }: { onReady?: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Reduced motion keeps the pointer-driven gaze (the visitor causes it) but calms it:
    // smaller turns, no overshoot, no idle wandering, breathing or blinking.
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // No WebGL: the static logo underneath stays visible
    }

    let w = mount.clientWidth || 320;
    let h = mount.clientHeight || 320;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.62;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, w / h, 1, 2000);
    camera.position.z = 420;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    /* ── Light: a dim room, a rim from behind, and the cursor ── */
    scene.add(new THREE.HemisphereLight(0xfff4e0, 0x1c1917, 0.18));

    const rim = new THREE.DirectionalLight(0xffd9a0, 1.1);
    rim.position.set(-160, 220, -260);
    scene.add(rim);

    const key = new THREE.DirectionalLight(0xffffff, 0.35);
    key.position.set(120, 160, 260);
    scene.add(key);

    const cursorLight = new THREE.PointLight(0xffe2b0, 2.2, 0, 0);
    cursorLight.position.set(120, 80, 160);
    scene.add(cursorLight);

    /* ── Materials ── */
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#b8975a"),
      metalness: 0.75,
      roughness: 0.2,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      envMapIntensity: 0.45,
    });
    // Lighter than the hero's hair: the CTA background is near-black
    const hairMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#4a453d"),
      metalness: 0.2,
      roughness: 0.55,
      clearcoat: 0.3,
      clearcoatRoughness: 0.3,
      envMapIntensity: 0.35,
    });

    /* ── Geometry: face + hair in one group, each eye in its own ── */
    const parsed = new SVGLoader().parse(SVG_SRC);
    const extrude = { depth: 18, bevelEnabled: true, bevelThickness: 3, bevelSize: 2, bevelSegments: 6 };

    const inner = new THREE.Group(); // SVG space, flipped below
    const eyes: THREE.Group[] = [];
    const geometries: THREE.BufferGeometry[] = [];

    parsed.paths.forEach((path, i) => {
      const isHair = (path.userData?.style?.fill ?? "").toLowerCase().includes("3e3c3a");
      const shapes = SVGLoader.createShapes(path);
      const isEye = i >= 2;
      const target = isEye ? new THREE.Group() : inner;

      shapes.forEach((shape) => {
        const geo = new THREE.ExtrudeGeometry(shape, isEye ? { ...extrude, depth: 22 } : extrude);
        geometries.push(geo);
        target.add(new THREE.Mesh(geo, isHair ? hairMat : goldMat));
      });

      if (isEye) {
        // Re-centre the eye on its own pivot so it can move and blink in place
        const c = new THREE.Box3().setFromObject(target).getCenter(new THREE.Vector3());
        target.children.forEach((m) => m.position.set(-c.x, -c.y, 0));
        target.position.set(c.x, c.y, 2);
        target.userData.home = c.clone();
        inner.add(target);
        eyes.push(target);
      }
    });

    inner.scale.y = -1;
    const box = new THREE.Box3().setFromObject(inner);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    inner.position.set(-center.x, -center.y, -center.z);

    const pivot = new THREE.Group();
    pivot.add(inner);
    scene.add(pivot);

    const fit = () => {
      const visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      const visW = visH * (w / h);
      pivot.scale.setScalar((Math.min(visH, visW) * 0.8) / Math.max(size.x, size.y));
      return { visW, visH };
    };
    let vis = fit();

    /* ── Pointer → gaze target (normalised to the canvas centre) ── */
    let pointerActive = false;
    let lastPointer = 0;
    let gx = 0.35; // look a little toward the contact column at rest
    let gy = 0.05;
    let lx = 0.6;
    let ly = 0.4;
    let excite = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = mount.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      gx = THREE.MathUtils.clamp(dx / 650, -1, 1);
      gy = THREE.MathUtils.clamp(dy / 420, -1, 1);
      lx = THREE.MathUtils.clamp(dx / (r.width / 2), -2.2, 2.2);
      ly = THREE.MathUtils.clamp(dy / (r.height / 2), -2.2, 2.2);
      pointerActive = true;
      lastPointer = performance.now();
    };
    const onPointerLeave = () => { pointerActive = false; };

    // Lean in when a contact link in this section is hovered or focused
    const section = mount.closest("section");
    const isContactLink = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest("a") && !!section?.contains(el);
    const onOver = (e: Event) => { if (isContactLink(e.target)) excite = 1; };
    const onOut = (e: Event) => { if (isContactLink(e.target)) excite = 0; };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    section?.addEventListener("pointerover", onOver);
    section?.addEventListener("pointerout", onOut);
    section?.addEventListener("focusin", onOver);
    section?.addEventListener("focusout", onOut);

    /* ── Springs: a little overshoot gives the head weight ── */
    // Start where the still frame is, so the first animated frame doesn't jump
    const spring = { rx: 0.04, ry: 0.2, vx: 0, vy: 0, ex: 0.35, ey: 0.05, evx: 0, evy: 0, exc: 0 };
    const step = (x: number, v: number, target: number, k: number, damp: number) => {
      v = (v + (target - x) * k) * damp;
      return [x + v, v];
    };

    let nextBlink = 2.5;
    let blinkStart = -1;

    const clock = new THREE.Clock();
    let raf = 0;
    let running = false;

    const frame = () => {
      const t = clock.getElapsedTime();

      // Idle: after 2.5s without a pointer, look around slowly.
      // Reduced motion: no wandering; rest looking toward the contact column.
      const idle = !pointerActive || performance.now() - lastPointer > 2500;
      const tx = idle ? (calm ? 0.35 : 0.35 * Math.sin(t * 0.37) + 0.15 * Math.sin(t * 0.91)) : gx;
      const ty = idle ? (calm ? 0.05 : 0.18 * Math.sin(t * 0.53 + 1.2)) : gy;

      // Reduced motion: smaller turns and no overshoot
      const amp = calm ? 0.45 : 1;
      const damp = calm ? 0.55 : 0.8;
      [spring.ry, spring.vy] = step(spring.ry, spring.vy, tx * 0.55 * amp, 0.05, damp);
      [spring.rx, spring.vx] = step(spring.rx, spring.vx, (ty * 0.32 - excite * 0.06) * amp, 0.05, damp);
      [spring.ex, spring.evx] = step(spring.ex, spring.evx, tx, 0.14, calm ? 0.5 : 0.7);
      [spring.ey, spring.evy] = step(spring.ey, spring.evy, ty, 0.14, calm ? 0.5 : 0.7);
      spring.exc += (excite - spring.exc) * 0.12;

      pivot.rotation.y = spring.ry;
      pivot.rotation.x = spring.rx;
      if (!calm) pivot.position.y = Math.sin(t * 0.8) * 2.5; // breathing

      // Blink every 3–6s
      if (!calm && t > nextBlink && blinkStart < 0) blinkStart = t;
      let lid = 1;
      if (blinkStart >= 0) {
        const p = (t - blinkStart) / 0.18;
        if (p >= 1) {
          blinkStart = -1;
          nextBlink = t + 3 + Math.random() * 3;
        } else {
          lid = 1 - Math.sin(p * Math.PI) * 0.92;
        }
      }

      const grow = 1 + spring.exc * 0.14;
      eyes.forEach((eye) => {
        const home = eye.userData.home as THREE.Vector3;
        eye.position.x = home.x + spring.ex * 6.5;
        eye.position.y = home.y + spring.ey * 5; // SVG space: +y is down
        eye.scale.set(grow, grow * lid, 1);
      });

      const lightX = (idle ? 0.6 + 0.5 * Math.sin(t * 0.3) : lx) * (vis.visW / 2);
      const lightY = -(idle ? 0.3 : ly) * (vis.visH / 2);
      cursorLight.position.x += (lightX - cursorLight.position.x) * 0.12;
      cursorLight.position.y += (lightY - cursorLight.position.y) * 0.12;
      cursorLight.intensity = 2.2 + spring.exc * 1.6;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      clock.start();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // One still frame now, so the mark is already there when the section scrolls in
    pivot.rotation.set(spring.rx, spring.ry, 0);
    eyes.forEach((eye) => {
      const home = eye.userData.home as THREE.Vector3;
      eye.position.x = home.x + spring.ex * 6.5;
      eye.position.y = home.y + spring.ey * 5;
    });
    renderer.render(scene, camera);
    onReady?.();

    let onScreen = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !document.hidden) start();
        else stop();
      },
      { rootMargin: "120px" },
    );
    io.observe(mount);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (onScreen) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      w = mount.clientWidth;
      h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      vis = fit();
      if (!running) renderer.render(scene, camera);
    });
    ro.observe(mount);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      section?.removeEventListener("pointerover", onOver);
      section?.removeEventListener("pointerout", onOut);
      section?.removeEventListener("focusin", onOver);
      section?.removeEventListener("focusout", onOut);
      geometries.forEach((g) => g.dispose());
      goldMat.dispose();
      hairMat.dispose();
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onReady]);

  return <div ref={mountRef} className="cta-mark-canvas" aria-hidden="true" />;
}
