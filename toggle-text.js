const message = document.querySelector("#message");
const button = document.querySelector("#toggleButton");

[button.addEventListener(](https://button.addEventListener()"click", function () {
  if (message.textContent === "On") {
    message.textContent = "Off";
  } else {
    message.textContent = "On";
  }
});
