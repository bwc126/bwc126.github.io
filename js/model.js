// prog, engi, and sci are the models for each of the subject areas, containing the image links for each project, their names, web-links, and descriptions. This is used to populate the project areas when a subject button is activated.
var prog = {
  0: {
    project: "Nutrition Tracker",
    link: "https://github.com/bwc126/nutrition-tracker",
    src: "images/S/nutrition-tracker-S.png",
    srcset: "images/M/nutrition-tracker-M.png 800w, images/L/nutrition-tracker-L.png 1200w",
    desc: "A calorie tracker with built-in search (via Nutritionix), implemented in Backbone.js. Features include use of Google Charts to visualize trends in calorie consumption, and a calendar date picker. This project improved my familiarity with the MVC paradigm, using API's, and pre-made code.",
    domain: "GITHUB",
    thumb: "nutrition-tracker-thumb.png"
  },
  1: {
    project: "Interactive Map",
    link: "https://github.com/bwc126/neighborhood-map",
    src: "images/S/map-S.png",
    srcset: "images/M/map-M.png 800w, images/L/map-L.png 1200w",
    desc: "Single page implementing Google Maps and Wikipedia API, with interactive points of interest. First use of a MVVM framework: Knockout.",
    domain: "GITHUB",
    thumb: "map-thumb.png"
  },
  2: {
    project: "Arcade Game Clone",
    link: "https://github.com/bwc126/frontend-nanodegree-arcade-game",
    src: "images/S/arcade-game-S.png",
    srcset: "images/M/arcade-game-M.png 800w, images/M/arcade-game-M.png 1200w",
    desc: "A frogger clone made using HTML5 Canvas, engine provided by Udacity, but game classes and functions developed by me. An excellent learning opportunity for the programming concepts of separation of concerns, Object-Oriented Programming, and continuous looping constructs.",
    domain: "GITHUB",
    thumb: "arcade-game-thumb.png"
  }
};
var engi = {
  0: {
    project: "Hydra-Delta",
    link: "https://github.com/bwc126/hydra-delta",
    src: "images/S/Hydra2-S.png",
    srcset: "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    desc: "The Hydra-Delta is my personal 3D printer design. It's based on my experience with buiding printers designed by others, specifically the Eventorbot and RichRap, and inspired by other Delta-configuration printers.",
    domain: "github",
    thumb: "hydra-delta.png"
  },
  1: {
    project: "Microfluidic Reactionware",
    link: "www",
    src: "images/S/reactionware-S.png",
    project: "Microfluidic Reactionware",
    srcset: "images/M/reactionware-M.png 800w, images/L/reactionware-L.png 1200w",
    desc: "Model and prototype an Open Source microfluidic chip for general organic chemistry use, demonstrating simplicity and modularity as part of a larger additive manufacturing project.",
    domain: "GITHUB",
    thumb: "reactionware-thumb.png"
  },
  2: {
    project: "Multimaterial Electrojetting",
    link: "www",
    src: "",
    srcset: "",
    desc: "Model and prototype micronozzles capable of precise, high-throughput printing with a wide range of working material viscosities, disperity, and compositions.",
    domain: "GITHUB",
    thumb: "something.png"
  }
};
var sci = {
  0: {
    project: "Micro Photography",
    link: "www",
    src: "",
    srcset: "",
    desc: "Assess microbiological diversity in local waterways, illustrating ecological complexity of suburban ecosystems.",
    domain: "YOUTUBE",
    thumb: "something.png"
  },
  1: {
    project: "Characterizing Microparticles",
    link: "www",
    src: "",
    srcset: "",
    desc: "Characterize microparticles produced by a low-cost microfluidic technique for multilayer encapsulation. An Open Source laser-based Brownian motion detector was used to measure disperisty and demonstrate synthesis technique precision and repeatability.",
    domain: "DOMO",
    thumb: "something.png"
  },
  2: {
    project: "Chemical Spectrography",
    link: "www",
    src: "",
    srcset: "",
    desc: "Use a low-cost, open-source spectrographic system to characterize products and intermediates from reactions carried out in microfluidic reactionware.",
    domain: "DOMO",
    thumb: "something.png"
  }
};
