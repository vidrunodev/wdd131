window.onload = function () {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString();
    var footerParagraph = document.getElementById("lastmodified");
    footerParagraph.textContent = "Last modified: " + formattedDate;
}