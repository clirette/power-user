import React from "react";

const PanelDescription = ({ title, description }) => {
  return (
    <div className="panel-description bg-medium">
      <h1 className="panel-description__title">{title}</h1>
      <p className="panel-description__lead">{description}</p>
    </div>
  );
};

export default PanelDescription;
