document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('interactionCounter');
    const currentCount = localStorage.getItem('contactFormSubmissions') || 0;
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem('contactFormSubmissions', newCount);
    counterElement.textContent = newCount;

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
});
