// Volume Slider Functionality ===============================================================
const volumeSlider = document.querySelector('.volume-slider');
const volumeLevel = document.querySelector('.volume-level');

volumeSlider.addEventListener('input', function() {
    const value = parseInt(this.value);
    volumeLevel.textContent = value;
    this.style.backgroundImage = `linear-gradient(to right, #0ab2be 0%, #005c14 ${value}%, #ddd ${value}%, #ddd 100%)`;
    // Here you would also add your audio/video volume control logic
    // For example:
    // myAudioElement.volume = value / 100;
});

// Set initial gradient on page load
const initialValue = parseInt(volumeSlider.value);
volumeSlider.style.backgroundImage = `linear-gradient(to right, #3ed34a 0%, #004706f ${initialValue}%, #ddd ${initialValue}%, #ddd 100%)`;
volumeLevel.textContent = initialValue;


// Play button Visibility Toggle ============================================================