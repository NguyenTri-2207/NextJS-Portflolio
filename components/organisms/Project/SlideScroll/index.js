import React from "react";
import Card from "components/molecules/Card";

function SlideScroll({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No projects available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {data.map((item) => (
        <Card
          key={item.id || `${item.slug}-${item.title}`}
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
