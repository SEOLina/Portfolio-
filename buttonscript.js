function toggleVersion() {
  const body = document.querySelector('body');
  const versionButton = document.getElementById('versionButton');

  if (body.classList.contains('desktop-version')) {
    body.classList.remove('desktop-version');
    body.classList.add('mobile-version');
    versionButton.textContent = 'Switch to Desktop Version';
  } else {
    body.classList.remove('mobile-version');
    body.classList.add('desktop-version');
    versionButton.textContent = 'Switch to Mobile Version';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const versionButton = document.getElementById('versionButton');
  versionButton.addEventListener('click', toggleVersion);

  // Set the initial button label based on the initial version
  toggleVersion();
});

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener('resize', debounce(toggleVersion, 250));
