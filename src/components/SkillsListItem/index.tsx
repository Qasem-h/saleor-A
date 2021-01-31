import "./scss/index.scss";
// import { Link } from "react-router-dom";

// import isEqual from "lodash/isEqual";
import * as React from "react";

// import { Thumbnail } from "@components/molecules";
// import { generatePostUrl } from "../../core/utils";

interface SkillsListItemProps {
  skill: any;
}

const SkillsListItem: React.FC<SkillsListItemProps> = ({ skill }) => {
  return <li>{skill.title}</li>;
};

export default SkillsListItem;
