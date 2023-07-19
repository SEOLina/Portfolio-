function toggleVersion() {
  const body = document.querySelector('body');
  const container = document.getElementById('container');
  const versionButton = document.getElementById('versionButton');
  
  body.classList.toggle('mobile-version');
  body.classList.toggle('desktop-version');
  container.classList.toggle('mobile-version');
  container.classList.toggle('desktop-version');
  
  if (body.classList.contains('mobile-version')) {
    versionButton.textContent = 'Switch to Desktop Version';
  } else {
    versionButton.textContent = 'Switch to Mobile Version';
  }
}
