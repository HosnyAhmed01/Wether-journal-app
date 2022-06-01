/* Global Variables */
const myapiKey = "ac1ff7ab7a50b6f1a59334c35bcc335c&units=imperial";
// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth() + 1 + " / " + d.getDate() + " / " + d.getFullYear();

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "post",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    const newData = response.json();
    return newData;
  } catch (error) {
    console.log("error" + error);
  }
};

const updateUI = async () => {
  let zipcode = document.getElementById("zip").value;
  let mykey =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipcode +
    "&appid=" +
    myapiKey;
  const request = await fetch(mykey);
  try {
    const allData = await request.json();
    let feeling = document.getElementById("feelings").value;
    // let myDiv = document.createElement("div");
    // myDiv.innerHTML = `you are feeling   ${feeling}  <br>
    // ${newDate}`;
    document.querySelector(".holder #date").innerHTML = newDate;
    document.querySelector(".holder #temp").textContent =
      Math.round(allData.main.temp) + " degrees";
    document.querySelector(".holder #content").innerHTML = feeling;
    postData("/", allData);
  } catch (error) {
    console.log("error", error);
  }
};
document.getElementById("generate").addEventListener("click", updateUI);
