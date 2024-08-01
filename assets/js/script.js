document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-button');
    const shareInactive = document.querySelector('.share-inactive');
    const shareActive = document.querySelector('.share-active');
    const readMoreToggle = document.querySelector('.read-more-toggle');
    const readMoreContent = document.querySelector('.read-more-content');
    const heroImg = document.querySelector('.hero-img');

    function toggleShareOptions() {
        shareInactive.classList.toggle('hidden');
        shareActive.classList.toggle('hidden');
    }

    function toggleReadMore() {
        readMoreContent.classList.toggle('show');
        readMoreToggle.textContent = readMoreContent.classList.contains('show') ? 'Read Less' : 'Read More';
    }

    function zoomImage() {
        heroImg.style.transform = 'scale(1.5)';
        setTimeout(() => {
            heroImg.style.transform = 'scale(1)';
        }, 300);
    }

    shareButtons.forEach(button => {
        button.addEventListener('click', toggleShareOptions);
    });

    readMoreToggle.addEventListener('click', toggleReadMore);
    heroImg.addEventListener('click', zoomImage);

    // Add hover effect to social media icons
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2) rotate(5deg)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add subtle animation to the article title
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    setTimeout(() => {
        title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
});