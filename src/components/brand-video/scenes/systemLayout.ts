/** Card geometry shared by the hook and the connection scene. */

export const CARD_W = 250;
export const CARD_H = 118;

export const NODES = [
  {
    id: "crm",
    label: "CRM",
    hint: "Accounts",
    scatter: [150, 168] as const,
    aligned: [210, 446] as const,
    enter: 0.22,
  },
  {
    id: "erp",
    label: "ERP",
    hint: "Finance",
    scatter: [1510, 150] as const,
    aligned: [1460, 446] as const,
    enter: 0.4,
  },
  {
    id: "db",
    label: "Database",
    hint: "Records",
    scatter: [130, 748] as const,
    aligned: [835, 748] as const,
    enter: 0.56,
  },
  {
    id: "book",
    label: "Booking",
    hint: "Reservations",
    scatter: [1520, 760] as const,
    aligned: [1288, 196] as const,
    enter: 0.72,
  },
  {
    id: "tools",
    label: "Internal tools",
    hint: "Operations",
    scatter: [820, 64] as const,
    aligned: [392, 196] as const,
    enter: 0.88,
  },
] as const;

export function center(pos: readonly [number, number]) {
  return [pos[0] + CARD_W / 2, pos[1] + CARD_H / 2] as const;
}

export function line(a: readonly [number, number], b: readonly [number, number]) {
  return `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`;
}

const scatterCenters = Object.fromEntries(NODES.map((node) => [node.id, center(node.scatter)]));
const alignedCenters = Object.fromEntries(NODES.map((node) => [node.id, center(node.aligned)]));

export const BROKEN_LINES = [
  line(scatterCenters.crm, scatterCenters.tools),
  line(scatterCenters.tools, scatterCenters.erp),
  line(scatterCenters.crm, scatterCenters.db),
  line(scatterCenters.erp, scatterCenters.book),
  line(scatterCenters.db, scatterCenters.book),
];

export const HUB = { x: 810, y: 452, w: 300, h: 156 };
export const HUB_CENTER: readonly [number, number] = [HUB.x + HUB.w / 2, HUB.y + HUB.h / 2];

export const CONNECTED_LINES = NODES.map((node) => line(HUB_CENTER, alignedCenters[node.id]));

export const PACKETS = CONNECTED_LINES.map((d, i) => ({ d, delay: 5.55 + i * 0.18 }));
