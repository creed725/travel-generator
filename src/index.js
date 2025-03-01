function generateTravel(event) {
  event.preventDefault();

  new Typewriter("#travel", {
    strings: ["The travel will go here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateTravel);
