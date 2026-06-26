import { STORE } from "@/lib/seedData";

export default function StoreMap({ style }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(STORE.address)}&output=embed`;
  return (
    <iframe
      src={src}
      title="FORMOSA31 門市地圖"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0, width: "100%", display: "block", ...style }}
    />
  );
}
