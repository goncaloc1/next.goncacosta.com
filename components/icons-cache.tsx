import React from "react";

/**
 * Due to splites file being pointed in CSS, pages would
 * sometimes only show the icons after all the photos where loaded,
 * ex.: navigation would be hidden.
 */
export function IconsCache() {
  return (
    <div
      style={{
        visibility: "hidden",
        height: 0,
      }}
    >
      <div className="mCSB_buttonLeft"></div>
      <div
        id="navigation_menu"
        style={{
          margin: 0,
        }}
      >
        <a href="#" id="back" />
      </div>
    </div>
  );
}
