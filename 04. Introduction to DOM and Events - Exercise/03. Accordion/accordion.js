function toggle() {
     let span = document.getElementsByClassName("button")[0];
     let extra = document.getElementById('extra');
     if (span.textContent === "More"){
         extra.style.display = "block";
         span.textContent = "Less";
     }
     else{
         extra.style.display = "none";
         span.textContent = "More";
     }
}