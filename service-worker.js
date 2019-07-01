/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/CNAME","c2d992314354852047bd8ab392aba439"],["/css/app.css","0623b856b22f3a42a4d7f0622e5b4222"],["/css/smartcharts.css","aec3edaa1ad697dacb11a2cd2b58060c"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","7b59a27b1d003de0e1d3eff9cc9f028a"],["/js/0.33ab26346b31eb7b1ba0.js","5484bb43592d84c758b540c46cedd4ad"],["/js/1.33ab26346b31eb7b1ba0.js","be1f14b6180ce20dcfd10ee4ef39d6d8"],["/js/10.33ab26346b31eb7b1ba0.js","31cf6e11dbbe8baa875312559e02ff88"],["/js/11.33ab26346b31eb7b1ba0.js","ca05e8150a80aa61439758282e75ef30"],["/js/12.33ab26346b31eb7b1ba0.js","614fba43013ce8d977edfda01252070f"],["/js/13.33ab26346b31eb7b1ba0.js","0f9110820d0f90f5c061bc45bf8a9d90"],["/js/14.33ab26346b31eb7b1ba0.js","7e8c5fd9561afb1b9c4dfa83941b7777"],["/js/15.33ab26346b31eb7b1ba0.js","ad047001d279087202c9118fcb249821"],["/js/16.33ab26346b31eb7b1ba0.js","17bd555a426986f1f5b5275671b72873"],["/js/17.33ab26346b31eb7b1ba0.js","7da38ee3269ec75a9bae13d0a16abd43"],["/js/18.33ab26346b31eb7b1ba0.js","6a0514c45d94d224f86341bc49ea6190"],["/js/19.33ab26346b31eb7b1ba0.js","0872006da27d0db0817cb4bdade8baa2"],["/js/2.33ab26346b31eb7b1ba0.js","13de4457ae0dac0af67ea336a017e4ad"],["/js/20.33ab26346b31eb7b1ba0.js","b1d3f4f2581f5a8c38113447dc8663d0"],["/js/21.33ab26346b31eb7b1ba0.js","a65bf3c023df301af8e8eebcc0442ad2"],["/js/22.33ab26346b31eb7b1ba0.js","597577761142578c6e933d62d4206e41"],["/js/23.33ab26346b31eb7b1ba0.js","c086b082c3d0f4a63cd8077181e28939"],["/js/24.33ab26346b31eb7b1ba0.js","2596dc5d7a68c7124c8ec5348b9ec34d"],["/js/25.33ab26346b31eb7b1ba0.js","9fadb33ae3f42e8cbb418a6635d64a1e"],["/js/26.33ab26346b31eb7b1ba0.js","67cd654cbfbf1e5882d19f7ee8f9eb15"],["/js/27.33ab26346b31eb7b1ba0.js","46d8b8cbfb3218d96587c6f348cfcf74"],["/js/28.33ab26346b31eb7b1ba0.js","288bda422b1cce5149d75e518cf8b964"],["/js/29.33ab26346b31eb7b1ba0.js","25f2a2bafc8d77b13e5b01c403ebb24a"],["/js/3.33ab26346b31eb7b1ba0.js","3be99bc9fd84f8b5ecc3cd6bc8911d22"],["/js/30.33ab26346b31eb7b1ba0.js","74243bca8ff76a8c6f5c37cea6d98923"],["/js/31.33ab26346b31eb7b1ba0.js","3133975e52537f0f470ad629c535467c"],["/js/32.33ab26346b31eb7b1ba0.js","4d5ebedee980f0894f611f37140d28c7"],["/js/33.33ab26346b31eb7b1ba0.js","b917477f1897ea8ef3dfaaf3a18678a4"],["/js/34.33ab26346b31eb7b1ba0.js","60fa874b9e236d16f78fd5d7c1abdcf8"],["/js/35.33ab26346b31eb7b1ba0.js","cb23d7c76f4bf9458f8ffeee24a50fa9"],["/js/36.33ab26346b31eb7b1ba0.js","3b02b05b659f3ab0fa96dda854bea982"],["/js/37.33ab26346b31eb7b1ba0.js","8aac594cc1ab136a1d406ef145cd5d06"],["/js/38.33ab26346b31eb7b1ba0.js","9c6ceb828f3d5d75721d20db26575bd3"],["/js/39.33ab26346b31eb7b1ba0.js","ad47b19f9c6bf1975aba6561334edfb6"],["/js/4.33ab26346b31eb7b1ba0.js","0838cbb4f86e46d98c4402093d4593ef"],["/js/40.33ab26346b31eb7b1ba0.js","b20606de5a03f7bb4f447978c275b99e"],["/js/404.33ab26346b31eb7b1ba0.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.33ab26346b31eb7b1ba0.js","56eaa2836e24ee09ec3c5e005316aa88"],["/js/42.33ab26346b31eb7b1ba0.js","d0a56adbbbd160f8ad4b9520c3a59a0b"],["/js/43.33ab26346b31eb7b1ba0.js","8450d8f90484806e6417089718f65f42"],["/js/44.33ab26346b31eb7b1ba0.js","4c23afff64b71f12f91c82f0d9c7d3cf"],["/js/45.33ab26346b31eb7b1ba0.js","ff02e30f00fcf7ba8a6cf36537f5538e"],["/js/46.33ab26346b31eb7b1ba0.js","68c505aeb7a92e8441fc4bba7160f99e"],["/js/47.33ab26346b31eb7b1ba0.js","353f164616360f0a42c34398565a4c53"],["/js/48.33ab26346b31eb7b1ba0.js","2efb54073dc3a93af0d4b45a51c7b3b1"],["/js/49.33ab26346b31eb7b1ba0.js","f01b18d0a923bb5c52f5b620a62969c6"],["/js/5.33ab26346b31eb7b1ba0.js","12c8bf3690c831243dcd8cf83de95898"],["/js/50.33ab26346b31eb7b1ba0.js","bdeb015b695ebd81ba495d57486597bc"],["/js/51.33ab26346b31eb7b1ba0.js","f6f6ad0e5bec34c81a4d51c9f738fcc9"],["/js/52.33ab26346b31eb7b1ba0.js","56cfe40e7c0a4e7ac3a8a350f51d7b68"],["/js/53.33ab26346b31eb7b1ba0.js","6ddbac53353bfcec2d99aef382cd14fc"],["/js/54.33ab26346b31eb7b1ba0.js","f047e983dc21452ad41273579b653bd3"],["/js/55.33ab26346b31eb7b1ba0.js","d086b1cec2660ffa42a4a0140cee453b"],["/js/56.33ab26346b31eb7b1ba0.js","1417493b73fa937468a04754ddd23bd6"],["/js/57.33ab26346b31eb7b1ba0.js","0cb02a92ff75994a8434cd9cb462bba7"],["/js/58.33ab26346b31eb7b1ba0.js","4ea25a69881a256f4a772720e7baf244"],["/js/59.33ab26346b31eb7b1ba0.js","29532ee26051227cf6be8ca9b3d7a88e"],["/js/6.33ab26346b31eb7b1ba0.js","8b55f396f4e14a7d21d0d18cca25bd80"],["/js/60.33ab26346b31eb7b1ba0.js","d227b2357f92e7c2aa748d03407a37e0"],["/js/61.33ab26346b31eb7b1ba0.js","ad551d473d43f63be658e6f6ebec0beb"],["/js/62.33ab26346b31eb7b1ba0.js","afa13f1409e53aa6f905172914dda1d2"],["/js/63.33ab26346b31eb7b1ba0.js","24ad4d0decdffd2cb8d1b47644618a7e"],["/js/64.33ab26346b31eb7b1ba0.js","6db2b74cd2e8d04cb193ebd3cc472f0f"],["/js/65.33ab26346b31eb7b1ba0.js","9945e6d05dd6cea5c127dc522c822d30"],["/js/7.33ab26346b31eb7b1ba0.js","9bcabe4dfc6e5f477219f401b32334ef"],["/js/8.33ab26346b31eb7b1ba0.js","8522b40cc5d7e496d0716c985f11dd7d"],["/js/9.33ab26346b31eb7b1ba0.js","fddc38ab360fc84a61371e45679a9498"],["/js/contract.33ab26346b31eb7b1ba0.js","9e5e5278d7e3440a09a1299224e446d9"],["/js/open_positions.33ab26346b31eb7b1ba0.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/open_positions~profit_table~statement.33ab26346b31eb7b1ba0.js","7e0efa163423d0c7dff4f1c6f3afff1f"],["/js/profit_table.33ab26346b31eb7b1ba0.js","ef5483662afd584d179d24da99cb03ec"],["/js/reports.33ab26346b31eb7b1ba0.js","ff79ae8326a8f0af510f85115d218c9d"],["/js/smart_chart.33ab26346b31eb7b1ba0.js","101dc32b0f0de9d6bae2ce76a6aff3e1"],["/js/smartcharts/chartiq-7f9d83.smartcharts.js","819d7a790176b6e858282bed9fdf24c3"],["/js/smartcharts/de-po-b5298e.smartcharts.js","558bd2ad1f09720c1473e4086ebecc3e"],["/js/smartcharts/es-po-501a93.smartcharts.js","d5d35536f2d75574d255fd4c98563c9c"],["/js/smartcharts/fr-po-b22a23.smartcharts.js","e4c38812a6d45d03e6a9e3aacd58e9ad"],["/js/smartcharts/html2canvas-a582dc.smartcharts.js","8239524e41480eb481c170c9d8374744"],["/js/smartcharts/id-po-84a55e.smartcharts.js","951969a3ca42a173de6e84d1fc6f2f15"],["/js/smartcharts/it-po-c5f18d.smartcharts.js","678ec4a5078001d1dcc50da72c4c9f50"],["/js/smartcharts/nl-po-87665a.smartcharts.js","3dff1e6f88cc6d10b14f12ebc3894e18"],["/js/smartcharts/pl-po-71cdc6.smartcharts.js","e5ba9d3d53b360ae31320d0b294e8fb9"],["/js/smartcharts/pt-po-230860.smartcharts.js","408116afafd2f81b1ea7aa8d8be2ff42"],["/js/smartcharts/ru-po-398092.smartcharts.js","2b809b44ce6f201c22411b7af36b9620"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-f09e47.smartcharts.js","b33d5383fd245183fc04294ebec9fb3c"],["/js/smartcharts/vendors~resize-observer-polyfill-5a8bd4.smartcharts.js","f89e98f9a6078a52cc8b215acab4b6ca"],["/js/smartcharts/vi-po-0526d0.smartcharts.js","041805254f19351a76a26b7db8dd335c"],["/js/smartcharts/zh_cn-po-7904a7.smartcharts.js","0d51260225a1d0ee9cc389229c5bcc4e"],["/js/smartcharts/zh_tw-po-b0653c.smartcharts.js","9ed96a2a8d8fed3a9159b59bac508616"],["/js/statement.33ab26346b31eb7b1ba0.js","3e2ae9b049f10ee7ec2ced5a2143934f"],["/js/vendors~smart_chart.33ab26346b31eb7b1ba0.js","17dbe3777ebfbf041a3bf7018df0ea29"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/pushwoosh-service-worker.js","6f528623892aa0aeedd63060aa9d4753"],["/pushwoosh-web-notifications.js","d0ba378b02e607b48d82517f7d258352"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







