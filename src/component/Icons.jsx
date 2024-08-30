import React from "react";

function Icons(props) {
  return (
    <>
      <a href="" className="text-white hover:text-slate-800 transition ease-in-out duration-300">
        <i className={props.icon}></i>
      </a>
    </>
  );
}
