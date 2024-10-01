function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || 'en';

  if (currentLanguage === 'en') {
    // Change to Russian
    document.documentElement.lang = 'ru';
    document.body.classList.add('ru-active');
    document.getElementById('about-heading').innerText = 'Обо мне';
    document.getElementById('contact-email').innerText = 'alina.gladkova.05@mail.ru';
    document.querySelectorAll('.frame-description-en').forEach(function(el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('.frame-description-ru').forEach(function(el) {
      el.style.display = 'block';
    });
    document.getElementById('language-toggle').innerText = 'Изменить язык';
  } else {
    // Change to English
    document.documentElement.lang = 'en';
    document.body.classList.remove('ru-active');
    document.getElementById('about-heading').innerText = 'About me';
    document.getElementById('contact-email').innerText = 'alina.gladkova.05@mail.ru';
    document.querySelectorAll('.frame-description-en').forEach(function(el) {
      el.style.display = 'block';
    });
    document.querySelectorAll('.frame-description-ru').forEach(function(el) {
      el.style.display = 'none';
    });
    document.getElementById('language-toggle').innerText = 'Change Language';
  }

  // Пересчитываем высоту рамок после изменения языка
  setEqualHeight();
}

function setEqualHeight() {
  const frames = document.querySelectorAll('.special-frame');
  let maxHeight = 0;

  // Находим максимальную высоту рамки
  frames.forEach(frame => {
    const height = frame.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Устанавливаем всем рамкам одинаковую высоту
  frames.forEach(frame => {
    frame.style.height = maxHeight + 'px';
  });
}

// Вызываем функцию при загрузке страницы
window.onload = setEqualHeight;
