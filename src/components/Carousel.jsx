import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import Vector from "../assets/taskweb/Vector.svg";
import Vector1 from "../assets/taskweb/Vector1.svg";
const styles = {
  root: {},
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    height: "50rem",
    scrollSnapType: "x mandatory",
  },
  item: {
    width: "35rem",
    height: "35rem",
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: "start",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: "flex",
  },
  paginationButton: {
    margin: "1rem",
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    fontSize: "3rem",
  },
};

const Carousel = ({ items, renderItem }) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();

  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <div style={styles.controls} aria-hidden>
        <div
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => prev()}
        >
          <img src={Vector1} alt="" srcSet="" />
        </div>
        <div style={styles.pageIndicator}>
          {activePageIndex + 1} / {pages.length}
        </div>
        <div
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {}),
          }}
          onClick={() => next()}
        >
          <img src={Vector} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

const CarouselItem = ({ isSnapPoint, children }) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);

export { Carousel, CarouselItem };
