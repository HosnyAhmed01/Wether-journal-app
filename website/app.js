/*Global Variables */
let myapiKey = "ac1ff7ab7a50b6f1a59334c35bcc335c&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + " / " + d.getDate() + " / " + d.getFullYear();

const postData = async (url = "", data = {}) => {
  //   console.log(data);
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

const callApi = async () => {
  let zipcode = document.getElementById("zip").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipcode +
    "&appid=" +
    myapiKey;
  const getData = await fetch(apiUrl);
  try {
    const response = await getData.json();
    let feeling = document.getElementById("feelings").value;
    postData("/", {
      temp: response.main.temp,
      date: newDate,
      feelings: feeling,
    });
    updateUi();
  } catch (error) {
    console.log("error", error);
  }
};

const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("content").innerHTML =
      "you are feeling " + allData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};
document.getElementById("generate").addEventListener("click", callApi);
