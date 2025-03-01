function displayTravel(response) {
  new Typewriter("#travel", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTravel(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "40bdb8c3a26579atfoa8a2d376def906";
  let context =
    "You are a travel expert and love to plan trips. Your mission is to generate travel plans in basic HTML and separate each line with a <br />. The title should begin with `Travel Guide for`. Use a header for each travel information section and ol for the information. Sign the travel guide with `Your AI Travel Guide` inside a <strong> element at the end of the travel plans. Do not include the ```htm`. Make sure to follow the user instructions. ";
  let prompt = `User instructions: Generate travel information for popular tourist attractions, popular eateries, local currency and best means of travel while visting ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#travel");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating">⏳Generating the travel guide for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayTravel);
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateTravel);
