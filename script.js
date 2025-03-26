/// Example JavaScript to add some interactivity
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700'; // Change color on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white'; // Revert color
        });
    });
});