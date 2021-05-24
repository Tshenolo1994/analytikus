
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
"(min-width:800px)":function(){
  gsap.to(".hero-text", {
    scrollTrigger: {
        trigger: "header",
        scrub: true,
        start: "bottom 90%",
    },
    y: -200,
    opacity: 0,
    stagger: 0.36
})
gsap.from(".fade-down", {
    scrollTrigger: {
        trigger: ".fade-down",
        scrub: true,
        start: "top 90%",
        end: "+=500",

    },
    scale: 4,
    y: -60,
    opacity: 0,
    stagger: 0.36
});


gsap.from('.section-1__text', {
    x: 400,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about',

        start: 'top top',
        end: "+=300",
        scrub: true,
        once: true,

    }
})

gsap.from(".fade-down-two", 3, {
    scrollTrigger: {
        trigger: ".fade-down-two",
        scrub: true,
        start: "top 60%",
        end: "+=200",

    },
    scale: 4,
    y: -60,
    opacity: 0,
    stagger: 0.36
});


gsap.from('.section-2__text', {
    delay: 2,
    x: 400,
    opacity: 0,
    scrollTrigger: {
        trigger: '#services',

        start: 'top 20%',
        end: "+=100",
        scrub: true,
        once: true,

    }
})

gsap.from(".heading", 3, {
    y: 100,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '.heading',
        start: 'top 50%',
        end: "+=120",
        scrub: true,
        ease: Expo.easeInOut,
        pin: '#services',


    }
})
gsap.from(".fade-down-three", {
    scrollTrigger: {
        trigger: ".fade-down-three",
        scrub: true,
        start: "top 50%",
        end: "+=80",
        pin: true,

    },
    scale: 3,
    y: -60,
    opacity: 0,
    stagger: 0.36
});



gsap.utils.toArray(".color").forEach(function(elem) {

    var color = elem.getAttribute('data-color');

    ScrollTrigger.create({
      trigger: elem,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to('body', {
        backgroundColor: color
        }),
        onLeave: () => gsap.to('body', {
        backgroundColor: '#fdfdfd'
        }),
        onLeaveBack: () => gsap.to('body', {
            backgroundColor: '#fdfdfd'
        }),
        onEnterBack: () => gsap.to('body', {
            backgroundColor: color
        }),

    });

});

}
  
})

ScrollTrigger.matchMedia({
"(max-width:799px)":function(){

  gsap.to(".hero-text", {
    scrollTrigger: {
        trigger: "header",
        scrub: true,
        start: "bottom bottom",
    },
    y: -200,
    opacity: 0,
    stagger: 0.36
})
gsap.from(".fade-down", {
    scrollTrigger: {
        trigger: ".fade-down",
        scrub: true,
        start: "top 90%",
        end: "+=800",

    },
    scale: 4,
    y: -60,
    opacity: 0,
    stagger: 0.36
});

gsap.from('.section-1__text', {
    x: 400,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about',

        start: "top 50%",
        end: "+=800",
        scrub: true,
        once: true,

    }
})

gsap.from(".fade-down-two", 3, {
    scrollTrigger: {
        trigger: ".fade-down-two",
        scrub: true,
        start: "top 90%",
        end: "+=100",

    },
    scale: 4,
    y: -60,
    opacity: 0,
    stagger: 0.36
});


gsap.from('.section-2__text', {
  delay: 2,
  x: 400,
  opacity: 0,
  scrollTrigger: {
  trigger: '#services',
  start: 'top 90%',
  end: "+=100",
  scrub: true,
  once: true,

    }
})

gsap.from(".heading", 3, {
    y: 100,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '.heading',
        start: 'top 50%',
        end: "+=120",
        scrub: true,
        ease: Expo.easeInOut,
        pin: '#services',


    }
})
gsap.from(".fade-down-three", {
    scrollTrigger: {
        trigger: ".fade-down-three",
        scrub: true,
        start: "top 50%",
        end: "+=80",
  
    },
    scale: 3,
    y: -60,
    opacity: 0,
    stagger: 0.36
});

gsap.utils.toArray(".color").forEach(function(elem) {

    var color = elem.getAttribute('data-color');

    ScrollTrigger.create({
        trigger: elem,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to('body', {
            backgroundColor: color
        }),
        onLeave: () => gsap.to('body', {
            backgroundColor: '#fdfdfd'
        }),
        onLeaveBack: () => gsap.to('body', {
            backgroundColor: '#fdfdfd'
        }),
        onEnterBack: () => gsap.to('body', {
            backgroundColor: color
        }),

    });

});



}

})
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
    restartOnRequestAfter: false,
    restartOnPushState: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({
        top: '30%',
        opacity: '0'
    }, 3000, $.bez([0.19, 1, 0.22, 1]));


    $('#preloader').delay(1500).animate({
        top: '-100%'
    }, 2000, $.bez([0.19, 1, 0.22, 1]));

    TweenMax.from(".hero-text li, .hero-text span", 3, {
        delay: 1,
        y: 50,
        opacity: 0,
        stagger: .1,
        ease: Expo.easeInOut
    })
});
TweenMax.from(".hero-text h1", 3, {
    delay: 1,
    scale: 4,
    opacity: 0,
    stagger: .1,
    ease: Expo.easeInOut
})


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#89C2D9"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.9,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": true,
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#89C2D9",
            "opacity": 0.1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


$(".background").delay(5000).slideUp(3000);

(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "May 28, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "Official Site is Live";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());

function toggle() {
    var header = document.querySelector(".header");
    header.classList.toggle("active");
    console.log('hey')
};


$(document).ready(function() {
    $(this).scrollTop(0);
});