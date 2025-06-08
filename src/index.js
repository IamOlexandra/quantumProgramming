var currentVisible = 0,
    intervalId = setInterval(autoSlider, 3000);
function moveSlider(number) {
    document.getElementsByClassName("reviwes-item")[currentVisible].classList.remove("reviwes-visible");
    document.getElementsByClassName("reviwes-item")[number].classList.add("reviwes-visible");
    currentVisible = number;
}
function clickSlider(number) {
    clearInterval(intervalId);
    moveSlider(number);
}
function autoSlider() {
    var nextItem = currentVisible + 1;
    if(nextItem > 2) {
        nextItem = 0;
    }
    moveSlider(nextItem);
}