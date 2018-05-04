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
        "value": 90,   //粒子数量
        "density": {
          "enable": true,
          "value_area": 1000   // 区域散布密度大小
        }
      },
      "color": {
        "value": "#fff"    //原子的颜色
      },
      "shape": {
        "type": "circle",   //原子的形状(triangle,circle,edge,star)
        "stroke": {
          "width": 1,     //原理的宽度
          "color": "#eee"    //原子颜色
        },
        "polygon": {
          "nb_sides": 7    //原子的多边形边数
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6, // 不透明度
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,   //原子大小
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,    //原子渐变速度
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,   //连接线
        "distance": 120,    //连接线距离
        "color": "#ccc",   //连接线颜色
        "opacity": 0.6,   //连接线不透明度
        "width": 1
      },
      "move": {
        "enable": true,     //原子移动
        "speed": 4,   //原子移动速度
        "direction": "none",    //原子移动方向
        "random": false,    //移动随机方向
        "straight": false,
        "out_mode": "out",    //是否移动出画布
        "attract": {
          "enable": false,    //原子之间吸引
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",    //原子之间互动检测
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"   //悬停模式(bubble,repulse,grab)
        },
        "onclick": {
          "enable": true,   //点击效果
          "mode": "push"    //点击效果模式(bubble,push,repulse,remove)
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200, //原子互动抓取距离
          "line_linked": {
            "opacity": 1    //原子互动抓取距离连线不透明度
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
          "distance": 150   //击退效果距离
        },
        "push": {
          "particles_nb": 8   //粒子推出的数量
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
