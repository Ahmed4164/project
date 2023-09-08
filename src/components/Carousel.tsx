import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import Vector from '../assets/taskweb/Vector.svg'
import Vector1 from '../assets/taskweb/Vector1.svg'

// https://github.com/richardscarrott/react-snap-carousel

const styles = {
  root: {
    // border: "2px solid red",
  },
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    // border:"2px solid blue",
    height:"50rem",
    scrollSnapType: "x mandatory"
    
  },
  item: {
    width: "35rem",
    height: "35rem",
    flexShrink: 0
  },
  itemSnapPoint: {
    scrollSnapAlign: "start"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: "flex"
  },
  paginationButton: {
    margin: "1rem"
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: "flex",
    justifyContent: "center",
    padding:"2rem",
    fontSize:"3rem",
  }
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem
}: CarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes
  } = useSnapCarousel();
  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i)
          })
        )}
      </ul>
      <div style={styles.controls} aria-hidden>
        <div
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {})
          }}
          onClick={() => prev()}
        >
          <img src={Vector1} alt="" srcset="" />
        </div>
        {/* {pages.map((_, i) => (
          <button
            key={i}
            style={{
              ...styles.paginationButton,
              ...(activePageIndex === i ? styles.paginationButtonActive : {})
            }}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))} */}
        <div style={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div>
        <div
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {})
          }}
          onClick={() => next()}
        >
          <img src={Vector} alt="" srcset="" />
        </div>
      </div>
      
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}
  >
    {children}
  </li>
);
