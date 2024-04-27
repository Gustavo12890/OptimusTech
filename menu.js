document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('icon-menu');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    function adjustMenuDisplay() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 992) {
            navLinks.style.display = 'flex';
            navButtons.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
            navButtons.style.display = 'none';
        }
    }

    adjustMenuDisplay();

    window.addEventListener('resize', adjustMenuDisplay);

    burgerIcon.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
        navButtons.style.display = navButtons.style.display === 'flex' ? 'none' : 'flex';
    });
});
