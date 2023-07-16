function toggleVersion() {
  var container = document.getElementById('container');
  var button = document.getElementById('versionButton');

  container.classList.toggle('mobile-version');
  container.classList.toggle('desktop-version');

  if (container.classList.contains('mobile-version')) {
    button.textContent = 'Switch to Desktop Version';
  } else {
    button.textContent = 'Switch to Mobile Version';
  }
}

