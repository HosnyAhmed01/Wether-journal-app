/* Global Variables */
let apiKey = "ac1ff7ab7a50b6f1a59334c35bcc335c";
// let baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

// call server

// const callthis = async (baseUrl, zipCode, apiKey) => {
//   const res = await fetch(baseUrl + zipCode + "&appid=" + apiKey);
//   try {
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
let button = document
  .getElementById("generate")
  .addEventListener("click", callthis);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

async function callthis() {
  let zipCode = document.getElementById("zip").value;
  let my =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipCode +
    "&appid=" +
    apiKey;
  await fetch(my);
  try {
    const data = await response.json();
    console.log(data);
  } catch {
    (data) => console.log(data);
  }
}
