import * as React from "react";
import "./sidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon className="sidebar__Icon" />
      <h1 className="sidebar__Title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
