import React from 'react';

export default function BackArrow(props) {
  return (
    <svg
      className={props.baseLayer}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
    >
      <polygon
        className={props.color0}
        points="35.3,38.2 31.3,42.3 14,25.1 31.3,7.8 35.3,11.9 22.1,25.1 35.3,38.2 "
      />
      <polygon
        className={props.color1}
        points="21,35.4 17.8,38.5 4.3,25.1 17.8,11.6 21,14.7 10.6,25.1 21,35.4 "
      />
      <polygon
        className={props.color1}
        points="42,35.4 38.8,38.5 25.3,25.1 38.8,11.6 42,14.7 31.6,25.1 42,35.4 "
      />
    </svg>
  );
}
