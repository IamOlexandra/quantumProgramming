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

window.addEventListener('load', function() {
  (() => {
    const refs = {
      openCowModalBtn: document.querySelector("[cow-modal-open]"),
      closeCowModalBtn: document.querySelector("[cow-modal-close]"),
      modal: document.querySelector("[cow-modal]"),
    };
  
    refs.openCowModalBtn.addEventListener("click", toggleCowModal);
    refs.closeCowModalBtn.addEventListener("click", toggleCowModal);
  
    function toggleCowModal() {
      refs.modal.classList.toggle("is-hidden");
      /*document.body.classList.toggle("no-scroll");*/
    }
  })();
});