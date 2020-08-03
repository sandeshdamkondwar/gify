import React, { useState, useCallback } from "react";
import classNames from "classnames";

import "./GIFPlayer.scss";

interface IGIFPlayerProps {
  gif: string;
  still: string;
  height: number;
  title: string;
  className: string;
}

const GifPlayer = ({
  gif,
  still,
  title,
  className,
  height,
}: IGIFPlayerProps) => {
  const [playing, setplaying] = useState(false);

  const toggle = useCallback(() => {
    setplaying(!playing);
  }, [playing]);

  const classes = classNames("gif_player", className, { playing: playing });

  return (
    <div className={classes} onClick={toggle}>
      <div className="play_button"></div>
      <img
        height={height}
        src={playing ? gif || still : still || gif}
        alt={title}
      />
    </div>
  );
};

export default GifPlayer;
