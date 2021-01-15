export const structuredData = post => {
  const images = post.images.map(image => new URL(image.url).pathname);
  return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Article",
    content: !post.seoDescription
      ? `${post.content}`
      : `${post.seoDescription}`,
    image: images,
    title: !post.seoTitle ? `${post.name}` : `${post.seoTitle}`,
    url: location.href,
  });
};
