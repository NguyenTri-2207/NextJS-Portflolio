import React from "react";
import Skill from "components/organisms/Skill";

const SkillTeamplate = ({ data }) => {
  return (
    <section className="section-tempale  lg:h-screen overflow-hidden">
      <Skill data={data} />
    </section>
  );
};
export default SkillTeamplate;
