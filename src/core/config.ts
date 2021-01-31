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
  description:
    "demo website",
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
    "Founded in 1995 in Muscat. At Sattire we design and manufacture high-quality bespoke curtains tailor made to fit everyone's taste and budget perfectly. All our curtains are made in-house to the highest level of workmanship with personal care and attention to the detail paid to every work we under take. Based on the latest trend of interiors we do custom made craftsmanship. Expertly made curtains and blinds, can enhance a window to stunning effect. When wall paper, carpets and furniture is added it can turn an ordinary room into something quite extra ordinary. We have accomplished several services to help with the individual requirement of each client, ranging from custom designing to implementation etc. Our extensive range of products sourced globally, we are here to help our client in every step. ",
};
export const COPYRIGHT = {
  madein: "Made with ♥ in Byso © 2021,All rights reserved",
  by: "By Qasem_h",
  link: "https://github.com/Qasem-h",
};

export const SLIDER_CONTENT = [
  {
    title: "Vulputate Mollis Ultricies",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    button: "Read More",
    image: require("../images/slider/slider-bg-1.jpg"),
  },
  {
    title: "Tortor Dapibus",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    button: "Discover",
    image: require("../images/slider/slider-bg-2.jpg"),
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    button: "Buy now",
    image: require("../images/slider/slider-bg-3.jpg"),
  },
  {
    title: "Ultricies Vulputate Mollis",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: require("../images/slider/slider-bg-4.jpg"),
  },
  {
    title: "Odo Aenean Quam Tortor",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: "Discover",
    image: require("../images/slider/slider-bg-5.jpg"),
  },
];

export const SERVICES = [
  {
    title: "Roller Blinds",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_1.png"),
  },
  {
    title: "Roman Blinds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_2.png"),
  },
  {
    title: "Ultricies Vulputate Mollis",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_3.png"),
  },
  {
    title: "Odo Aenean Quam Tortor",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_4.png"),
  },
  {
    title: "Odo Aenean Quam Tortor",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetu sit.Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_5.png"),
  },
  {
    title: "Odo Aenean Quam Tortor",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur.Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum",
    icon: require("../images/services/icon_6.png"),
  },
];

export const SKILLS = {
  title: "Our Expertise",
  description: "All types of drapery and curtain headings",
  bg_iamge: require("../images/skill-bg.jpg"),
  skills: [
    {
      title: "Swags and tails, Flat pelmet, Italian stringing,",
    },
    {
      title:
        "Roman Blinds, Austrian Blinds, Roller blind, vertical blind, etc.",
    },
    {
      title:
        "Curtains with Pinch Pleat, Pencil pleat, Eyelets, Goblet pleat, Box Pleat, Inverted pleat, Smocking gathers, French pleat, etc.",
    },

    {
      title:
        "Hand and Machine embroidery of silk, sequence, bead, gold silver thread Zari, and crystals to fulfil the need of client.",
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
  ],
};

export const EMAILJS_PARAMS = {
  service_id: "service_ito2ojt",
  template_id: "template_rabxu2o",
  user_id: "user_EdyOSG6Wli1JtUj7jL6ib",
};
