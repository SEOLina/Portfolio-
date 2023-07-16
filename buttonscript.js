function toggleVersion() {
  const body = document.querySelector('body');
  body.classList.toggle('mobile-version');
  body.classList.toggle('desktop-version');

  const versionButton = document.getElementById('versionButton');
  const currentVersion = body.classList.contains('mobile-version') ? 'Mobile' : 'Desktop';
  versionButton.textContent = `Switch to ${currentVersion} Version`;
}
