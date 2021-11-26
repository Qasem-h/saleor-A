/* eslint-disable global-require */

import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const POSTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/sattire.oman",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/sattire.oman",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: "https://twitter.com/sattire.oman",
    path: require("../images/twitter-icon.svg"),
  },
  {
    ariaLabel: "youtube",
    href: "https://www.youtube.com/channel/sattire.oman",
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description: "demo website",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Website - Coming soon",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
  PaymentConfirm,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Address",
    nextActionName: "Continue to Shipping",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Shipping",
    nextActionName: "Continue to Payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
  {
    index: 4,
    link: "/checkout/payment-confirm",
    name: "Payment confirm",
    onlyIfShippingRequired: false,
    step: CheckoutStep.PaymentConfirm,
    withoutOwnView: true,
  },
];

export const CONTACT_INFO = {
  title: "CONTACT INFO",
  phone_number: {
    title: "Phone Number",
    phone: "+968-96066585, +968-94044923",
    icon_path: require("../images/phone.svg"),
  },
  address: {
    address:
      "Al Asfoor Plaza, Shop no. 3, (Ground Floor), Qurum, Next to Pizza Hut and Oman Arab Bank.",
    title: "Address",
    icon_path: require("../images/address.svg"),
  },
  email: {
    title: "Support Email",
    email: "info@thesattire.com",
    icon_path: require("../images/email.svg"),
  },
  open_hours: {
    title: "Open Hours",
    open_hours: "9.30 AM - 6.00 PM",
    icon_path: require("../images/open_hour.svg"),
  },
};

export const ABOUT_US = {
  title: "ABOUT US",
  description:
    "Establshed in 1995, Sattire is an Omani brand which specializes in the design and manufacture of high-quality bespoke curtains tailor made to fit the taste and expectations of individuals. In-house manufacturing with excellent workmanship to provide you with the best of both, quality and price.",
};
export const COPYRIGHT = {
  madein: "Made with ♥ in ",
  byso: "Byso ",
  byso_link: "http://www.byso.pro",
  rights: "© 2021,All rights reserved",
  by: "By Qasem_h",
  link: "https://github.com/Qasem-h",
};

export const SLIDER_CONTENT = [
  {
    title: "Looking for the Perfect Tents ?",
    description: "We'll take care of everything",
    button: "Read More",
    image: require("../images/slider/slider-bg-1.jpg"),
  },
  {
    title: "Living Area",
    description: "Horizontal & Vertical Blinds Authentic & Affordable ",
    button: "Discover",
    image: require("../images/slider/slider-bg-2.jpg"),
  },
  {
    title: "Style & Elegance",
    description: "Make a difference @Home",
    button: "Buy now",
    image: require("../images/slider/slider-bg-3.jpg"),
  },
  {
    title: "Showroom quality products",
    description: "but without the price tag",
    button: "Read More",
    image: require("../images/slider/slider-bg-4.jpg"),
  },
];

export const SERVICES = [
  // {
  //   title: "Blinds",
  //   description:
  //     "Customizable, elegant vertical blinds with wide range of collections.",
  //   icon: require("../images/services/Tents.jpg"),
  // },
  {
    title: "Curtains",
    description:
      "Give an elegant touch to your room with specially made curtains.",
    icon: require("../images/services/curtains1.jpg"),
  },
  {
    title: "Readymade Curtains and Blinds",
    description: "Select your favourite from our freshly made designs.",
    icon: require("../images/services/ReadymadeCurtainsAndBlinds.png"),
  },
  {
    title: "WallPapers",
    description:
      "Decorate your house with the finest wallpapers from our collection.",
    icon: require("../images/services/wallpaper.jpg"),
  },
  {
    title: "Carpets And Rugs",
    description:
      "Customise your living space with a twist. Choose the perfect carpet for your room.",
    icon: require("../images/services/carpetsAndRugs.png"),
  },
  {
    title: "Furniture Upholstery",
    description: "Let us do the work and help find the perfect fit for you.",
    icon: require("../images/services/furnitureUpholstery.jpg"),
  },
  {
    title: "Tents",
    description:
      "We make all kinds of Arabic and other tents as per the client.",
    icon: require("../images/services/Tents.jpg"),
  },
  {
    title: "Service & Maintenance",
    description:
      "We've got you covered to keep your house looking as fresh as ever.",
    icon: require("../images/services/ServiceAndMaintainance.jpg"),
  },
  {
    title: "Interior Designing",
    description:
      "Complete Revamp of your living space to bring out the hidden charm that reflects your taste.",
    icon: require("../images/services/interiorDesign.jpg"),
  },
];

export const SKILLS = {
  title: "Our Expertise",
  description: "All types of drapery and curtain headings",
  bg_iamge: require("../images/skill-bg.jpg"),
  skills: [
    {
      title: "Swags, Tails, Flat pelmet, Italian stringing.",
    },
    {
      title:
        "Roman Blinds, Austrian Blinds, Roller blind, vertical blind, etc.",
    },
    {
      title: "Tie-Back of all shapes and sizes.",
    },
    {
      title: "Fixing trimmings and other decorative motifs.",
    },
    {
      title: "Making lined and interlines curtains.",
    },
    {
      title: "Making all types of blinds and net curtains.",
    },
    {
      title:
        "Curtains with Pinch Pleat, Pencil pleat, Eyelets, Goblet pleat, Box Pleat, Inverted pleat,Smocking gathers, French pleat, etc.",
    },

    {
      title:
        "Hand and Machine embroidery of silk, sequence, bead, gold silver thread Zari, and crystals to fulfil the need of client.",
    },
  ],
};

export const EMAILJS_PARAMS = {
  service_id: "service_ito2ojt",
  template_id: "template_rabxu2o",
  user_id: "user_EdyOSG6Wli1JtUj7jL6ib",
};
