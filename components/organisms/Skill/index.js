import React from "react";

const Skill = ({ dataSkills }) => {
  return (
    <div className="container py-12">
      <div className="row">
        <div className="col-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          {dataSkills && dataSkills.length > 0 && (
            <div className="space-y-8">
              {dataSkills.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                      >
                        <p className="font-medium text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
