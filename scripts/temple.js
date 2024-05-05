const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navigation.classList.toggle("show-links");
});