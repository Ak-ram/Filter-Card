let card = document.getElementsByClassName("card")[0],
  mouseCircleFollower = document.getElementsByClassName(
    "mouse-follow-circle"
  )[0],
  countriesList = document.getElementById("countries-menu"),
  countriesChooseBox = document.getElementById("location-title"),
  countries = ["egypt", "mixico", "japan", "saudi arabian"];

for (let i = 0; i < countries.length; i++) {
  let country = document.createElement("li");
  country.innerText = countries[i];
  countriesList.append(country);
  country.addEventListener("click", (e) => {
    countriesChooseBox.innerText = country.innerText;
    countriesList.classList.add("hidden");
  });
}
// toggle dropdown menu
countriesChooseBox.parentElement.addEventListener("click", () => {
  countriesList.classList.toggle("hidden");
});

// circle mouse follower controls
card.addEventListener("mousedown", (e) => {
  mouseCircleFollower.style.transform = `translate(${e.clientX - 405}px,${
    e.clientY - 165
  }px)`;
  mouseCircleFollower.classList.remove("fade");
});

card.addEventListener("mouseup", (e) => {
  mouseCircleFollower.classList.add("fade");
});
