"use strict"; var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor=props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } var challengesData=[{ "name": "emojigraphy", "fancy": "Emoji cipher", "question": "emojigraphy.md", "init": "String.prototype.encrypt = function() {\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.encrypt()", "tests": [{ "word": "message", "expected": "😝😅😒😒😄😍😅" }] }, { "name": "caesar-encrypt", "fancy": "Caesar Encrypt", "question": "caesar-encrypt.md", "init": "String.prototype.encrypt = function(key) {\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.encrypt(${current.key})", "tests": [{ "word": "Hello", "key": 4, "expected": "LIPPS" }, { "word": "cryptools", "key": 2, "expected": "ETARVQQNU" }, { "word": "test", "key": 5, "expected": "YJXY" }] }, { "name": "rot13", "fancy": "ROT13", "question": "rot13.md", "init": "String.prototype.encrypt = function() {\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.encrypt()", "tests": [{ "word": "Hello", "expected": "URYYB" }, { "word": "cryptools", "expected": "PELCGBBYF" }, { "word": "test", "expected": "GRFG" }] }, { "name": "caesar-decrypt", "fancy": "Caesar Decrypt", "question": "caesar-decrypt.md", "init": "String.prototype.decrypt = function(key) {\n // to get the String you need to decrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.decrypt(${current.key})", "tests": [{ "word": "LIPPS", "key": 4, "expected": "HELLO" }, { "word": "ETARVQQNU", "key": 2, "expected": "CRYPTOOLS" }, { "word": "YJXY", "key": 5, "expected": "TEST" }] }, { "name": "railfence-encrypt", "fancy": "Rail Fence Encrypt", "question": "railfence-encrypt.md", "init": "String.prototype.encrypt = function(key) { // key is the number of rails\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.decrypt(${current.key})", "tests": [{ "word": "Hello World!", "key": 3, "expected": "Horel ol!lwd" }] }, { "name": "bitshift-encrypt", "fancy": "BitShift Cipher", "question": "bitshift-encrypt.md", "init": "String.prototype.encrypt = function(key) { // key is the number of rails\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.encrypt('${current.key}')", "tests": [{ "word": "Hello World!", "key": "key", "expected": "WzM3NDQyLDUyNDg4LDU1ODc0LDU2MDcyLDU3NDEwLDE3MTYwLDQ1MTIyLDU3NjA4LDU4OTQ2LDU2MDcyLDUxNzc4XQ==" }] }, { "name": "xor", "fancy": "XOR Cipher", "question": "xorcipher.md", "init": "String.prototype.encrypt = function(key) { // key is a number or an array\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.encrypt(${current.key})", "tests": [{ "word": "Hello World!", "key": 134, "expected": "Îãêêé¦Ñéôêâ§" }, { "word": "CrypTools", "key": 873, "expected": "̛̪̙̐̽̆̆̅̚" }] }, { "name": "rsa", "fancy": "RSA", "question": "rsa.md", "init": "function rsa() {\n return n // n is the answer\n}\n", "testCommand": "return rsa()", "tests": [{ "word": "rsa()", "expected": 399788195976 }] }, { "name": "b64", "fancy": "Base64", "question": "b64.md", "init": "String.prototype.decrypt = function() {\n // to get the String you need to encrypt, use 'this'\n}\n", "testCommand": "return '${current.word}'.decrypt()", "tests": [{ "word": "SGVsbG8gV29ybGQh", "expected": "Hello World!" }, { "word": "Q3J5cFRvb2xz", "expected": "CrypTools" }, { "word": "YmFzZQ==", "expected": "base" }] }, { "name": "hashshift", "fancy": "HashShift PRNG", "question": "hashshift.md", "init": "String.prototype.sha256=function(){let r=this;const n=8,t=0;function e(r,n){const t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function o(r,n){return r>>>n|r<<32-n}function u(r,n){return r>>>n}function c(r,n,t){return r&n^~r&t}function f(r,n,t){return r&n^r&t^n&t}function i(r){return o(r,2)^o(r,13)^o(r,22)}function a(r){return o(r,6)^o(r,11)^o(r,25)}function h(r){return o(r,7)^o(r,18)^u(r,3)}return function(r){const n=t?\"0123456789ABCDEF\":\"0123456789abcdef\";let e=\"\";for(let t=0;t<4*r.length;t++)e+=n.charAt(r[t>>2]>>8*(3-t%4)+4&15)+n.charAt(r[t>>2]>>8*(3-t%4)&15);return e}(function(r,n){const t=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),C=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),g=new Array(64);let l,d,A,s,S,m,y,p,v,w;r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var b=0;b<r.length;b+=16){l=C[0],d=C[1],A=C[2],s=C[3],S=C[4],m=C[5],y=C[6],p=C[7];for(var B=0;B<64;B++)g[B]=B<16?r[B+b]:e(e(e(o(D=g[B-2],17)^o(D,19)^u(D,10),g[B-7]),h(g[B-15])),g[B-16]),v=e(e(e(e(p,a(S)),c(S,m,y)),t[B]),g[B]),w=e(i(l),f(l,d,A)),p=y,y=m,m=S,S=e(s,v),s=A,A=d,d=l,l=e(v,w);C[0]=e(l,C[0]),C[1]=e(d,C[1]),C[2]=e(A,C[2]),C[3]=e(s,C[3]),C[4]=e(S,C[4]),C[5]=e(m,C[5]),C[6]=e(y,C[6]),C[7]=e(p,C[7])}var D;return C}(function(r){const t=Array(),e=(1<<n)-1;for(let o=0;o<r.length*n;o+=n)t[o>>5]|=(r.charCodeAt(o/n)&e)<<24-o%32;return t}(r=function(r){r=r.replace(/\\r\\n/g,\"\\n\");let n=\"\";for(let t=0;t<r.length;t++){const e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):e>127&&e<2048?(n+=String.fromCharCode(e>>6|192),n+=String.fromCharCode(63&e|128)):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128),n+=String.fromCharCode(63&e|128))}return n}(r)),r.length*n))};\n// To use SHA256, do something like: \"some text\".sha256()\nfunction* rand(seed) {\n\twhile (true) {\n\t\tyield out // out is the outtputed number.\n\t}\n}\n", "testCommand": "return rand(${current.word}).next().value", "tests": [{ "word": 12, "expected": 5.0316490726670756e-05 }, { "word": 1024, "expected": 0.7845447867083958 }] }]; var challenges = {}; var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = challengesData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var i = _step.value; challenges[i.name] = i; } } catch (err) { _didIteratorError = true; _iteratorError = err; } finally { try { if (!_iteratorNormalCompletion && _iterator["return"]) { _iterator["return"](); } } finally { if (_didIteratorError) { throw _iteratorError; } } } var Router = (function () { function Router() { _classCallCheck(this, Router); var hash = undefined; if (localStorage.getItem("CrypToolsLearn")) { hash = localStorage.getItem("CrypToolsLearn").substring(1); } else { hash = window.location.hash.substring(1); } if (hash == "") { this.page = challenges["emojigraphy"]; /* level 1 */ } else { this.page = challenges[hash]; } this.load(); } _createClass(Router, [{ key: "load", value: function load() { var question = document.querySelector(".questions"); var converter = new showdown.Converter({ extensions: ['github'] }); fetch("../challenges/" + this.page.question).then(function (data) { return data.text(); }).then(function (text) { question.innerHTML = converter.makeHtml(text); }); editor.insert(this.page.init); } }]); return Router; })(); var router = new Router(); var Test = (function () { function Test(data) { _classCallCheck(this, Test); this.data = data; var runEl = document.getElementById("run"); this.addEvents(runEl); } _createClass(Test, [{ key: "addEvents", value: function addEvents(el) { var _this = this; el.addEventListener("click", function (e) { _this.test(); }); } }, { key: "test", value: function test() { console.command("run tests"); var out = ""; var before = ""; for (var i = 0; i < this.data.tests.length; i++) { var current=this.data.tests[i]; var command=eval("`" + this.data.testCommand + "`"); var result=editor.run(command); var expected=current.expected; before += current.word + " -> " + result + "<br>"; if (result == expected) { out = out === false ? false : true; } else { out = false; } } if (out === true) { console.log("Congratulations 🎉! The code you've written passed the tests."); document.querySelector(".done").style.display = "flex"; setTimeout(function () { document.querySelector(".done").classList.add("active"); }, 1000); } else { console.log(before + "Argh 😤! You've failed! Try again..."); } } }]); return Test; })(); var test = new Test(router.page);