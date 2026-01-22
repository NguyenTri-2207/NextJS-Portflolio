import React from "react";
import SlideScroll from "./SlideScroll/index";

export default function Project({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="container py-12">
      <div className="row">
        <div className="col-12">
          <SlideScroll data={Array.isArray(data) ? data : []} />
        </div>
      </div>
    </div>
  );
}
