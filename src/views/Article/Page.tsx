import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { RichTextContent } from "@components/atoms";
import { Breadcrumb, Breadcrumbs } from "../../components";
import breadcrumbBackgroundImage from "../../images/breadcrumb-bg.jpg";

interface PageNavigationElement {
  active: boolean;
  label: string;
  url: string;
}

interface PageProps {
  breadcrumbs: Breadcrumb[];
  headerImage: string | null;
  navigation: PageNavigationElement[];
  page: {
    contentJson: any;
    title: string;
  };
}
const defaultBackgroundImage = {
  backgroundImage: `url(${breadcrumbBackgroundImage})`,
  backgroundPosition: "left top",
  backgroundSize: "auto",
  backgroundRepeat: "repeat",
  backgroundAttachment: "fixed",
};

export const Page: React.FC<PageProps> = ({
  breadcrumbs,
  headerImage,
  navigation,
  page,
}) => (
  <div className="article-page">
    <div
      className="article-page__header"
      style={
        headerImage
          ? { backgroundImage: `url(${headerImage})` }
          : defaultBackgroundImage
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="article-page__header__title">
              <h1>{page.title}</h1>
            </span>
            <span className="article-page__header__breadcrumb">
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="article-page__container">
        <div className="article-page__navigation">
          <ul>
            {navigation.map(menuElement => (
              <li
                className={classNames({
                  "article-page__navigation-element": true,
                  "article-page__navigation-element--active":
                    menuElement.active,
                })}
                key={menuElement.url}
              >
                <Link to={menuElement.url}>{menuElement.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="article-page__content">
          <RichTextContent descriptionJson={page.contentJson} />
        </div>
      </div>
    </div>
  </div>
);
export default Page;
