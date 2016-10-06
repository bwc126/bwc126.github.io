"use strict";
var collection;
(function($) {
  var jumbotron,
      rotation,
      proj,
      sub;
  var pathPrefix = "images/thumbs/";
  var ROT_INTERVAL = 9000;
  var FADE_OUT = 900;
  var FADE_IN = 900;

  var data = prog;
  var areas = [prog,engi,sci];
  collection = [];

  // @function buildcollection() collects all the models for the projects and stores them in a single collection, along with info about which subject area they belong to.
  function buildCollection() {
    for (var subj = 0; subj<3; subj++) {
      for (var pro = 0; pro<3; pro++) {
        proj = areas[subj][pro];
        proj.subject = subj;
        collection.push(proj);
      };
    };
  };
  buildCollection();

  // The click triggers for the subject buttons will set the project images to the project images for the appropriate subject area, and then call setSpotlightTriggers to make sure they will change the spotlight upon mouseenter.
  function initButtons() {
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

  };

  // @function init(project) takes an initial project to be the focus of the page upon loading and performs various once-a-session tasks, like setting the jumbotron variable so we know which project is active in it, rendering the overlay, initiating jumbotron rotation, and activating the subject area associated with the initial project.
  function init(project) {
    initButtons();
    jumbotron = project.project;
    renderOverlay(project);
    rotateJumbotron(project,collection);
    sub = project.subject;
    console.log(sub);
    if (sub === 0) {
      $("#programming").click();
    }
    if (sub === 1) {
      $("#engineering").click();
    }
    if (sub === 2) {
      $("#science").click();
    };
  };

  // renderOverlay handles rendering of the overlay and the title for the jumbotron
  function renderOverlay(project) {
    $(".title-bar").text(project.project);

    $(".overlay p").text(project.desc);
  };

  // @function renderProjects() handles the various tasks of rendering all the projects that need to be shown on the page for the presently-active subject area. This should be called anytime a subject area is activated.
  function renderProjects() {
    renderProjectText();
    renderProjectLinks();
    renderProjectImages();
    setSpotlightTriggers();
    setMenuSpotlightTriggers();
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
    $(".menu li").each(function(index) {
      $(this).text(collection[index].project);
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
    $(".project-modal p").each(function(index) {
      $(this).text(data[index].desc);
    });
    $(".project-modal h4").each(function(index) {
      $(this).text(data[index].project);
    })
  };
  function renderProjectModalImages() {
    $(".project-modal img").each(function(index) {
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

  function setSpotlightTriggers() {
    $(".project div").each(function(index) {
      // Any time a project image is entered, the spotlight img will fadeout, set new src/srcset according to the project that was entered, and then fade back in.
      $(this).mouseenter(function() {
        // We shouldn't change the jumbotron unless we're hovering over a different image than the one that's already loaded.
        if (data[index].project !== jumbotron) {
          focusSpotlight(data[index]);
        };

      });
    });
  };
  function setMenuSpotlightTriggers() {
    $(".menu li").each(function(index) {
      $(this).click(function() {
        if (collection[index].project !== jumbotron) {
          sub = collection[index].subject;
          if (sub === 0) {
            $("#programming").click();
          }
          if (sub === 1) {
            $("#engineering").click();
          }
          else {
            $("#science").click();
          };
          focusSpotlight(collection[index]);
          }
      });
    });
  };
  // function @focusSpotlight takes a project model, stops the autorotation of the jumbotron, invokes updateSpotlight to change the jumbotron image, and then resumes the rotation after a full rotation interval has passed.
  function focusSpotlight(projectModel) {
    window.clearInterval(rotation);
    updateSpotlight(projectModel);
    window.setTimeout(rotateJumbotron(projectModel,collection),ROT_INTERVAL);
  };
  // @function updateSpotlight takes a project model and sets the spotlight jumbotron to change to its image, fading in and out with an animation. The function also updates the tracker variable for which project is currently on the jumbotron.
  function updateSpotlight(projectModel) {
    // Callbacks to jQ animation functions will execute after the ani completes, so this will cause the jumbotron image to fadeOut, and then execute the code passed into the anon calllback.
    $(".jumbotron").fadeTo(FADE_OUT,0,"swing",function() {
      $(".jumbotron").attr("style", "background-image: url('" + projectModel.srcset.split(" ")[2] + "')");
      renderOverlay(projectModel);
      // .load() will make sure the jQ object is ready on the DOM before proceeding with the anon CB passed to it, in this case, fadeTo, ensuring our image is ready before we attempt to fade it back in.
      $(".jumbotron").load(function(){
        $(".jumbotron").fadeTo(FADE_IN,1,"swing");
      });
      jumbotron = projectModel.project;
    });
  };
  // @function rotateJumbotron sets up a rotation inteval for the jumbotron image, taking an initial image and rotating it according to a constant across each of the project images found in collection.
  function rotateJumbotron(mod,collection) {
    var currentItem = collection.indexOf(mod);
    var numItems = collection.length;

    rotation = window.setInterval(function() {
      if (currentItem === numItems-1) {
        currentItem = 0;
      }
      else {
        currentItem++;
      }
      updateSpotlight(collection[currentItem]);
    }, ROT_INTERVAL);
  };

  init(collection[1]);
})(jQuery);
