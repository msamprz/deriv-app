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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/AccountSignupModal.css","5215c139e93cec8b926fd2916aca6be1"],["/css/app.css","592017b3f02510adae40ea72db76e575"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","6faa6cd40ee77614c8c6df1e4e068fb4"],["/js/0.a49e70d274ca42426ea7.js","cddc22e32883c03e6ebe6c51f446b67f"],["/js/1.a49e70d274ca42426ea7.js","726b25870355687032ce25a0a1f01bf9"],["/js/10.a49e70d274ca42426ea7.js","2216ae3795360db7d472bd4d031304d3"],["/js/11.a49e70d274ca42426ea7.js","8a1c46aba53bd94a30263604584c15f9"],["/js/12.a49e70d274ca42426ea7.js","e8437e89672e287ba54a92c004e88783"],["/js/13.a49e70d274ca42426ea7.js","801143a4c7878ce732308b64eb82d889"],["/js/14.a49e70d274ca42426ea7.js","6532ff47d126d7a97a82be47c74d7a5a"],["/js/15.a49e70d274ca42426ea7.js","7b8ebf950eb8e3e4338f62a4c76d5530"],["/js/16.a49e70d274ca42426ea7.js","5e5e3f91cc697418612d3c41d06bb660"],["/js/17.a49e70d274ca42426ea7.js","fed530b6b6e04443dcaa535f7c8cb906"],["/js/18.a49e70d274ca42426ea7.js","007dec7709e06e961d5348405d893478"],["/js/19.a49e70d274ca42426ea7.js","e379638e626161f4f3c888945ede2485"],["/js/2.a49e70d274ca42426ea7.js","2eef9495e640780c8a64851db0dcd596"],["/js/20.a49e70d274ca42426ea7.js","9408b678414f640f808492b9a067b5ff"],["/js/21.a49e70d274ca42426ea7.js","47e2f2d1c050fcb03bfba7f8ada2aaf5"],["/js/22.a49e70d274ca42426ea7.js","488f537a7b37502e4fd4d0fefa597c67"],["/js/23.a49e70d274ca42426ea7.js","4e5d615df47193ad67ac5b8df2e7ddf4"],["/js/24.a49e70d274ca42426ea7.js","324fab74ba922b621fe6e9d77d0f0e1d"],["/js/25.a49e70d274ca42426ea7.js","896ffdbf39081701b6abd8911bf1d350"],["/js/26.a49e70d274ca42426ea7.js","b524e8804a813bf8ff3dd23e2e4abd3e"],["/js/27.a49e70d274ca42426ea7.js","855ce1cac441d30ab18eebdb4d570334"],["/js/28.a49e70d274ca42426ea7.js","69f9a18e74dc0d6453804469d0e5c0f6"],["/js/29.a49e70d274ca42426ea7.js","b58bf4ff647d39ef0f176b2e50f45050"],["/js/3.a49e70d274ca42426ea7.js","945c74d1748f2748ffc5cf3c48db2f49"],["/js/30.a49e70d274ca42426ea7.js","3507d21a3a2eb62f4dfde5aa0179fe50"],["/js/31.a49e70d274ca42426ea7.js","e18e3ac4a474245556c4dae8f3a7c46b"],["/js/32.a49e70d274ca42426ea7.js","6dfe3c4ce556a44b461158a166b2dd43"],["/js/33.a49e70d274ca42426ea7.js","4e3b6e86f193b5326f2a6657990cff16"],["/js/34.a49e70d274ca42426ea7.js","2ec5dcad619a44f03791300d0161cb0f"],["/js/35.a49e70d274ca42426ea7.js","1e16ecf9ceffb4115e62b4dadd27c79d"],["/js/36.a49e70d274ca42426ea7.js","a7321d2603a2eb66ee54285216c52381"],["/js/37.a49e70d274ca42426ea7.js","0ddb0bfc1230686b05dbc871ab0ca64e"],["/js/38.a49e70d274ca42426ea7.js","7cfbb32fed5f9afce8a5307ef7b64dfa"],["/js/39.a49e70d274ca42426ea7.js","bddbef7f89905e03f584c7e2ea4964c3"],["/js/4.a49e70d274ca42426ea7.js","085a840a3146f7f1bf6abd2a75c55a55"],["/js/40.a49e70d274ca42426ea7.js","7b9ede3b33fa85220bb40bc1f3ce1acd"],["/js/404.a49e70d274ca42426ea7.js","ca5281933b55050f1db3597901152b0c"],["/js/41.a49e70d274ca42426ea7.js","8520e811411a97a1c2627f9cda702078"],["/js/42.a49e70d274ca42426ea7.js","2a8da44bea49d310c467c2b28efc9ae3"],["/js/43.a49e70d274ca42426ea7.js","ece6e4c315cfbb7ef9f33ae67682b1eb"],["/js/44.a49e70d274ca42426ea7.js","a7efed36ec210edc9f4c7f3bfaaf7514"],["/js/45.a49e70d274ca42426ea7.js","403e5c2412ae5b3eda1b4b8ce24275ea"],["/js/46.a49e70d274ca42426ea7.js","3e2e75c8f14ec8c1234c2f4d77b65eaf"],["/js/47.a49e70d274ca42426ea7.js","b822fbd50b83c9186b1de91e47a94ea0"],["/js/48.a49e70d274ca42426ea7.js","b65623d045873518bcce00a5df428e6d"],["/js/49.a49e70d274ca42426ea7.js","612e14ea7c7c82af1ed31addf574628c"],["/js/5.a49e70d274ca42426ea7.js","59c19fd912d4627fc294a287a608709d"],["/js/50.a49e70d274ca42426ea7.js","3cc440b96a7ca4da8552945e424e430e"],["/js/51.a49e70d274ca42426ea7.js","4fbb9f359b4089d0eec96580488d66fa"],["/js/52.a49e70d274ca42426ea7.js","e46771b8998783feb6c7f6d8999375f5"],["/js/53.a49e70d274ca42426ea7.js","6308385c98859271b6342e7de10d8ea1"],["/js/54.a49e70d274ca42426ea7.js","2677f9692c6d5b1a374100e5847215bc"],["/js/55.a49e70d274ca42426ea7.js","17b7a238e1e4caecb16edff777d27f58"],["/js/56.a49e70d274ca42426ea7.js","acaaa1f88a1bf43b14c8c34d07590d83"],["/js/57.a49e70d274ca42426ea7.js","ef82f57f8ff0d37727d519e02c008f3a"],["/js/58.a49e70d274ca42426ea7.js","b3f326832260075e6eb4dbf785bb38fd"],["/js/59.a49e70d274ca42426ea7.js","518c3148cdc855037c9eb18c8ba12bdc"],["/js/6.a49e70d274ca42426ea7.js","5fb821b8ec46c2ac6e75d5beefcd7fe7"],["/js/60.a49e70d274ca42426ea7.js","af6931cc8dd75d0289b65cf6c6c0dcc0"],["/js/61.a49e70d274ca42426ea7.js","d4ec837d9e413c200cdb20ca7646a053"],["/js/62.a49e70d274ca42426ea7.js","1c594c708ce084a8d42c6df7f7c511ae"],["/js/63.a49e70d274ca42426ea7.js","33e827f5eda9208850eb69edb049aa27"],["/js/64.a49e70d274ca42426ea7.js","5513a1c7e23ab056fa6b81f6a0c74a3c"],["/js/65.a49e70d274ca42426ea7.js","2b3adae61112b77c235422b0f40b3400"],["/js/66.a49e70d274ca42426ea7.js","ae7328b3dfe25fac2394d8961b724ea0"],["/js/67.a49e70d274ca42426ea7.js","b126a5acc54c218d22336048294f8e9a"],["/js/68.a49e70d274ca42426ea7.js","a800a47c6c8f9ceddc4e62ca24959ed0"],["/js/69.a49e70d274ca42426ea7.js","9b948dc02c66b2e0a1d4ef028cab828d"],["/js/7.a49e70d274ca42426ea7.js","a7a4314bcb9d723545d69c88c92520f0"],["/js/70.a49e70d274ca42426ea7.js","af4128904c6b742768334407901bb253"],["/js/8.a49e70d274ca42426ea7.js","08d6fbc4656275846e124fdc8ef9251f"],["/js/9.a49e70d274ca42426ea7.js","a6f65a78b6cf26fbbf7ee92d3de20cb6"],["/js/AccountSignupModal.a49e70d274ca42426ea7.js","af3b61450ee5ea1315d3191a4dd6b8ae"],["/js/account-info.a49e70d274ca42426ea7.js","1223539cde1d941cab393a54cfd5dbc3"],["/js/contract.a49e70d274ca42426ea7.js","4592b847f4260bb3f51bb6454b8a5247"],["/js/default~open_position~1833eefb.a49e70d274ca42426ea7.js","b58a31a77fc7b37df7f0c307df336b11"],["/js/digits.a49e70d274ca42426ea7.js","f7ba29fdf0826bd42e156eb23506b93b"],["/js/info-box.a49e70d274ca42426ea7.js","52c19ec2458757ee57ad44c0e4109aaf"],["/js/modals.a49e70d274ca42426ea7.js","839519078297ee33434572a41e1f2e44"],["/js/notification-messages.a49e70d274ca42426ea7.js","6e8ca8a97057ebc5d2d2e69a21d00a75"],["/js/open_positions.a49e70d274ca42426ea7.js","8e6f5509270ada881ab8d4f77fbec67e"],["/js/profit_table.a49e70d274ca42426ea7.js","e6b8370649a66b9c588692b13ca96d78"],["/js/push-notification.a49e70d274ca42426ea7.js","069720dcabdd5f8a661c41a03d84821a"],["/js/reports.a49e70d274ca42426ea7.js","4e2c8d96230d8a1243c5437e2bfd6deb"],["/js/screen-small.a49e70d274ca42426ea7.js","5786064022729d2e27836d59bb3d0496"],["/js/settings-chart.a49e70d274ca42426ea7.js","1774f5140c72b0cb2777a494cd18e9c3"],["/js/settings-language.a49e70d274ca42426ea7.js","4687cf19f9b1a1aac4a88211193aae6a"],["/js/settings-theme.a49e70d274ca42426ea7.js","dae30f9a19d4dedf38ef423b91851666"],["/js/smart_chart.a49e70d274ca42426ea7.js","773a2c46f35e8c053210b930875f3edc"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.a49e70d274ca42426ea7.js","cea23e4ccb5e624f1ae60b47f0fec176"],["/js/toggle-menu-drawer.a49e70d274ca42426ea7.js","8dd9d9035713fb7c2e3045996fd05225"],["/js/two-month-picker.a49e70d274ca42426ea7.js","63486b7b1fbd5456013ef102bd77024a"],["/js/vendors~AccountSignupModal.a49e70d274ca42426ea7.js","dda46395702e26d99434424179e27485"],["/js/vendors~open_position~7c650be5.a49e70d274ca42426ea7.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.a49e70d274ca42426ea7.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/work-in-progress.a49e70d274ca42426ea7.js","d978b300ece4d1bd6678e63a464f4051"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







