document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        const r = redRange.value;
        const g = greenRange.value;
        const b = blueRange.value;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`.toUpperCase();

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
    }

    function updateRange() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateRange);
    greenInput.addEventListener("input", updateRange);
    blueInput.addEventListener("input", updateRange);

    updateColor();
});

