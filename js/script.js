        function includeHTML() {
            document.querySelectorAll("[data-include]").forEach(el => {
                fetch(el.getAttribute("data-include"))
                    .then(response => response.text())
                    .then(data => el.innerHTML = data);
            });
        }
        document.addEventListener("DOMContentLoaded", includeHTML);

        function copyIP() {
            const ip = "mc.example.com"; // Ersetze mit deiner Server-IP
            navigator.clipboard.writeText(ip).then(() => {
                alert("Server-IP kopiert: " + ip);
            }).catch(err => {
                console.error('Fehler beim Kopieren: ', err);
            });
        }
