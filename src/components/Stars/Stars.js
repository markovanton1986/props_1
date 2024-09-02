import React from "react";
import "./main.css";

function Stars({count}) {
  let arr = [];
  
  for(let i=0; i < count; i++) {
    arr.push(
        <li key={Math.random()}>
          <svg
            fill="#D3BCA2"
            height="28"
            viewBox="0 0 18 18"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
          </svg>
        </li>
    );
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {arr}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0
  };
  

export default Stars;