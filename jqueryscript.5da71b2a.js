parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"zP5b":[function(require,module,exports) {
$(document).ready(function(){"use strict";$("#logo").css("opacity",0).animate({opacity:1},800,function(){$("#buttoncommunity").css("opacity",0).animate({opacity:1},700,function(){$("#buttonrace").css("opacity",0).animate({opacity:1},600),$("#buttonitem").css("opacity",0).animate({opacity:1},600),$("#buttonhowtoplay").css("opacity",0).animate({opacity:1},600),$("#middlesection").css("opacity",0).animate({opacity:1},600,function(){$("#content-under").css("opacity",0).animate({opacity:1},600)})})}),$("#buttoncommunity").click(function(){$("#buttonrace").css("opacity",1).animate({opacity:0},300),$("#buttonitem").css("opacity",1).animate({opacity:0},300),$("#buttonhowtoplay").css("opacity",1).animate({opacity:0},300),$("#logo").css("opacity",1).animate({opacity:0},300),$("#middlesection").css("opacity",1).animate({opacity:0},300),$("#content-under").css("opacity",1).animate({opacity:0},300),$("#buttoncommunity").css("opacity",1).animate({opacity:0},700,function(){$("#mainbox").css("display","none"),$("#page-items").css("display","none"),$("#page-races").css("display","none"),$("#page-community").fadeIn(800),$("#backbutton").fadeIn(800)})}),$("#buttonrace").click(function(){$("#buttonitem").css("opacity",1).animate({opacity:0},300),$("#buttoncommunity").css("opacity",1).animate({opacity:0},300),$("#buttonhowtoplay").css("opacity",1).animate({opacity:0},300),$("#logo").css("opacity",1).animate({opacity:0},300),$("#middlesection").css("opacity",1).animate({opacity:0},300),$("#content-under").css("opacity",1).animate({opacity:0},300),$("#buttonrace").css("opacity",1).animate({opacity:0},700,function(){$("#mainbox").css("display","none"),$("#page-items").css("display","none"),$("#page-community").css("display","none"),$("#page-races").fadeIn(800),$("#backbutton").fadeIn(800)})}),$("#buttonitem").click(function(){$("#buttonrace").css("opacity",1).animate({opacity:0},300),$("#buttoncommunity").css("opacity",1).animate({opacity:0},300),$("#buttonhowtoplay").css("opacity",1).animate({opacity:0},300),$("#logo").css("opacity",1).animate({opacity:0},300),$("#middlesection").css("opacity",1).animate({opacity:0},300),$("#content-under").css("opacity",1).animate({opacity:0},300),$("#buttonitem").css("opacity",1).animate({opacity:0},700,function(){$("#mainbox").css("display","none"),$("#page-races").css("display","none"),$("#page-community").css("display","none"),$("#page-items").fadeIn(800),$("#backbutton").fadeIn(800)})}),$("#backbutton").click(function(){$("#page-items").css("display","none"),$("#page-races").css("display","none"),$("#page-community").css("display","none"),$("#backbutton").fadeOut(800),$("#mainbox").css("display","block"),$("#logo").css("opacity",0).animate({opacity:1},800),$("#buttoncommunity").css("opacity",0).animate({opacity:1},800),$("#buttonrace").css("opacity",0).animate({opacity:1},800),$("#buttonitem").css("opacity",0).animate({opacity:1},800),$("#buttonhowtoplay").css("opacity",0).animate({opacity:1},800),$("#middlesection").css("opacity",0).animate({opacity:1},800),$("#content-under").css("opacity",0).animate({opacity:1},800)})});
},{}]},{},["zP5b"], null)
//# sourceMappingURL=/jqueryscript.5da71b2a.map