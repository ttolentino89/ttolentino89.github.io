//API
const personAPI = 'https://uinames.com/api/?ext';
const musicAPI = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1/'


//DOM queries
const button = document.querySelector('button');
// const genderInput = document.querySelector('gender');
const result = document.querySelector(".show-content");

button.addEventListener('click', async () => {
  const gender = genderInput.value;
  let response = await axios.get(`${BASE_URL}&s=${movie}`)
    .then(response => {
            let photo = response.data.photo;
            let first = response.data.name;
            let last = response.data.surname;
            let age = response.data.age;
            let country = response.data.region;
            result.innerHTML += `<div id="person">
                            <img src="${photo}"> <br />
                            <h4>${first} ${last}</h4>
                            <br />
                            <h3>Age ${age} from ${country}</h3>
                            </div>`;
     });
});


function hideInstructions() {
    let x = document.getElementById("intro");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function burgerTime() {
 var x = document.getElementById("myTopnav");
 if (x.className === "topnav") {
   x.className += " responsive";
 } else {
   x.className = "topnav";
 }
}
