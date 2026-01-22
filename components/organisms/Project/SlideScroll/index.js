import React from "react";
import Card from "components/molecules/Card";

function SlideScroll({ data }) {
  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <Card
          key={item.id || index}
          startYear={item.startYear}
          src={item.src}
          title={item.title}
          href={item.href}
          description={item.description}
          slug={item.slug}
        />
      ))}
    </div>
  );
}

export default SlideScroll;
