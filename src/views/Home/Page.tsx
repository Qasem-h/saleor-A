import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
// import { Link } from "react-router-dom";

import {
  ProductsFeatured,
  PostsLatest,
  ServicesList,
  SkillsList,
  ContactForm,
} from "../../components";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

// import noPhotoImg from "../../images/no-photo.svg";
import ImageSlider from "../../components/Slider";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  // const categoriesExist = () => {
  //   return categories && categories.edges && categories.edges.length > 0;
  // };
  const intl = useIntl();

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <ImageSlider />
      <ContactForm
        title={intl.formatMessage({ defaultMessage: "Our Expertise" })}
        subTitle={intl.formatMessage({
          defaultMessage: "We will do it in the best way",
        })}
      />
      <SkillsList
        title={intl.formatMessage({ defaultMessage: "Our Expertise" })}
        subTitle={intl.formatMessage({
          defaultMessage: "We will do it in the best way",
        })}
      />
      <ProductsFeatured
        title={intl.formatMessage({ defaultMessage: "New Arrivals" })}
        subTitle={intl.formatMessage({ defaultMessage: "It’s All New" })}
      />
      <ServicesList
        title={intl.formatMessage({ defaultMessage: "We Offer Services" })}
        subTitle={intl.formatMessage({ defaultMessage: "Our Services" })}
      />
      <PostsLatest
        title={intl.formatMessage({ defaultMessage: "Posts Latest" })}
      />
    </>
  );
};

export default Page;
