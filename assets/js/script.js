document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-button');
    const shareInactive = document.querySelector('.share-inactive');
    const shareActive = document.querySelector('.share-active');

    function toggleShareOptions() {
        shareInactive.classList.toggle('hidden');
        shareActive.classList.toggle('hidden');
    }

    shareButtons.forEach(button => {
        button.addEventListener('click', toggleShareOptions);
    });
});