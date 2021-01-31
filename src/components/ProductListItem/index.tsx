import "./scss/index.scss";
import { Link } from "react-router-dom";

import isEqual from "lodash/isEqual";
import * as React from "react";
import { Thumbnail } from "@components/molecules";
import { generateProductUrl } from "../../core/utils";

import { TaxedMoney } from "../../@next/components/containers";
import { FeaturedProducts_products_edges_node } from "../ProductsFeatured/gqlTypes/FeaturedProducts";

interface ProductListItemProps {
  product: FeaturedProducts_products_edges_node;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { category } = product;
  const price = product.pricing?.priceRange?.start;
  const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;

  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
      return <TaxedMoney taxedMoney={price} />;
    }
    return (
      <>
        <span className="product-list-item__undiscounted_price">
          <TaxedMoney taxedMoney={priceUndiscounted} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TaxedMoney taxedMoney={price} />
      </>
    );
  };

  const productLink = generateProductUrl(product.id, product.name);

  return (
    <div className="product-item ">
      <div className="product-image">
        <Link to={productLink} key={product.id}>
          <Thumbnail source={product} />
        </Link>
        <span className="product-discount-label">New</span>
      </div>
      <div className="product-content">
        <div className="price">
          <span>{getProductPrice()}</span>
        </div>
        <span className="product-shipping">{category?.name}</span>
        <h3 className="title">
          <Link to={productLink} key={product.id}>
            {product.name}
          </Link>
        </h3>
        <Link className="all-deals" to={productLink} key={product.id}>
          See all deals
        </Link>
      </div>
    </div>
  );
};
export default ProductListItem;
