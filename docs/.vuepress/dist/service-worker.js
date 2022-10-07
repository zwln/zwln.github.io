/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04748ca74be42c1aa9b0fb47d01525b0"
  },
  {
    "url": "about/2021年总结.html",
    "revision": "85b26845ffe56e705a494e1106ea2455"
  },
  {
    "url": "about/index.html",
    "revision": "84c4b26ee8940830b9ba19260bc7ebba"
  },
  {
    "url": "about/关于蓝桥杯、天梯赛的乱七八糟的心得.html",
    "revision": "d2ae9eacbd7543ff21f753a6e6a20be4"
  },
  {
    "url": "about/大二上半学期寒假总结.html",
    "revision": "9f8ff2d534ef58b22e6f914579f7aebb"
  },
  {
    "url": "assets/css/0.styles.437f5b90.css",
    "revision": "ff89ca4859411ded1ded9ea257701874"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86fb9ef3.js",
    "revision": "bcfdf9d006181d92ec8002831dc57295"
  },
  {
    "url": "assets/js/11.b71957d2.js",
    "revision": "ab2c344afdf3ca0ca47b9e71f865f14f"
  },
  {
    "url": "assets/js/12.a10aa479.js",
    "revision": "113930774d51376fa2d1fb5e0fb6d0d2"
  },
  {
    "url": "assets/js/13.c167986a.js",
    "revision": "554c9848f69b78b3bfde940f0ccb504e"
  },
  {
    "url": "assets/js/14.0b132c85.js",
    "revision": "05a25c41a3c29cc01952ec0ead8425f4"
  },
  {
    "url": "assets/js/15.bbe4cffa.js",
    "revision": "63294bdfe461251b84affea7db01c691"
  },
  {
    "url": "assets/js/16.7d4dc65c.js",
    "revision": "a6ab45afa5e1235c1619d68d9813c362"
  },
  {
    "url": "assets/js/17.a9d54357.js",
    "revision": "2456bf175de744319bbc0dd8587fde06"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/3.2d0bd1d8.js",
    "revision": "947a13199b730110e7ac004eebb3cf4e"
  },
  {
    "url": "assets/js/4.497a50fb.js",
    "revision": "080647ff9be16a2b769c1834b1895bc3"
  },
  {
    "url": "assets/js/5.2a4ea775.js",
    "revision": "8ebae7d516fd08d7e18272d5ac967ae6"
  },
  {
    "url": "assets/js/6.299da154.js",
    "revision": "631cf7d939c8ed46a986a9935679b71b"
  },
  {
    "url": "assets/js/7.9923ac8c.js",
    "revision": "25d8bdb626d8242d88d2d912323d85d5"
  },
  {
    "url": "assets/js/8.3ae15225.js",
    "revision": "f7e08572ae5394c671eaa8aef710fd94"
  },
  {
    "url": "assets/js/9.87af897f.js",
    "revision": "936be35c3f0a31b1acbe391a4589c448"
  },
  {
    "url": "assets/js/app.72f1c7a4.js",
    "revision": "b83799e6e0a31904de8911ef067efb1b"
  },
  {
    "url": "cs/network/【http学习笔记一】破冰篇.html",
    "revision": "4e22d90dfb3081d5a35829ddc76dbb8f"
  },
  {
    "url": "cs/network/【http学习笔记三】进阶篇.html",
    "revision": "0c254aa65addceee1c952d91829d05d8"
  },
  {
    "url": "cs/network/【http学习笔记二】基础篇.html",
    "revision": "fc9a25b1735dc7e89c9f5779c583bff6"
  },
  {
    "url": "cs/network/【http学习笔记五】飞翔篇.html",
    "revision": "d23189232e642b5cd21ae3a2aa29b289"
  },
  {
    "url": "cs/network/【http学习笔记六】探索篇.html",
    "revision": "a8f6a9a24a15d746b6a5feb2f79d6ec0"
  },
  {
    "url": "cs/network/【http学习笔记四】安全篇.html",
    "revision": "062a7d7de85c5042ddc812864af08ff3"
  },
  {
    "url": "cs/network/index.html",
    "revision": "758cd6b0b34c60307fe29762a6deb3e6"
  },
  {
    "url": "good/index.html",
    "revision": "0b745767313065134b57d23f420d6b65"
  },
  {
    "url": "guide.html",
    "revision": "5212d44451e9c7b7aef4d0d2db3ed14e"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "e72e889769ab53fe28be7a649a084da8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
