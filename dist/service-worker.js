importScripts("/precache-manifest.f094fa99b6221c3d07a9b884f822c7ef.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef,no-restricted-globals */

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: "saleor-store-front",
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp("^http.*(?:png|gif|jpg|jpeg|webp|svg|csv|pdf)"),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    blacklist: [
      new RegExp("/graphql"),
      new RegExp("/dashboard"),
      new RegExp("/media/export_files"),
      new RegExp("/plugins"),
      new RegExp("/storybook"),
      new RegExp("/__"), // used by cypress tests runner
    ],
  }
);

