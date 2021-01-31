import "./scss/index.scss";
import * as React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className="title">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="title__sub-title">{subTitle}</h3>
          <h2 className="title__section-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
