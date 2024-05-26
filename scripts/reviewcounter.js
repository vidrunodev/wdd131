document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('reviewCounter');
    counterElement.textContent = localStorage.getItem('reviewCounter');
});
