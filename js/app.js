"use strict";
(function($) {
  var pathPrefix = "images/thumbs/";
  // data will initially be whatever the default set of projects is, which should be one of the major categories so that they can be reached again later by clicking one of the buttons.
  var data = prog;
  var jumbotron = data[2].project;
  renderOverlay(data[2]);
  // The click triggers for the subject buttons will set the project images to the project images for the appropriate subject area, and then call setSpotlightTriggers to make sure they will change the spotlight upon mouseenter.
  $("#programming").click(function() {
    console.log("Programming active");
    data = prog;
    renderProjects();
  });
  $("#engineering").click(function() {
    console.log("Engineering Active");
    data = engi;
    renderProjects();
  });
  $("#science").click(function() {
    console.log("Science Active");
    data = sci;
    renderProjects();
  });
  // rederOverlay handles rendering of the overlay and the title for the jumbotron
  function renderOverlay(project) {
    $(".title-banner").html(project.project);
    $(".overlay h3").html(project.project);
    $(".overlay p").html(project.desc);
  }
  function renderProjects() {
    renderProjectText();
    renderProjectLinks();
    renderProjectImages();
    setSpotlightTriggers();
    renderProjectLinkDomains();
    renderProjectModals();
    renderProjectModalImages();
  };
  // renderProjectText prepares the textual content of each project; this function is called when a button is pressed and a new subject area of content needs to be loaded.
  function renderProjectText() {
    $(".project h4").each(function(index) {
      $(this).text(data[index].project);
    });
  };
  function renderProjectLinks() {
    // Populate links with correct urls.
    $(".project-link").each(function(index) {
      $(this).attr("href", data[index].link);
    });
  };
  function renderProjectLinkDomains() {
    // Render correct domain for project link, which is the text that's actually displayed for the link.
    $(".project-link").each(function(index) {
      $(this).text(data[index].domain);
    });
  };
  function renderProjectModals() {
    // Render projects in the modal, including: name, image, and descriptive text.
    $(".modal-dialog p").each(function(index) {
      $(this).text(data[index].desc);
    });
    $(".modal-dialog h4").each(function(index) {
      $(this).text(data[index].project);
    })
  };
  function renderProjectModalImages() {
    $(".modal-dialog img").each(function(index) {
      $(this).attr("src", pathPrefix + data[index].thumb);
      var msg = 'This is the image for ' + data[index].project;
      $(this).attr('alt', msg);
    });
  };
  // renderProjectImages changes the project images based on whatever subject area has been made active (e.g., when the user clicks the respective button, currently this is the only time this should be called). Also updates the 'alt' attribute for each image.
  function renderProjectImages() {
    $(".project div").each(function(index) {
      $(this).attr('style', "background-image: url('" + pathPrefix + data[index].thumb + "')");
    });
    $(".project div").each(function(index) {
      var msg = 'This is the image for ' + data[index].project;
      $(this).attr('alt', msg);
    });
  };
  // For loop construction doesn't play nicely with serial event listener setting, so specific code is written for each project so that mouseenter on its image causes the spotlight image to change.
  function setSpotlightTriggers() {
    $(".project div").each(function(index) {
      // Any time a project image is entered, the spotlight img will fadeout, set new src/srcset according to the project that was entered, and then fade back in.
      $(this).mouseenter(function() {
        // We shouldn't change the jumbotron unless we're hovering over a different image than the one that's already loaded.
        if (data[index].project !== jumbotron) {
            // Callbacks to jQ animation functions will execute after the ani completes, so this will cause the jumbotron image to fadeOut, and then execute the code passed into the anon calllback.
            $(".jumbotron").fadeTo(600,0,"swing",function() {
              $(".jumbotron").attr("style", "background-image: url('" + data[index].srcset.split(" ")[2] + "')");
              renderOverlay(data[index]);
              // .load() will make sure the jQ object is ready on the DOM before proceeding with the anon CB passed to it, in this case, fadeTo, ensuring our image is ready before we attempt to fade it back in.
              $(".jumbotron").load(function(){
                $(".jumbotron").fadeTo(900,0.9,"swing");
              });
              jumbotron = data[index].project;
            });


            // These two .attr calls set a new src/srcset for the spotlight once the fadeout is complete. Once the images are loaded an ready, the fadeIn call above will execute.
            // $(".jumbotron img").attr("srcset", data[index].srcset);
          };

      });
    });
  };
  setSpotlightTriggers();
  $("#programming").click();
})(jQuery);
