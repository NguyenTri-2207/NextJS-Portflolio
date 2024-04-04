import React from "react";
import Skill from "components/organisms/Skill";

const SkillTeamplate = ({ data, dataCardYear }) => {
  return (
    <section className="section-tempale  lg:h-screen overflow-hidden">
      <Skill data={data} dataCardYear={dataCardYear} />
    </section>
  );
};
export default SkillTeamplate;
