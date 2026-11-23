"use client";
import {useEffect, useRef} from "react";
export default function MobileMenu({items, active}) {
  const menu=useRef(null);
  useEffect(()=>{
    function dismiss(event) {
      if (!menu.current?.open) return;
      if (event.type === "keydown" && event.key === "Escape") {
        menu.current.open=false; menu.current.querySelector("summary").focus();
      } else if(event.type === "pointerdown" && !menu.current.contains(event.target)) menu.current.open=false;
    }
    document.addEventListener("keydown",dismiss);
    document.addEventListener("pointerdown",dismiss);
    return ()=>{document.removeEventListener("keydown",dismiss);document.removeEventListener("pointerdown",dismiss)};
  },[]);
  return <details ref={menu} className="mobile-menu"><summary>選單</summary>
    <nav aria-label="手機主選單">{items.map(item=><a key={item.href} aria-current={active===item.key?"page":undefined} href={item.href}>{item.label}</a>)}</nav>
  </details>;
}
