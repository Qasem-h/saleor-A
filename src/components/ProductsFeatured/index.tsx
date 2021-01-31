import * as React from "react";

import { ProductListItem, Title } from "..";
import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
  subTitle?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({
  title,
  subTitle,
}) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(() => data.products.edges, []);
        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <Title title={title} subTitle={subTitle} />
                <div className="row">
                  {products.map(({ node: product }) => (
                    <div className="col-md-3 col-sm-6">
                      <ProductListItem product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Featured Products",
  subTitle: "Awesome Products",
};

export default ProductsFeatured;
