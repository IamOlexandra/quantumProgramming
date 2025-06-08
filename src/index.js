var currentVisible = 0;
function moveSlider(number) {
    document.getElementsByClassName("reviwes-item")[currentVisible].classList.remove("reviwes-visible");
    document.getElementsByClassName("reviwes-item")[number].classList.add("reviwes-visible");
    currentVisible = number;
}