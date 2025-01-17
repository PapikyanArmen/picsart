import React from "react";
import { SortOrder } from "@/app/types";
import cn from "classnames";

import styles from "./Sort.module.scss";

const SortIcon = (sort: { order: SortOrder }) => {
  const { order } = sort;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      version="1.1"
      xmlSpace="preserve"
      className={cn(styles.icon, {
        [styles.icon_desc]: order === "desc",
        [styles.icon_asc]: order === "asc",
        [styles.icon_def]: order === "default",
      })}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(1,0,0,1,-1216,-320)">
        <rect
          id="Icons"
          x="0"
          y="0"
          width="1280"
          height="800"
          style={{ fill: "none" }}
        />
        <g id="Icons1">
          <g id="Strike"></g>
          <g id="H1"></g>
          <g id="H2"></g>
          <g id="H3"></g>
          <g id="list-ul"></g>
          <g id="hamburger-1"></g>
          <g id="hamburger-2"></g>
          <g id="list-ol"></g>
          <g id="list-task"></g>
          <g id="trash"></g>
          <g id="vertical-menu"></g>
          <g id="horizontal-menu"></g>
          <g id="sidebar-2"></g>
          <g id="Pen"></g>
          <g id="Pen1"></g>
          <g id="clock"></g>
          <g id="external-link"></g>
          <g id="hr"></g>
          <g id="info"></g>
          <g id="warning"></g>
          <g id="plus-circle"></g>
          <g id="minus-circle"></g>
          <g transform="matrix(1,0,0,1,128,0)">
            <g
              id="caret-down"
              transform="matrix(0.522955,0.522955,-0.525161,0.525161,1082.79,109.448)"
            >
              <path
                d="M288,216L256,216L256,212L284,212L284,184L288,184L288,216Z"
                style={{ fill: "rgb(217,217,217)", fillRule: "nonzero" }}
              />
            </g>
            <g
              id="caret-down1"
              transform="matrix(-0.522955,-0.522955,0.525161,-0.525161,1157.21,594.552)"
            >
              <path
                d="M288,216L256,216L256,212L284,212L284,184L288,184L288,216Z"
                style={{ fillRule: "nonzero" }}
              />
            </g>
          </g>
          <g id="vue"></g>
          <g id="cog"></g>
          <g id="logo"></g>
          <g id="radio-check"></g>
          <g id="eye-slash"></g>
          <g id="eye"></g>
          <g id="toggle-off"></g>
          <g id="shredder"></g>
          <g id="spinner--loading--dots-"></g>
          <g id="react"></g>
          <g id="check-selected"></g>
          <g id="turn-off"></g>
          <g id="code-block"></g>
          <g id="user"></g>
          <g id="coffee-bean"></g>
          <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
            <g id="coffee-beans">
              <g id="coffee-bean1"></g>
            </g>
          </g>
          <g id="coffee-bean-filled"></g>
          <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
            <g id="coffee-beans-filled">
              <g id="coffee-bean2"></g>
            </g>
          </g>
          <g id="clipboard"></g>
          <g transform="matrix(1,0,0,1,128.011,1.35415)">
            <g id="clipboard-paste"></g>
          </g>
          <g id="clipboard-copy"></g>
          <g id="Layer1"></g>
        </g>
      </g>
    </svg>
  );
};

export default SortIcon;
