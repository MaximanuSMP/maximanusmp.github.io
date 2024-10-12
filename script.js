// Menü-Animation (Burger Menü)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
}

// Dark/Light Mode basierend auf den Systemeinstellungen
function applyTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = prefersDarkScheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Lade diese Funktion bei Initialisierung
document.addEventListener('DOMContentLoaded', applyTheme);

// AJAX-Seitenwechsel mit Übergangsanimationen
function loadPage(page) {
    const content = document.getElementById('content');
    content.classList.add('fade-out'); // Füge Fade-Out-Animation hinzu

    setTimeout(() => {
        fetch(page)  // Lade die neue Seite per AJAX
            .then(response => response.text())
            .then(data => {
                content.innerHTML = extractContent(data); // Lade neuen Inhalt
                content.classList.remove('fade-out');
                content.classList.add('fade-in'); // Füge Fade-In-Animation hinzu
            })
            .catch(error => {
                console.error("Fehler beim Laden der Seite:", error);
                content.innerHTML = "<p>Fehler beim Laden der Seite.</p>";
            });
    }, 500); // Warte 500 ms, damit die Animation ablaufen kann
}

// Hilfsfunktion, um den Hauptinhalt aus der geladenen Seite zu extrahieren
function extractContent(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const mainContent = tempDiv.querySelector('main').innerHTML;
    return mainContent;
}
