import React from 'react';

export default function OpenIcon(props) {
  return (
    <svg
      className={props.baseLayer}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
    >
      <polygon
        className={props.color1}
        points="14,38.2 27.2,25.1 14,11.9 18,7.8 35.3,25.1 18,42.3 14,38.2 "
      />
      <polygon
        className={props.color0}
        points="4,38.2 17.2,25.1 4,11.9 8,7.8 25.3,25.1 8,42.3 4,38.2 "
      />
      <polygon
        className={props.color0}
        points="24,38.2 37.2,25.1 24,11.9 28,7.8 45.3,25.1 28,42.3 24,38.2 "
      />
    </svg>
  );
}
