import React from "react";
import { PostContnet } from "@components/molecules";
import { PostImage } from "@components/organisms";

import OtherPosts from "./Other";

import { structuredData } from "../../core/SEO/Post/structuredData";
import { IProps } from "./types";
// import { Post } from "../../../../byso-dashboard/src/fragments/types/Post";
import breadcrumbBackgroundImage from "../../images/breadcrumb-bg.jpg";

const Page: React.FC<IProps> = ({ post }): JSX.Element => {
  // const postGallery: React.RefObject<HTMLDivElement> = React.useRef();
  const defaultBackgroundImage = {
    backgroundImage: `url(${breadcrumbBackgroundImage})`,
    backgroundPosition: "left top",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
  };
  const getImages = () => {
    return post.images;
  };
  return (
    <>
      <div
        className="article-page__header"
        style={defaultBackgroundImage && defaultBackgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <span className="article-page__header__title">
                <h1>{post.title}</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="post-page">
        <div className="container">
          <div className="post-page__post">
            <script className="structured-data-list" type="application/ld+json">
              {structuredData(post)}
            </script>
            <div className="post-page_mx-auto" style={{ maxWidth: "980px" }}>
              <PostImage images={getImages()} />
            </div>
          </div>
        </div>
        <div className="post-page_mx-auto" style={{ maxWidth: "840px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-10 col-xl-10">
                <div className="post-page__post__title"> {post.title}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="post-page__post__content">
                <PostContnet contentJson={post.contentJson} />
              </div>
            </div>
          </div>
        </div>
        <OtherPosts posts={post.pategory.posts.edges} />
      </div>
    </>
  );
};

export default Page;
