document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const mainContent = document.querySelector("main");

    // Menü ausklappen
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Inhalt einblenden
    setTimeout(() => {
        mainContent.style.opacity = "1";
    }, 100);

    // Dunkelmodus aktivieren
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
    };

    // Dunkelmodus nach System-Einstellungen setzen
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        toggleDarkMode();
    }

    // Dunkelmodus aktivieren/deaktivieren mit einem Tastendruck (optional)
    document.addEventListener("keydown", function (event) {
        if (event.key === "d") {
            toggleDarkMode();
        }
    });
});
