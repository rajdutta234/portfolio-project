// Image handling functionality
function openLightbox() {
    const lightbox = document.getElementById('profileLightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function closeLightbox() {
    const lightbox = document.getElementById('profileLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close lightbox when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Prevent lightbox from closing when clicking on the image
document.querySelector('.profile-lightbox img').addEventListener('click', (e) => {
    e.stopPropagation();
});
