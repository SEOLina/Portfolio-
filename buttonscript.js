function toggleVersion() {
  const body = document.querySelector('body');
  const versionButton = document.getElementById('versionButton');

  if (body.classList.contains('desktop-version')) {
    body.classList.remove('desktop-version');
    body.classList.add('mobile-version');
  } else {
    body.classList.remove('mobile-version');
    body.classList.add('desktop-version');
  }

  // Update the button label based on the current version
  versionButton.textContent = body.classList.contains('desktop-version')
    ? 'Switch to Mobile Version'
    : 'Switch to Desktop Version';
}

// Function to initialize the button label
function setInitialButtonLabel() {
  const body = document.querySelector('body');
  const versionButton = document.getElementById('versionButton');

  // Set the initial button label based on the initial version
  versionButton.textContent = body.classList.contains('desktop-version')
    ? 'Switch to Mobile Version'
    : 'Switch to Desktop Version';
}

// Attach the click event listener to the button
window.addEventListener('DOMContentLoaded', function () {
  const versionButton = document.getElementById('versionButton');
  versionButton.addEventListener('click', toggleVersion);

  // Initialize the button label
  setInitialButtonLabel();
});

// Attach the resize event listener
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener('resize', debounce(setInitialButtonLabel, 250));
