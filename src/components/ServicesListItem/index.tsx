import "./scss/index.scss";
// import { Link } from "react-router-dom";

// import isEqual from "lodash/isEqual";
import * as React from "react";

// import { Thumbnail } from "@components/molecules";
// import { generatePostUrl } from "../../core/utils";

interface ServicesListItemProps {
  service: any;
}

const ServicesListItem: React.FC<ServicesListItemProps> = ({ service }) => {
  return (
    <div className="post-list-item">
      <div className="post-list-item__image">
        <img src={service.icon} alt="" />
      </div>
      <div className="post-list-item__post-body">
        <h4 className="post-list-item__post-body_title">{service.title}</h4>
        <div className="post-list-item__post-body_btn-bar">
          {service.description}
        </div>
      </div>
    </div>
  );
};

export default ServicesListItem;
