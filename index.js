// Get the modal
let modal = document.getElementById("myModal");

// Get the image link and insert the modal image - use its "data-src" attribute as a source
let link = document.getElementsByClassName("image-link");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < link.length; i++) {
    link[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-src");
        captionText.innerHTML = this.innerHTML;
        this.classList.add("visible-link");
    }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    let visibleLink = document.querySelector(".visible-link");
    if (visibleLink) {
        visibleLink.classList.remove("visible-link");
    }
}

// Close the modal when the user clicks outside of the image
modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        let visibleLink = document.querySelector(".visible-link");
        if (visibleLink) {
            visibleLink.classList.remove("visible-link");
        }
    }
}
