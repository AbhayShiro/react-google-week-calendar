import React from "react";
import SC from "styled-components";
import SVG from "./createPlusSvg";

const Button = SC.button`
    border-radius: 25px;
    height: 48px;
    width: auto;
    transition: all .3s cubic-bezier(0.4,0.0,0.2,1);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .25px;
    text-transform: none;
    padding: 0 24px 0 4px;
    display: flex;
    align-items: center;
    background: white;
    border: none;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
    outline: none;
    margin: 20px 0;
    &:focus{
       box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
    }
    &:hover{
      background-color: #e9e9ea21;
      box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
    }
`;

export default ({ onClick }) => (
  <Button className="create-calendar-event-button" onClick={onClick}>
    <SVG /> Create
  </Button>
);
