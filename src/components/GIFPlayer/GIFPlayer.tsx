import React, { useState, useCallback } from "react";
import classNames from "classnames";
interface IGIFPlayerProps {
  gif: string;
  still: string;
  height: number;
  title: string;
  className?: string;
  single?: boolean;
  autoPlay?: boolean;
}

const GifPlayer = ({
  gif,
  still,
  title,
  className,
  single,
  height,
  autoPlay = false,
}: IGIFPlayerProps) => {
  const refPlaceholder = React.useRef<HTMLDivElement>(null);
  const [playing, setplaying] = useState(autoPlay);

  const toggle = useCallback(() => {
    if (autoPlay) return;
    setplaying(!playing);
  }, [autoPlay, playing]);

  const removePlaceholder = useCallback(() => {
    refPlaceholder?.current?.remove();
  }, []);

  const classes = classNames("gif_player", className || "", {
    playing: playing,
    single: single,
  });

  let imageAttr: any = {
    src: playing ? gif || still : still || gif,
    onLoad: removePlaceholder,
    onError: removePlaceholder,
  };

  imageAttr.heigh = height;

  if (single) {
    imageAttr.key = imageAttr.src;
  }

  return (
    <div className={classes} onClick={toggle} style={{ height: `${height}px` }}>
      <div className="play_button" data-test-id={title}></div>

      <div className="placeholder" ref={refPlaceholder}></div>
      <img data-testid="gif-image" {...imageAttr} alt={title} />
    </div>
  );
};

export default GifPlayer;
