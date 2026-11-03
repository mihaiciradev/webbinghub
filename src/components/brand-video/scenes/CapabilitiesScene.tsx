"use client";

import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Track } from "@/components/brand-video/Track";

function panel(show: number, hide: number, enterX: number, exitX: number, scaleFrom = 0.98) {
  const hiddenIn = `translate(${enterX}px, 28px) scale(${scaleFrom})`;
  const shown = "translate(0px, 0px) scale(1)";
  const hiddenOut = `translate(${exitX}px, -20px) scale(0.98)`;
  return kf([
    { t: 0, opacity: 0, transform: hiddenIn },
    { t: show, opacity: 0, transform: hiddenIn, ease: EASE_MOVE },
    { t: show + 0.62, opacity: 1, transform: shown },
    { t: hide, opacity: 1, transform: shown, ease: EASE_WIPE },
    { t: hide + 0.5, opacity: 0, transform: hiddenOut },
  ]);
}

const panels = [
  panel(8.85, 11.25, 70, -90),
  panel(11.05, 13.55, 90, -80),
  panel(13.3, 16.15, 0, 0, 0.94),
];

const accent = kf([
  { t: 0, transform: "scaleX(0)" },
  { t: 9.4, transform: "scaleX(0)", ease: EASE_IN },
  { t: 10.2, transform: "scaleX(1)" },
  { t: 16.2, transform: "scaleX(1)" },
]);

export default function CapabilitiesScene() {
  return (
    <div className="bv-scene bv-capabilities">
      <Track className="bv-panel" frames={panels[0]}>
        <header className="bv-panel-head">
          <span>Internal platforms</span>
          <span className="bv-example">Example</span>
        </header>
        <div className="bv-board">
          {[
            ["Queue", ["Invoice match", "Access review"]],
            ["In progress", ["Supplier sync", "Stock transfer"]],
            ["Done", ["Month close", "Portal invite"]],
          ].map(([title, cards]) => (
            <section key={title as string} className="bv-col">
              <h3>{title as string}</h3>
              {(cards as string[]).map((card) => (
                <article key={card} className="bv-cardlet">
                  <span className="bv-dot" />
                  {card}
                </article>
              ))}
            </section>
          ))}
        </div>
        <span className="bv-accent" />
      </Track>

      <Track className="bv-panel" frames={panels[1]}>
        <header className="bv-panel-head">
          <span>Customer portals</span>
          <span className="bv-example">Example</span>
        </header>
        <div className="bv-list">
          {[
            ["Request 1842", "Scheduled", "Warehouse pickup"],
            ["Request 1843", "Waiting", "Account change"],
            ["Request 1844", "In review", "New location"],
            ["Request 1838", "Complete", "Order amendment"],
          ].map(([id, status, detail]) => (
            <article key={id} className="bv-row">
              <div>
                <strong>{id}</strong>
                <span>{detail}</span>
              </div>
              <em className={status === "Complete" ? "is-done" : ""}>{status}</em>
            </article>
          ))}
        </div>
        <span className="bv-accent" />
      </Track>

      <Track className="bv-panel" frames={panels[2]}>
        <header className="bv-panel-head">
          <span>Booking &amp; API integrations</span>
          <span className="bv-example">Example</span>
        </header>
        <div className="bv-days">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <span key={day} className={i === 2 ? "is-on" : ""}>
              {day}
              <b>{12 + i}</b>
            </span>
          ))}
        </div>
        <div className="bv-list">
          {[
            ["Property feed", "Connected"],
            ["Payment API", "Connected"],
            ["Channel sync", "Mapping"],
          ].map(([name, state]) => (
            <article key={name} className="bv-row">
              <strong>{name}</strong>
              <em className={state === "Connected" ? "is-done" : ""}>{state}</em>
            </article>
          ))}
        </div>
        <Track className="bv-accent" frames={accent} />
      </Track>
    </div>
  );
}
