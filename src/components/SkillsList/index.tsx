import "./scss/index.scss";
import * as React from "react";
import { Title, SkillsListItem } from "..";
import { SKILLS } from "../../core/config";

interface SkillsListProps {
  title?: string;
  subTitle?: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ title, subTitle }) => {
  const skillsList = SKILLS;
  if (skillsList.skills.length) {
    return (
      <div className="skills-list">
        <div className="container">
          <Title title={title} subTitle={subTitle} />
          <div className="row">
            <div className="col-md-5">
              <div className="images-overlap">
                <figure>
                  <img
                    src={skillsList.bg_iamge}
                    height="660"
                    width="470"
                    className="img-fluid img-1 aos-init aos-animate"
                    data-aos="fade-up"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-7">
              <div className="skills-overlap">
                <div className="skills-content" />
                <ul className="skills-content_list-check">
                  {skillsList.skills.map(skill => (
                    <SkillsListItem skill={skill} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

SkillsList.defaultProps = {
  title: "We will do it in the best way",
  subTitle: "Our Expertise",
};

export default SkillsList;
