import "./scss/index.scss";
import * as React from "react";
import { Title, ServicesListItem } from "..";
import { SERVICES } from "../../core/config";

interface ServicesListProps {
  title?: string;
  subTitle?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({ title, subTitle }) => {
  const services = SERVICES;
  if (services.length) {
    return (
      <div className="services-list">
        <div className="container">
          <Title title={title} subTitle={subTitle} />
          <div className="row">
            {services.map(service => (
              <div className="col-md-3 col-sm-6">
                <ServicesListItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

ServicesList.defaultProps = {
  title: "We Offer Services",
  subTitle: "Our Services",
};

export default ServicesList;
