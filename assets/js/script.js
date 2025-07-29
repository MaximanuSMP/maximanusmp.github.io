document.addEventListener('DOMContentLoaded', () => {

  // Header und Footer laden
  async function loadComponent(id, url) {
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        document.getElementById(id).innerHTML = await resp.text();
      } else {
        console.error(`Fehler beim Laden von ${url}: ${resp.status}`);
      }
    } catch (err) {
      console.error(`Fetch-Error: ${err}`);
    }
  }
  loadComponent('header-placeholder', 'components/header.html');
  loadComponent('footer-placeholder', 'components/footer.html');

  // IP kopieren Funktion
  const copyBtn = document.getElementById('copy-ip-btn');
  if (copyBtn) {
    const ipText = document.getElementById('server-ip').textContent.trim();

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(ipText).then(() => {
        copyBtn.innerHTML = '<i class="bi bi-check-lg"></i> Kopiert!';
        copyBtn.classList.remove('btn-outline-primary');
        copyBtn.classList.add('btn-success');
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Kopieren';
          copyBtn.classList.remove('btn-success');
          copyBtn.classList.add('btn-outline-primary');
        }, 2000);
      }).catch(() => {
        alert('Kopieren fehlgeschlagen. Bitte manuell kopieren.');
      });
    });
  }

  // Dark / Light Mode automatisch an System anpassen
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Prüfe Systempräferenz
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Initial setzen
  applyTheme(prefersDark.matches ? 'dark' : 'light');

  // Auf Änderungen lauschen
  prefersDark.addEventListener('change', e => {
    applyTheme(e.matches ? 'dark' : 'light');
  });

});
