import React from "react";

const Card = ({ startYear, endYear, title, company, description }) => {
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <div className="text-gray-700 dark:text-gray-300 mb-3 text-sm space-y-2">
          {description.map((item, index) => {
            // Empty line
            if (!item || item.trim() === "") {
              return <div key={index} className="h-2" />;
            }
            // Section header (ends with colon)
            if (item.endsWith(":")) {
              return (
                <h4 key={index} className="font-semibold text-gray-900 dark:text-white mt-3 first:mt-0">
                  {item}
                </h4>
              );
            }
            // Bullet point
            return (
              <div key={index} className="flex items-start">
                <span className="text-gray-500 dark:text-gray-400 mr-2">•</span>
                <span className="flex-1">{item}</span>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">
        {description}
      </p>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
          {startYear} - {endYear}
        </span>
      </div>
      {renderDescription()}
    </div>
  );
};

function SlideScroll({ data }) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <Card
          key={index}
          startYear={item.startYear}
          endYear={item.endYear}
          company={item.company}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default SlideScroll;
