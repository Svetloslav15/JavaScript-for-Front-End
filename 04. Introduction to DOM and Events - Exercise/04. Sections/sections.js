function create(sentences) {
    let container = document.getElementById("content");
    for (let item of sentences) {
        let innerDiv = document.createElement("div");
        let paragraph = document.createElement("p");
        paragraph.textContent = item;
        paragraph.style.display = "none";
        innerDiv.appendChild(paragraph);
        innerDiv.addEventListener("click", function () {
           paragraph.style.display = "inline-block";
        });
        container.appendChild(innerDiv);
    }
}