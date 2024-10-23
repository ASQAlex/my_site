
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


// Ссылки на файлы с переводами
const translations = {
  en: '../translations/translations_en.json',
  ua: '../translations/translations_ua.json',
  ru: '../translations/translations_ru.json'
};

// Функция для загрузки и применения перевода
function switchLanguage(lang) {
  loadTranslations(translations[lang]);
}

// Загрузка JSON файла с переводом
function loadTranslations(url) {
  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Обновление текста на странице
          document.getElementById('about-link').textContent = data.about_me;
          document.getElementById('skills-link').textContent = data.skills;
          document.getElementById('works-link').textContent = data.my_work;
          document.getElementById('contacts-link').textContent = data.contacts;

          document.getElementById('contacts__link-title').textContent = data.contacts;
          document.getElementById('works__link-title').textContent = data.my_work;
          document.getElementById('skills__link-title').textContent = data.skills;
          document.getElementById('about__title').textContent = data.about_me;
          document.getElementById('about-text-top').textContent = data.about_text_top;
          document.getElementById('about-text-center').textContent = data.about_text_center;
          document.getElementById('about-text-down').textContent = data.about_text_down;

          document.getElementById('name-placeholder').setAttribute('placeholder', data.name_placeholder);
          document.getElementById('email-placeholder').setAttribute('placeholder', data.email_placeholder);
          document.getElementById('message-placeholder').setAttribute('placeholder', data.message_placeholder);
          document.getElementById('send-message-btn').textContent = data.send_message;
      })
      .catch(error => console.error('Ошибка загрузки перевода:', error));
}

// Event listener для смены языка
document.getElementById('language').addEventListener('change', function() {
  const selectedLang = this.value;
  switchLanguage(selectedLang);
});

// Загрузка языка по умолчанию
document.addEventListener('DOMContentLoaded', () => {
  const defaultLang = 'en';  // язык по умолчанию
  document.getElementById('language').value = defaultLang;
  loadTranslations(translations[defaultLang]);
});
