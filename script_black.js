function showPopup() {
    const popupButton = document.getElementById('popupButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupContainer = document.getElementById('popupContainer');
    const closeButton = document.getElementById('closeButton');

    popupOverlay.classList.remove('hidden');
    popupContainer.classList.remove('hidden');

    closeButton.addEventListener('click', () => {
        closePopup();
    });

    popupOverlay.addEventListener('click', () => {
        closePopup();
    });

    function closePopup() {
        popupOverlay.classList.add('hidden');
        popupContainer.classList.add('hidden');
    }
}

setTimeout(showPopup, 5000);
