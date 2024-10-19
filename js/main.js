
 // function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
                document.getElementById('slider__light').checked = false;
            } else {
                setTheme('theme-light');
              document.getElementById('slider__light').checked = true;
            }
        })();




var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    mousewheel: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 100,
      shadowScale: 1.14,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  document.getElementById("menu-icon").addEventListener("click", function() {
    this.classList.toggle("change");
    document.getElementById("menu-top").classList.toggle("show");
});