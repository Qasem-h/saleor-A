import classNames from "classnames";
import React from "react";
import Media from "react-media";
import { PostDescription } from "@components/molecules";
import { PostGallery } from "@components/organisms";
import { smallScreen } from "../../globalStyles/scss/variables.scss";

import { generateCategoryUrl, generatePostUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
import OtherPosts from "./Other";

import { structuredData } from "../../core/SEO/Post/structuredData";
import { IProps } from "./types";

const populateBreadcrumbs = post => [
  {
    link: generateCategoryUrl(post.pategory.id, post.pategory.name),
    value: post.pategory.name,
  },
  {
    link: generatePostUrl(post.id, post.name),
    value: post.name,
  },
];

const Page: React.FC<IProps> = ({ post }) => {
  const postGallery: React.RefObject<HTMLDivElement> = React.useRef();

  const getImages = () => {
    if (post.variants && variantId) {
      const variant = post.variants.find(variant => variant.id === variantId);

      if (variant.images.length > 0) {
        return variant.images;
      }
    }

    return post.images;
  };

  return (
    <div className="post-page">
      <div className="container">
        <Breadcrumbs breadcrumbs={populateBreadcrumbs(post)} />
      </div>
      <div className="container">
        <div className="post-page__post">
          <script className="structured-data-list" type="application/ld+json">
            {structuredData(post)}
          </script>
          <Media query={{ maxWidth: smallScreen }}>
            {matches =>
              matches ? (
                <>
                  <GalleryCarousel images={getImages()} />
                </>
              ) : (
                <>
                  <div className="post-page__post__gallery" ref={postGallery}>
                    <PostGallery images={getImages()} />
                  </div>
                  <div className="post-page__post__info" />
                </>
              )
            }
          </Media>
        </div>
      </div>
      <div className="container">
        <div className="post-page__post__description">{post.contentJson}</div>
      </div>
      <OtherPosts posts={post.pategory.posts.edges} />
    </div>
  );
};

export default Page;
