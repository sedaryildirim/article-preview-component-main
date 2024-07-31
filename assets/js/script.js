document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');
    const shareSection = document.querySelector('.share');
    const mobileActiveSection = document.querySelector('.mobile-active');

    function toggleShareView() {
        shareSection.classList.toggle('hidden');
        mobileActiveSection.classList.toggle('hidden');
    }

    // Add click event listener to the main share button
    shareButton.addEventListener('click', toggleShareView);

    // Add click event listener to the share button in the mobile active view
    const mobileShareButton = mobileActiveSection.querySelector('.share-button');
    if (mobileShareButton) {
        mobileShareButton.addEventListener('click', toggleShareView);
    }
});