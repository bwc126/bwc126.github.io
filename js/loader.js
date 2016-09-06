"use strict"

(function($) {
  var image;
  var sources = [prog,sci,engi];
  for (var i = 0, i < 3; i++) {
    for (var j = 0, i < 3; i++) {
      image = new Image();
      image.src = sources[i][j].srcset.split(" ")[2];
    }
  }
})(jQuery)
