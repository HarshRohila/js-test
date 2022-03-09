const rootDiv = document.querySelector(".root");
const shadowRoot = rootDiv.attachShadow({ mode: "open" });

const template = document.querySelector("template");

const templateContent = template.content.cloneNode(true);

shadowRoot.appendChild(templateContent);

$(rootDiv).on("click", function (e) {
  var clickedOn = $(e.target);
  console.log(clickedOn);
});

shadowRoot.addEventListener("click", (e) => {
  console.log("add", e.target);
});

$(document).on("click", function (e) {
  var clickedOn = $(e.target);
  console.log("doc", clickedOn);
});
