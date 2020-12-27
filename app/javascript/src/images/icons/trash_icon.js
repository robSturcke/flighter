import React from 'react';

export default function TrashIcon(props) {
  return (
    <svg
      className={props.baseLayer}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <path
        className={props.color0}
        d="M133.1,128l23.6,290.7c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H133.1z M194.7,393L188,160
        h18.5l6.9,233H194.7L194.7,393z M265,393h-18V160h18V393z M317.3,393h-18.6l6.8-233H324L317.3,393z M364,92h-36l-26.3-23
        c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9,0-9.7,1.8-13.4,5L184,92h-36c-17.6,0-30,8.4-30,26h276C394,100.4,381.6,92,364,92z"
      />
    </svg>
  );
}
