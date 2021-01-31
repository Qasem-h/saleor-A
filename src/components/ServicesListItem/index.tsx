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
    <div className="services-list-item__unit">
      <div className="services-list-item__unit_icon">
        <span>
          <img src={service.icon} alt="" />
        </span>
      </div>
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesListItem;
