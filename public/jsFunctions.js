var emailModal = document.getElementById("emailModal");
var joinButton = document.getElementById("joinButton");

joinButton.addEventListener("click", function onOpen() {
  if (typeof emailModal.showModal === "function") {
    emailModal.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

emailModal.addEventListener("click", function (event) {
  var rect = emailModal.getBoundingClientRect();
  var isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!isInDialog) {
    emailModal.close();
  }
});
