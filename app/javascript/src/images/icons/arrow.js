import React from 'react';

export default function Arrow(props) {
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
        points="11,11.9 15,7.8 32.3,25.1 15,42.3 11,38.2 24.2,25.1 11,11.9 "
      />
      <polygon
        className={props.color1}
        points="25.3,14.7 28.5,11.6 42,25.1 28.5,38.5 25.3,35.4 35.7,25.1 25.3,14.7 "
      />
      <polygon
        className={props.color1}
        points="4.3,14.7 7.5,11.6 21,25.1 7.5,38.5 4.3,35.4 14.7,25.1 4.3,14.7 "
      />
    </svg>
  );
}
