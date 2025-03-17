document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.getElementById('helpButton');
    const resultMessage = document.getElementById('resultMessage');
    const fireworksAnimation = document.getElementById('fireworksAnimation');

    helpButton.addEventListener('click', function () {
        resultMessage.classList.remove('hidden');
        fireworksAnimation.classList.remove('hidden');
        helpButton.disabled = true;
        helpButton.textContent = '已助力';

        setTimeout(() => {
            fireworksAnimation.classList.add('hidden');
        }, 2000);
    });
});