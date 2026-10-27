"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./ProductGallery.module.css";

const number = (index) => String(index + 1).padStart(2, "0");

function Arrow({ direction }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={direction === "previous" ? "M15 5 8 12l7 7" : "m9 5 7 7-7 7"} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function ProductGallery({ images = [], name }) {
  const photos = images.filter((src) => typeof src === "string" && src.trim());
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const railRef = useRef(null);
  const segmentRefs = useRef([]);
  const pointerRef = useRef(null);
  const suppressClickUntil = useRef(0);
  const galleryId = useId();
  const total = photos.length;
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (!isZoomed) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isZoomed]);

  function selectPhoto(index, focusSegment = false) {
    if (!total) return;
    const next = (index + total) % total;
    setActiveIndex(next);

    const rail = railRef.current;
    const segment = segmentRefs.current[next];
    if (focusSegment) segment?.focus({ preventScroll: true });
    if (rail && segment) {
      const left = segment.offsetLeft;
      const right = left + segment.offsetWidth;
      if (left < rail.scrollLeft) rail.scrollLeft = left;
      if (right > rail.scrollLeft + rail.clientWidth) rail.scrollLeft = right - rail.clientWidth;
    }
  }

  function onGalleryKeyDown(event, focusSegment = false) {
    if (total < 2) return;
    const targetIndex = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: total - 1,
    }[event.key];
    if (targetIndex === undefined) return;
    event.preventDefault();
    selectPhoto(targetIndex, focusSegment);
  }

  function startSwipe(event) {
    if (total < 2 || !event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    pointerRef.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endSwipe(event) {
    const start = pointerRef.current;
    pointerRef.current = null;
    if (!start || start.id !== event.pointerId) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY) * 1.3) return;
    suppressClickUntil.current = performance.now() + 450;
    selectPhoto(activeIndex + (deltaX < 0 ? 1 : -1));
  }

  function openPhoto() {
    if (performance.now() < suppressClickUntil.current) return;
    setIsZoomed(true);
  }

  function closePhoto() {
    dialogRef.current?.close();
  }

  return (
    <div className={styles.gallery} role="region" aria-label={`${name} 商品照片`}>
      <div className={styles.canvas}>
        {total ? (
          <button
            ref={openerRef}
            type="button"
            className={styles.stage}
            aria-label={`放大商品照片 ${number(activeIndex)}，共 ${total} 張`}
            aria-haspopup="dialog"
            onClick={openPhoto}
            onKeyDown={onGalleryKeyDown}
            onPointerDown={startSwipe}
            onPointerUp={endSwipe}
            onPointerCancel={() => { pointerRef.current = null; }}
          >
            <Image key={activePhoto} src={activePhoto} alt={`${name} 商品照片 ${number(activeIndex)}`} fill sizes="(max-width: 760px) calc(100vw - 56px), (max-width: 1060px) calc(100vw - 100px), 570px" className={styles.photo} priority draggable={false} />
            <span className={styles.zoomHint} aria-hidden="true">
              點按放大
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </button>
        ) : (
          <div className={`${styles.stage} ${styles.empty}`}>
            <span className={styles.emptyMark} aria-hidden="true">31</span>
            <p>商品照片準備中</p>
            <span>歡迎聯絡門市了解商品細節</span>
          </div>
        )}
      </div>

      {total > 0 ? (
        <div className={styles.controls}>
          {total > 1 && <button type="button" className={styles.arrowButton} aria-label="上一張商品照片" onClick={() => selectPhoto(activeIndex - 1)}><Arrow direction="previous" /></button>}
          <div className={styles.progress}>
            <div className={styles.caption}>
              <span className={styles.counter} aria-live="polite" aria-atomic="true"><span className={styles.srOnly}>商品照片 </span>{number(activeIndex)} <span>/ {String(total).padStart(2, "0")}</span></span>
              {total > 1 && <span className={styles.instruction}>滑動或點選線段切換</span>}
            </div>
            {total > 1 && (
              <div className={styles.segments} ref={railRef} role="group" aria-label="選擇商品照片" onKeyDown={(event) => onGalleryKeyDown(event, true)}>
                {photos.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    ref={(element) => { segmentRefs.current[index] = element; }}
                    type="button"
                    className={styles.segment}
                    aria-label={`商品照片 ${number(index)}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => selectPhoto(index)}
                  />
                ))}
              </div>
            )}
          </div>
          {total > 1 && <button type="button" className={styles.arrowButton} aria-label="下一張商品照片" onClick={() => selectPhoto(activeIndex + 1)}><Arrow direction="next" /></button>}
        </div>
      ) : null}

      {total > 0 && (
        <dialog
          ref={dialogRef}
          className={styles.lightbox}
          aria-labelledby={`${galleryId}-title`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              closePhoto();
              return;
            }
            onGalleryKeyDown(event);
          }}
          onClick={(event) => { if (event.target === event.currentTarget) closePhoto(); }}
          onClose={() => { setIsZoomed(false); openerRef.current?.focus({ preventScroll: true }); }}
        >
          <div className={styles.lightboxContent}>
            <div className={styles.lightboxHeading}>
              <p id={`${galleryId}-title`}>{name}<span>商品照片 {number(activeIndex)} / {String(total).padStart(2, "0")}</span></p>
              <button ref={closeRef} type="button" className={styles.closeButton} aria-label="關閉放大檢視" onClick={closePhoto}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.4" /></svg>
              </button>
            </div>
            <div className={styles.lightboxImage}>
              <Image src={activePhoto} alt={`${name} 商品照片 ${number(activeIndex)} 放大檢視`} fill sizes="(max-width: 760px) calc(100vw - 40px), 88vw" className={styles.enlargedPhoto} />
            </div>
            {total > 1 && (
              <div className={styles.lightboxControls}>
                <button type="button" className={styles.arrowButton} aria-label="上一張放大商品照片" onClick={() => selectPhoto(activeIndex - 1)}><Arrow direction="previous" /></button>
                <span aria-live="polite" aria-atomic="true">{number(activeIndex)} / {String(total).padStart(2, "0")}</span>
                <button type="button" className={styles.arrowButton} aria-label="下一張放大商品照片" onClick={() => selectPhoto(activeIndex + 1)}><Arrow direction="next" /></button>
              </div>
            )}
          </div>
        </dialog>
      )}
    </div>
  );
}
