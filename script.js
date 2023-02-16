const faqDiv = document.querySelector(".faq-list");
faqDiv.addEventListener("click", (event) => {
  let target = event.target;
  let content = event.target.parentElement.parentElement.nextElementSibling;
  if (event.target.className == "plus-icon") {
    collapseFAQ();
    target.src = "images/cancel-icon.png";
    target.className = "cancel-icon";
    content.classList.add("show-faq-body");
  } else if (event.target.className == "cancel-icon") {
    target.src = "images/plus-icon.png";
    target.className = "plus-icon";
    content.classList.remove("show-faq-body");
  }
});

function collapseFAQ() {
  faqDiv.querySelectorAll(".faq-body").forEach((faqItem) => {
    faqItem.classList.remove("show-faq-body");
    faqItem.previousElementSibling.querySelector(".faq-icon img").src =
      "images/plus-icon.png";
  });
}
