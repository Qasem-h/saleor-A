import postPhoto from "./static.png";

export const oneImage = [
  {
    alt: "post",
    url: postPhoto,
    url2x: postPhoto,
  },
];

export const threeImages = [...oneImage, ...oneImage, ...oneImage];

export const eightImages = [
  ...oneImage,
  ...oneImage,
  ...oneImage,
  ...oneImage,
  ...oneImage,
  ...oneImage,
  ...oneImage,
  ...oneImage,
];
