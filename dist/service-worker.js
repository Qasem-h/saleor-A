importScripts("/precache-manifest.2f37e1749929131b2cd89cf70fe49694.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

