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

        function copyIP() {
            const ip = "mc.example.com"; // Ersetze mit deiner Server-IP
            navigator.clipboard.writeText(ip).then(() => {
                alert("Minecraft Server IP kopiert: " + ip);
            }).catch(err => {
                console.error('Fehler beim Kopieren: ', err);
            });
        }
