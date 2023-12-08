'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "685a90c6f834847a9135f6120a92f70a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c20aa462f013375eab61d2096da97a67",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1d8319598e3d001a07cb3ce1f3125782",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19b27c2ca7f25c57a9a5081dcad2fb60",
".git/logs/refs/heads/main": "852c3a25cc5f5159a825e482072228ae",
".git/logs/refs/remotes/origin/main": "edd0825541da28ca985e86e6cd748809",
".git/objects/03/d4c8672b35a2898a121c93cd77b23549534714": "71b15e06e39f7438dab61e174ecc0ba9",
".git/objects/05/887b77a08090e0c0297ce055cc6b715fc410ad": "34c704823cd57c6b9202ab57d98e44b8",
".git/objects/07/7163d40e0c2a0623a4bfd6cd01ff7f9f6b579c": "4d0851c2869f9873ec32151bdc9020ab",
".git/objects/07/a5117e45506e7ab0872091d62229a6e1510e38": "a8bbf61e3caf49b9eccbf1000ab8c8b8",
".git/objects/0b/493eb0923899b09675b6fe02d719dc35d44a67": "8fad0089147dc6a138732d36a6c4cfa7",
".git/objects/0c/f6987e4a5cde7938b106657aff49e2e89d0dda": "4ee28d5efd1d702a5e735c8d252d8197",
".git/objects/0e/ea36668c529d67fc2b5f1457139e254a3e6ac4": "9f298499aaa7cee67722dbd8cdc1f616",
".git/objects/0f/35a85d8caf0b6b023ffdbaaec8caa6d6278d77": "5c6718714ecb023b9109119be52b3fcd",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/10/21a6f1dfcdb9fbd55b8197999a906213ada5d9": "032bbd4c2469dd61748729aa9f7fa6f1",
".git/objects/10/31f8b779c861894482c5faa0bb63ea7581dc13": "7874dddc67dd0661a25a7f6ed2171379",
".git/objects/12/74de223d7b91d1c4ae1eaf2e18b469593b9865": "395c4d9c7dc60fd639cc26f20242ae15",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/3255bbd9a6e10407be46fd9f2fe0f881157699": "d04527ddcdaae63e829764f582916e0b",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/20/982adccfea1fdaceb81cf1c2fb2605d50786b9": "efa2b875dc493dcc1aa8c6779ceefc0a",
".git/objects/20/ba0f6d9b82685a479110e38fc6aa358a4f162a": "487bdf85dd523abb7cff5df05bc311e7",
".git/objects/21/7b9f8f239f1ee2decdab5b18431637daf849a2": "f3fe05f99a4b4b024f440640664527d6",
".git/objects/24/7c67008fbaeb5a5390d90351bd22f71fa2670b": "e83021364cb7a8f9b129987d63b825f1",
".git/objects/26/4300e51439e41f658f57c5a3169126a24a2e61": "85c813f53a2d8166fc9ddc6e642ec911",
".git/objects/29/c87435061c9f9516de0c696c74a1244518fb9e": "b20e3a836beb0909630810632421183e",
".git/objects/2a/018e08bfadb8cbb9ab7e3fb175499a76655ddd": "e80f51883005f4f942287cac30e71743",
".git/objects/2a/520a34607e5a59daf1a776feb2d5a3c6d54eba": "040ad541b0d09e6479cfa8a829d56d72",
".git/objects/2e/7130265b457a68ee949885b742258f07fbfec2": "269694e9e4098ab9e1ed131e4e0c8bd0",
".git/objects/2f/537e56ad646cf9e9b81ce99f4a637b9c62f0da": "8dde66f6dc01062d3352326e8e6fb6fb",
".git/objects/33/79aedfcd1b63fbfbd02a3a20175ca28a44df18": "c00cd9f53a4a88fb4ec1a9a2123b7676",
".git/objects/33/dd300770a6f5daeb44387367774ca4979f114b": "d8399162b4ab5b3bc0b7045ba1e33ec4",
".git/objects/34/e2df5c36eab009eed48e9293f5bddf4a19ccdc": "e8ab93f902f5d46703629e5f0ef4674b",
".git/objects/35/04a86e910612ce94ebea98c4365e007833d2c2": "2a9da657a975a0207e60ce4af9ce6172",
".git/objects/35/d021d58eec4669f0d4a5c809dbbf0373bffe6d": "df9e04b2292649c30301772dc2839d0d",
".git/objects/3e/c48b9e7ce0d54ac975ab1dc7e19b3fd764bf73": "7f870a38c484c5aacc35fdf48df26696",
".git/objects/41/8cfbc6eef06d731edd59e538ad2be80bbc11a5": "36fb1a91d44b5c2ae42e0495f3eb1c11",
".git/objects/48/d659b25d6e5dec560034378247135f89c0c96c": "8d3438e45a3a7c98ddc7b75904e390c7",
".git/objects/4d/3d84440a5db113b945c7be5edb8e21fc4410f6": "1a12605634c770892c89d681b1c3d7d9",
".git/objects/4d/4f2f1083e27ced2b29676778e35fbf97bffb8c": "bb64c3d18bc907d50728b1bb91752957",
".git/objects/51/47063b35d0d25006f97b89075ba6395ee0c25e": "c4f58fecf2ade29e40654a4d8bdb841b",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/a6cb6be2dd8821f1db424ce91c057c212a2718": "7c36782339f200f401e817e3295e35c2",
".git/objects/54/e29f80e6861f9274d65a18ac6e0591ef9e5e6e": "b7499db0dce9484928ec6667794a3f7d",
".git/objects/54/f68df725044c286904b282f3d0ea6d4784c716": "3bab927240da394f370ee0fbf417e7f6",
".git/objects/59/ec525e1d9adc91b8e4240918d96d3bd6ffad33": "7926614c615af3a4cd00ce3f7cf039f7",
".git/objects/5b/8210fe46a59ef293dd51adf54c643da5cc72d2": "8cc17362806a6ae46a77fb4a38466cb3",
".git/objects/5c/6630bcd4f97fed8b44ea85cacfde8d53cacd75": "51fa4f613965b788aadc3630bbc6b85e",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/60/0c39a15ffceee80253c03e26715f30e62fe05d": "63c4e3fb2e84a1c539e129ae30b09a01",
".git/objects/60/e86539c640cad69e3084c9b11ca0097ab8294e": "8b99dd6f782cf3e1bfd44fb3694f3f85",
".git/objects/60/fd60f566a5dbd7ceb6c8eefeb201d019c6772f": "a7a480b5140af5c3d823037e366eacdc",
".git/objects/62/6aaa649a30762829da1e13c563104705d46793": "3c995e04361ce8a4b1f339a3c06e559f",
".git/objects/66/ddf11a377118fe3b38ae70f39eaafa26028a16": "abc8e8c1eea3513548bf474960250ca1",
".git/objects/67/06f0faa29f8c57255af9e91e24be76a6b92049": "046a0a267d662a40b67d1aa2d818b50b",
".git/objects/68/d71d80e0486a537d3772bf7d637d175885be55": "52e69702432eab9bd3b88b89bdde3b11",
".git/objects/69/4b7b5ac278d92b150fd4711ff879fda37f965f": "4b6b2952a968f27e07f98510a575e7c9",
".git/objects/69/878dd362795924efcbbfdd3c7482e3d00ce221": "819a30e922591d3766f06bbbdaf22fba",
".git/objects/6a/60366bfabed08b36f00e32e4294dff2e381f1f": "0e1b920d1d93aa84e973ea2e987c4d28",
".git/objects/6c/7435cfe4edfa91b7b1bd8a1806f833758793aa": "cab83fce803218a86972779a4269ccf1",
".git/objects/71/54646445fbcfede5a198775f19bc97c0446a21": "b3f963aada1c3cc328de574acd3bfb6c",
".git/objects/7b/364027c92f36e5cb0cf026d54a56451e6b05d3": "6fec2673485eceec7cf590ca80f8aa14",
".git/objects/7c/c68bdcbe631068cfb4713501012c1ae83dc6f4": "b4e143186472c38592eb635ae2683055",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/59903847c9528f113ac0dab7c6a516da3cb2e7": "06009836eaa5e07a34f869aabe161593",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e8c38a7f8c9b3a0608c3c499292eec97663d55": "f699f3271136317a281f97bd1a5316ea",
".git/objects/8a/8d54fc3c3cf0e43bc2a3c113ab734cea807e94": "d073ce6d0c666cc80448785843139abb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/50a92f2d5258549734b38528ec1082308cc110": "287612ae47526a15e5f75a877d5654aa",
".git/objects/8d/0d5d1573328617482050473d55ec155d316009": "31c7342a66f3810fce901dcf22102750",
".git/objects/8d/9d6d4b7bbaa92a281912ac9b40161968522a41": "009a3f57a4405e0696381b14210344c3",
".git/objects/90/0388f8831a2aacc714aa1d0cf28a76d814826e": "d6729423a94b45326f8896fd42567219",
".git/objects/92/e1497caf81db9bee376b9f7da63a642bcd4db7": "18645e4f4d0038345da2aa69a83e58e9",
".git/objects/98/a31f16affb8ef7093e21cc660484c511e2454a": "d668276c78671a9a66a874919ee79d00",
".git/objects/99/87a855552e3384eedbd809e28e92e8f1b5be38": "a4d5713210169de95201d790b61e2941",
".git/objects/9a/37ebf6e1ec9a29f066e5fa0adf76ba964d6915": "f4b7c9c812399f0a9ee9e95217a59a88",
".git/objects/9a/9b4adc481c3a657fd72d43415500ecfeead2c6": "b17cc7f6610c6ed6ac3318750f574203",
".git/objects/9d/4d4407a2ac52514021f11cc00fdd9938333c95": "d531cec641fa2fe9f91734c16e477545",
".git/objects/9f/bf89e0eba10fa42d333934e8d05431b9ff8082": "dd0c14370e59f3e50a93fa41e1d8eaa8",
".git/objects/9f/e98c97d22572241c6b525494d56b77c6b493cc": "ffff095ca2fea42f0dce11f1f8e51af9",
".git/objects/a2/003f1aad35089ba0503aeb17adce5bfc47cb5c": "e3f7c185225fb3ae02bdd0e42548944a",
".git/objects/a6/10d6693e27c47a3815b853a5dab639d50ef143": "48b43915d00849fec0be595a9da18f4e",
".git/objects/b1/902450fb8147071d400a48c0e318a8f0ab4201": "e4f5f554a9e716287b856fd93d168c4b",
".git/objects/b6/28a7586c2434f6df7bc69f71d0736847e0e357": "cce65da3062aeec4221d1e0fd9d49e99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/dc61c1b84f37f50f15b23925c3f5c61b90208d": "8aa740a9dd43e89e2539972094093fcd",
".git/objects/be/df719d42dea9b52079f0582ccbb489ca5df324": "29e096a269e18bf2a4915a54f428ae20",
".git/objects/bf/ebbebe6989af2a7647c0b116d4119feb89e1d4": "5767f4cdc61f6d9dc26c0fa0ed6ab5c7",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c6/17b3a4f615bece75c632ff172c3b1f2dac3b19": "d938bcefae7d05120114aaaaac717c45",
".git/objects/c6/69e2e9de7e8cbf9da2071f15b5714c628adfec": "fda1f3448b6212cdbb230fd7bd3e7368",
".git/objects/c6/de4a802074d9dc5617321e96451853b409756a": "43150f49fe1e0b247342e92904683f01",
".git/objects/c6/e97b842fdd32b1e4586b7be44df834473fd061": "b3de961e7ac9df164c4ef954c5bb9dc6",
".git/objects/c7/1f636debaac60fc505695d49cb9a41a2cbbd27": "a237cd2655fea2ca6e3db20668374d07",
".git/objects/ca/0d17784aa9c910ca3026f1de1e1cc5a3c955ab": "40560a59792783aa90e5e38a3fbde3a0",
".git/objects/ca/dd05f4e2083e4ecdb0706786af89b95ce9f858": "cff48e4144e243ba13a145563fcd53c9",
".git/objects/cc/53a87f03867fcf9e87622335c49a2f792cbd9f": "74024ebcbe58c20c50925c0f90410b51",
".git/objects/cc/878cfc7f6e4ed929d407dba750e35f770ccd74": "9313116249d6451623e9ebaa20fc6b40",
".git/objects/cc/fef90ce53eb265eecfc1fa2448e2b503fec5a7": "729f6c9a411248bb9ba5e4cfe276a5b9",
".git/objects/ce/013625030ba8dba906f756967f9e9ca394464a": "f5a44d99efd93e4dbd057bc6f2e3618a",
".git/objects/cf/b7291105b4ed676baca4f77e2a7637b7a6c584": "635e48531fd6b9db161407cfd5434fa6",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/d4/458179971f269f4b25feb8a594280d41c01a09": "4330e5809f7a75a5367759ff2ec23485",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/69220485f2aa1de41c4d4e39c1f2cd807535f1": "1eeb2d62cf1e3216d3c356d06fd03b89",
".git/objects/da/4e7cdc4b42f03250d10082be1e668d39ce2f01": "e276f675d0350e0002c43e68ee21e0b3",
".git/objects/de/370872a818ff5d155b0b5e6e49cf38f47aa9e4": "2191f776ceb77997a213c8bf86739cee",
".git/objects/de/e2fdf16b8dc18b260c09c224baa93c04535f5a": "62c1c3ea735c4d82ae8c50e5f9f446c3",
".git/objects/e0/73178cc2bb269db4ccc1e37a74f5e7f4f2b6c6": "bd853d62869dcd7bf808c159b4342cdd",
".git/objects/e3/403ac276ae4560d657f06f940c0f79241e8ad5": "4cbb8744db904e2cbe8e7e175704f352",
".git/objects/e4/b1fd51cca4d08c10c85fa7707cb810a3892419": "43afd0d9b7194279cba533ee0253e9e3",
".git/objects/e4/ba20cc77db2f10e850554bbfc50fab206dce55": "8562f590f3aaeaf35fa019deacaa8529",
".git/objects/e5/5244a54b60766396c0e6f446703509a397a99a": "237fa287308e1724b1784991d8a5d701",
".git/objects/e8/7ae391d437acc1df099dcc4c1b1c3a43634da0": "b007f7a78c14e1f7d2ec7931fe1ccd45",
".git/objects/e9/c88e760f0abb7b6085ff65cebcb36dd2947153": "1b0c0ad47cd15672e9649d645fde9729",
".git/objects/ea/53902da58484f2decb19f2468a6b00d645cf1b": "dc178d1467d0ecc6bfadb9ac69276ea3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3c86faf28e75921a1363598ffa34d81965f108": "b0165eac7f7a12fded15d4c2a88dfe24",
".git/objects/f1/acdf209879f5cbee2c18c99731e425851ab0d4": "3935de79b5a73e2e968bd05befa38f34",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f2/b3d892b04ad209f44b7297d8980ee99f6e3278": "1d17fb8b9eb9071bd4b20c877f56b037",
".git/objects/f3/6325f6f73887982832203a14623e88cff1cf66": "8ca440eea9081c7114445d6cac600abf",
".git/objects/f4/b8ff93116d66513648e4827b1bb74a96cc2446": "99b66db657f7b4ba85f8acf87ff6e9bd",
".git/objects/f5/f6a93aae638082fce0fdbc1a7615e35277fc7f": "37bfe69402939b54e2836f51f55b7ec8",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/431322afa6e7ed63e917da54340a747b3a9f13": "5cfa43e23319ca68aa821de2f0352370",
".git/objects/fd/a68cbbe519371126ee2e1bf300b28c3f79e473": "ee11836756f868e0c72940e63ce52a51",
".git/refs/heads/main": "ba303936885ea6a5e33d92732ca47dc6",
".git/refs/remotes/origin/main": "ba303936885ea6a5e33d92732ca47dc6",
"assets/AssetManifest.json": "5319ba5e0cf34a3fc778b0c520570d8b",
"assets/FontManifest.json": "9cd778d1d1c42ea49888e1a0e4741251",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/images/back.jpg": "63480c529588ce21aa35a6a4dbae317e",
"assets/images/card-1.jpg": "8c3bfc0752aceb09b5acb599a78ab0c9",
"assets/images/card-10.jpg": "b2f706ee9f3307df3268471e1556d781",
"assets/images/card-11.jpg": "85b0b77ef155021d2459382d1edf8779",
"assets/images/card-12.jpg": "f4d380cc53ee4c6743a9d8d7fc085ff6",
"assets/images/card-13.jpg": "748e79c1ad5229c22b6effd7834240f7",
"assets/images/card-14.jpg": "083a7e90cf24c4a7e964f0ce7fcd52c2",
"assets/images/card-15.jpg": "d6dd2669c15788c2e78870a590ca821a",
"assets/images/card-16.jpg": "6c4c4fea000eeff5c70de8b63c6a00db",
"assets/images/card-17.jpg": "618393c7ce8606098e6593aefaccdb64",
"assets/images/card-18.jpg": "f9eec9182b63914a8ce8a159bf5f9b37",
"assets/images/card-19.jpg": "62a0e1c37ab70299c9bde236c5eeeda1",
"assets/images/card-2.jpg": "1f05e032c1faabcfb48372aa3cf9868c",
"assets/images/card-20.jpg": "77cdca4577c9453578ba98adaccdebf5",
"assets/images/card-21.jpg": "1000deef373a7a93d4f46f77751d3538",
"assets/images/card-22.jpg": "a29f26361062559bc80e0c470db9b493",
"assets/images/card-23.jpg": "28210d0f631479c8815eb684ffc81c9a",
"assets/images/card-24.jpg": "ab8a1ff51cc6a6a00b27388b1c8ec5ce",
"assets/images/card-25.jpg": "5d0aa4e9ff4eb88632d2fdcb0a90b060",
"assets/images/card-26.jpg": "42db16f2b0db5ff1314d563b93c88feb",
"assets/images/card-27.jpg": "ea98e305100284b00772d8960cbce246",
"assets/images/card-28.jpg": "e4b5cf90ad8075b1ea547c456b4d5c22",
"assets/images/card-29.jpg": "9711e794289113659f5494055e0c988e",
"assets/images/card-3.jpg": "6d6b9bc5aaf30a3a9212e2b0d961875c",
"assets/images/card-30.jpg": "824974402838a38bd3826cfcef694674",
"assets/images/card-31.jpg": "e1dafab062d93f25588ff2632547e7dc",
"assets/images/card-32.jpg": "c993c9ba5ba48501b3019d4ac1c5a016",
"assets/images/card-33.jpg": "c72501eade5a86336d95b1cd320fd663",
"assets/images/card-34.jpg": "42d15427797c38ed5a15b63f84581b9e",
"assets/images/card-35.jpg": "6744e6ea9bab35f7212d01d47ba5ffe0",
"assets/images/card-36.jpg": "6272b6620c06f49fb1f2128327d80ae2",
"assets/images/card-4.jpg": "6dd82d458985abf18a9c495f8d3f681f",
"assets/images/card-5.jpg": "32b0e23e62dd165640fa8ff05f83b157",
"assets/images/card-6.jpg": "8cdd45e773d22fb28b95f39253469646",
"assets/images/card-7.jpg": "33fb09dcccdd1923964602a4561c60b3",
"assets/images/card-8.jpg": "64a846ac02433dcf31587893767824d8",
"assets/images/card-9.jpg": "6c2cece6b0a9583c27730c9220b7ef13",
"assets/NOTICES": "f58d8fe42ecf4f0d2c35b91277fc90d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5de98c81c11588af50d379d7fce83bbf",
"/": "5de98c81c11588af50d379d7fce83bbf",
"main.dart.js": "8edc5ae3b00b2f3103af273e028caca9",
"manifest.json": "ffed28c5859bb7db56db524e5a9134c6",
"version.json": "c72dd9007e6fa6ce5029cbe514299506"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
