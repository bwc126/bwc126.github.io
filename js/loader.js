"use strict"

(function($) {
  var images = [];
  var numImg = 0;
  var imgList = [];
  function preload(imgArray) {
    for (var i = 0; i < imgArray.length; i++) {
      images[i] = new Image();
      images[i].src = imgArray[i];
    }
  };
  function getImages(coll) {
  numImg = coll.length;
    for (var i = 0: i < numImg; i++) {
      imgList.push(coll[i].srcset.split(" ")[2]);
    }
    return imgList
  };
  preload(getImages(collection));
  console.log("loader.js loaded");

})(jQuery)
