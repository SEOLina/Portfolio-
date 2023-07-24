// JavaScript (buttonscript.js)

function getCurrentVersion() {
  const body = document.querySelector('body');
  return body.classList.contains('desktop-version') ? 'desktop' : 'mobile';
}

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
  versionButton.textContent = getCurrentVersion() === 'desktop'
    ? 'Switch to Mobile Version'
    : 'Switch to Desktop Version';
}

// Function to initialize the button label
function setInitialButtonLabel() {
  const versionButton = document.getElementById('versionButton');

  // Set the initial button label based on the current version
  versionButton.textContent = getCurrentVersion() === 'desktop'
    ? 'Switch to Mobile Version'
    : 'Switch to Desktop Version';
}

// Attach the click event listener to the button
document.addEventListener('DOMContentLoaded', function () {
  const versionButton = document.getElementById('versionButton');
  versionButton.addEventListener('click', toggleVersion);

  // Initialize the button label
  setInitialButtonLabel();
});
