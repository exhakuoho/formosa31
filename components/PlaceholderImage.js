import Image from "next/image";

// Stand-in for the prototype's <image-slot>. Pass a real `src` (a file
// dropped into /public/images/...) once the shop has photography; until
// then this renders a clearly-labeled placeholder box at the same size.
export default function PlaceholderImage({ src, alt = "", label, style, sizes = "100vw", priority = false }) {
  const box = { background: "#0F1826", ...style };

  if (src) {
    return (
      <div style={{ ...box, position: box.position || "relative", overflow: "hidden" }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <div
      style={{
        ...box,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
        border: "1px dashed rgba(255,255,255,0.18)",
        color: "#5a6473",
        fontFamily: "var(--font-noto-sans-tc)",
        fontSize: 13,
        letterSpacing: "0.5px",
      }}
    >
      {label}
    </div>
  );
}
