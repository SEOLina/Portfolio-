function toggleVersion() {
  const body = document.querySelector('body');
  const versionButton = document.getElementById('versionButton');

  body.classList.toggle('desktop-version');
  versionButton.textContent = body.classList.contains('desktop-version')
    ? 'Switch to Mobile Version'
    : 'Switch to Desktop Version';
}

window.addEventListener('DOMContentLoaded', function () {
  const versionButton = document.getElementById('versionButton');
  versionButton.addEventListener('click', toggleVersion);
});

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener('resize', debounce(toggleVersion, 250));
