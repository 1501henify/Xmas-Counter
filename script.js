// Ziel-Datum für den Countdown (Weihnachten)
const zielDatum = new Date('December 25, 2024 00:00:00').getTime();

// Funktion, um den Countdown zu aktualisieren
const aktualisiereCountdown = () => {
  // Aktuelles Datum und Uhrzeit
  const jetzt = new Date().getTime();

  // Differenz zwischen Ziel-Datum und aktueller Zeit
  const zeitÜbrig = zielDatum - jetzt;

  // Berechnung der verbleibenden Tage, Stunden, Minuten und Sekunden
  const tage = Math.floor(zeitÜbrig / (1000 * 60 * 60 * 24)); // Anzahl der Tage
  const stunden = Math.floor(
    (zeitÜbrig % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // Stunden
  const minuten = Math.floor((zeitÜbrig % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
  const sekunden = Math.floor((zeitÜbrig % (1000 * 60)) / 1000); // Sekunden

  // Update der HTML-Inhalte mit den berechneten Werten
  document.getElementById('tage').textContent = tage < 10 ? `0${tage}` : tage; // 0 voranstellen, wenn < 10
  document.getElementById('stunden').textContent =
    stunden < 10 ? `0${stunden}` : stunden;
  document.getElementById('minuten').textContent =
    minuten < 10 ? `0${minuten}` : minuten;
  document.getElementById('sekunden').textContent =
    sekunden < 10 ? `0${sekunden}` : sekunden;
};

// Funktion wird alle 1000 Millisekunden (1 Sekunde) ausgeführt
aktualisiereCountdown();
setInterval(aktualisiereCountdown, 1000);

// Zusätzliche Schneefall-Animation für die festliche Stimmung
for (let i = 0; i < 50; i++) {
  const schneeflocke = document.createElement('div'); // Erstellt ein Div-Element
  schneeflocke.className = 'snowflake'; // Klasse für Styling
  schneeflocke.style.left = `${Math.random() * 100}vw`; // Zufällige Position auf der Breite
  schneeflocke.style.width = `${Math.random() * 5 + 2}px`; // Zufällige Größe
  schneeflocke.style.height = schneeflocke.style.width; // Gleiche Höhe wie Breite
  schneeflocke.style.animationDelay = `${Math.random() * 10}s`; // Zufälliger Verzögerungsstart
  document.body.appendChild(schneeflocke); // Fügt die Schneeflocke zum Dokument hinzu
}
