import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-scroll";
function GoTop() {
  return (
    <div className="goTop">
      <Link
        activeClass="active"
        to="intro"
        smooth={true}
        offset={-100}
        duration={500}
      >
        <button id="goTop">
          <KeyboardDoubleArrowUpIcon className="Icon" />
        </button>
      </Link>
      <p>&copy;mahi2023</p>
    </div>
  );
}

export default GoTop;
