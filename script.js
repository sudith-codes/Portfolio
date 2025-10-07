particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#8c6cb4" // Change this to your desired color
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cccccc",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 300,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// ==== Initialize Typed.js ====
var typed = new Typed("#typed-text",{
  strings: [
    "Frontend Developer.",
    "Web Development.",
    "Problem Solving.",
    "Drawing."
  ],
  typeSpeed: 70,   // Speed of typing
  backSpeed: 50,   // Speed of deleting
  loop: true       // Keep looping the typing effect
});

//  var typed = new Typed("#typed-text1", {
//       strings: [
//         "Frontend Developer.",
//         "Web Development.",
//         "Problem Solving.",
//         // "Drawing."
//       ],
//       typeSpeed: 80,
//       backSpeed: 40,
//       backDelay: 1200,
//       startDelay: 300,
//       loop: true,
//       smartBackspace: true,
//       showCursor: false // Hide default cursor since we have custom one
//     });

  const moreBtn = document.getElementById('moreBtn');
  const lessBtn = document.getElementById('lessbtn');
  const hiddenProjects = document.querySelectorAll('.project-card.hidden');

  // Initially hide the "Less" button
  lessBtn.style.display = 'none';

  moreBtn.addEventListener('click', function () {
    hiddenProjects.forEach(card => {
      card.classList.remove('hidden');
    });
    moreBtn.style.display = 'none';     // Hide "More"
    lessBtn.style.display = 'inline-block'; // Show "Less"
  });

  lessBtn.addEventListener('click', function () {
    hiddenProjects.forEach(card => {
      card.classList.add('hidden');
    });
    lessBtn.style.display = 'none';     // Hide "Less"
    moreBtn.style.display = 'inline-block'; // Show "More"
  });
  
