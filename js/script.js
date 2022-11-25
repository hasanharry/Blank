$(function(){
  $('.hasan').counterUp();
  /* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

{
"particles": {
  "number": {
    "value": 2000,
    "density": {
      "enable": true,
      "value_area": 800
    }
  },
  "color": {
    "value": "#FFD700"
  },
  "shape": {
    "type": "triangle",
    "stroke": {
      "width": 0,
      "color": "#000000"
    },
    "polygon": {
      "nb_sides": 5
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
      "enable": false,
      "speed": 1,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 4,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 100,
      "size_min": 0.1,
      "sync": false
    }
  },
  "line_linked": {
    "enable": false,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 30,
    "direction": "bottom",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "attract": {
      "enable": false,
      "rotateX": 0,
      "rotateY":2000
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "repulse"
    },
    "onclick": {
      "enable": true,
      "mode": "push"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 500,
      "size": 30,
      "duration": 2,
      "opacity": 8,
      "speed": 40
    },
    "repulse": {
      "distance": 200
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true,
"config_demo": {
  "hide_card": false,
  "background_color": "#b61924",
  "background_image": "",
  "background_position": "50% 50%",
  "background_repeat": "no-repeat",
  "background_size": "cover"
}
}

);
})