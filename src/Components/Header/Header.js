import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";

// import svg
import { ReactComponent as DropDown } from "../../Assets/dropDown.svg";

function Header(props) {
  const [rankOpen, setRankOpen] = useState(false);

  return (
    <div className="HeaderWrapper">
      <a href="/shadows" className="HeaderWrapper__Item">
        <p>Shadows</p>
      </a>
      <button
        onMouseEnter={() => setRankOpen(true)}
        onMouseLeave={() => setRankOpen(false)}
        className="HeaderWrapper__Item"
      >
        <div className="HeaderWrapper__Item--Title">
          <p>Ranks</p>
          <DropDown />
        </div>
        {rankOpen && (
          <div className="HeaderWrapper__Item--dropDownParent">
            <div className="HeaderWrapper__Item--dropDown">
              <a href="/rank/s" className="HeaderWrapper__Item--dropDown__item">
                S-Rank
              </a>
              <a href="/rank/a" className="HeaderWrapper__Item--dropDown__item">
                A-Rank
              </a>
              <a
                href="/rank/human"
                className="HeaderWrapper__Item--dropDown__item"
              >
                Humans
              </a>
              <a
                href="/rank/monarch"
                className="HeaderWrapper__Item--dropDown__item"
              >
                Monarchs
              </a>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
