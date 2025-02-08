async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    for (const el of elements) {
        const file = el.getAttribute("data-include");
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error("Datei nicht gefunden: " + file);
            el.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        }
    }
}
includeHTML();

// Funktion zum Wechseln zwischen Dark und Light Mode
function toggleDarkMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
    body.classList.toggle('dark-mode', currentMode === 'dark');
    localStorage.setItem('theme', currentMode); // Speichern der Auswahl im LocalStorage
}

// Überprüfen, ob ein gespeicherter Modus existiert und anwenden
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Event Listener für den Dark/Light Mode Schalter im Footer
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
});
