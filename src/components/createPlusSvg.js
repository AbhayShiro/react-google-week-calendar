import React from "react";
import SC from "styled-components";

const SVG = SC.svg`
  padding-left: 4px;
  margin-right: 10px;
`;
/**
 * @description This SVG is taken from Google Calendar site. The author in no way claims ownership over any Google logo.
 */
export default () => (
  <SVG width="36" height="36" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z" />
    <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
    <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
    <path fill="#EA4335" d="M20 16V6h-4v14z" />
    <path fill="none" d="M0 0h36v36H0z" />
  </SVG>
);
