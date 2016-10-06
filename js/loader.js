"use strict";

(function($) {
  var images = [];
  var numImg = 0;
  var imgList = [];
  var pathPrefix = "images/thumbs/";
  // @function preload will create an Image object for each source passed to it, preloading it off-screen while the page finishes loading and the user browses the initial content, helping to create a seamless user experience.
  function preload(imgArray) {
    for (var i = 0; i < imgArray.length; i++) {
      images[i] = new Image();
      images[i].src = imgArray[i];
    }
  };
  // @function getImages takes in the collection of projects, and extracts the relevant image sources from each one.
  function getImages(coll) {
  numImg = coll.length;
    for (var i = 0; i < numImg; i++) {
      imgList.push(coll[i].srcset.split(" ")[2]);
      imgList.push(pathPrefix + coll[i].thumb);
    }
    return imgList;
  };
  preload(getImages(collection));
  console.log("loader.js loaded");

})(jQuery);
