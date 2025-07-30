document.addEventListener('DOMContentLoaded', () => {
  // Header & Footer laden
  fetch('/components/header.html')
    .then(res => res.text())
    .then(html => document.getElementById('header-placeholder').innerHTML = html);

  fetch('/components/footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);

  // IP-Kopie-Button
  const copyBtn = document.getElementById('copy-ip-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('play.jeromc.de').then(() => {
        copyBtn.innerHTML = '<i class="bi bi-check-lg"></i> Kopiert!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Kopieren';
        }, 2000);
      });
    });
  }

  // Dark/Light Mode automatisch setzen
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const setTheme = (isDark) => {
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  };

  // Initiales Setzen
  setTheme(prefersDark.matches);

  // Auf Änderungen reagieren
  prefersDark.addEventListener('change', (e) => {
    setTheme(e.matches);
  });
});
