const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ size = 34, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      {children}
    </svg>
  );
}

export const icons = {
  sales: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="13" r="6" />
      <path d="M12 13V9M9 3h6M12 3v3" />
    </Svg>
  ),
  repair: (p) => (
    <Svg {...p}>
      <path d="M14 7a3.5 3.5 0 0 1-4.6 4.6L5 16v3h3l4.4-4.4A3.5 3.5 0 0 1 17 10l3-3-3-3-3 3z" />
    </Svg>
  ),
  service: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 12l3.5 2M12 7v5" />
    </Svg>
  ),
  strap: (p) => (
    <Svg {...p}>
      <rect x="8" y="9" width="8" height="6" rx="1" />
      <path d="M10 9V5h4v4M10 15v4h4v-4" />
    </Svg>
  ),
  battery: (p) => (
    <Svg {...p}>
      <rect x="3" y="8" width="16" height="8" rx="1" />
      <path d="M21 11v2M7 10v4" />
    </Svg>
  ),
  water: (p) => (
    <Svg {...p}>
      <path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3z" />
    </Svg>
  ),
  gift: (p) => (
    <Svg {...p}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 13h16M12 9v11M12 9C9 9 8 4 12 6c4-2 3 3 0 3z" />
    </Svg>
  ),
  calendar: (p) => (
    <Svg {...p}>
      <rect x="4" y="5" width="16" height="16" rx="1" />
      <path d="M4 9h16M9 3v4M15 3v4" />
    </Svg>
  ),
  shield: (p) => (
    <Svg {...p}>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  ),
  store: (p) => (
    <Svg {...p}>
      <path d="M4 9l1.5-5h13L20 9M5 9h14v11H5zM9 20v-6h6v6" />
    </Svg>
  ),
  headset: (p) => (
    <Svg {...p}>
      <path d="M5 12a7 7 0 0 1 14 0M4 12h2v5H4zM18 12h2v5h-2zM18 17a3 3 0 0 1-3 3h-2" />
    </Svg>
  ),
  gem: (p) => (
    <Svg {...p}>
      <path d="M6 4h12l3 5-9 11L3 9z" />
      <path d="M3 9h18M9 4l-1.5 5L12 20M15 4l1.5 5L12 20" />
    </Svg>
  ),
  pin: (p) => (
    <Svg {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  ),
  phone: (p) => (
    <Svg {...p}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </Svg>
  ),
  mail: (p) => (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </Svg>
  ),
  chat: (p) => (
    <Svg {...p}>
      <path d="M4 5h16v11H8l-4 4z" />
      <path d="M8 9h8M8 12h5" />
    </Svg>
  ),
  clock: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </Svg>
  ),
};

export function Icon({ name, ...rest }) {
  const Cmp = icons[name] || icons.service;
  return Cmp(rest);
}
