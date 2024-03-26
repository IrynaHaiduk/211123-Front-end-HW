/* Создайте элементы DOM для отображения информации о случайном пользователе, полученного с помощью 
Random User API. */

//   https://randomuser.me/api/

let userData;
const randomUserUrl = "https://randomuser.me/api/";

renderRandomUser();

async function renderRandomUser() {
    userData = await getRandomUser(randomUserUrl);
    createUser(userData);
}

async function getRandomUser(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        dataResults = data.results["0"];

        return dataResults;

    } catch (e) {
        console.log(e)
    }
};

function createUser(userInfo) {
    const userName = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;

    const userWrapper = document.querySelector(".randomUser__wrapper");
    const userImageBlock = document.createElement("div");
    userImageBlock.classList.add("randomUser__image");

    const userImage = document.createElement("img");
    userImage.setAttribute('src', userInfo.picture.large);
    userImage.setAttribute('alt', userName);
    userImageBlock.append(userImage);

    const userInfoBlock = document.createElement("div");
    userInfoBlock.classList.add("randomUser__info");

    const userCaption = document.createElement("h3");
    userCaption.classList.add("randomUser__caption");
    userCaption.textContent = userName;

    const userEmail = document.createElement("a");
    userEmail.classList.add("randomUser__email");
    userEmail.setAttribute("href", `mailto:${userInfo.email}`);
    userEmail.textContent = userInfo.email;

    const userPhone = document.createElement("a");
    userPhone.classList.add("randomUser__phone");
    userPhone.setAttribute("href", `tel:+${userInfo.phone}`);
    userPhone.textContent = userInfo.phone;

    userInfoBlock.append(userCaption, userEmail, userPhone);

    userWrapper.append(userImageBlock, userInfoBlock);
}

/* Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью 
The Cat API.
 */
let catData;
const catNamesArr = ["Vasya", "Murka", "Jake", "Katty", "Tom", "Jerry", "Musya", "Kitty"];
const randomCatUrl = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

renderRandomcat();

async function renderRandomcat() {
    catData = await getRandomCat(randomCatUrl);
    console.log(catData);
    createCat(catData);
}

async function getRandomCat(url) {
 
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        dataResults = data["0"];

        return dataResults;

    } catch (e) {
        console.error('Request was not sent successfully', e);
    }

}

function createCat(data) {

    const randomCatSection = document.querySelector('.randomCat');
    const randomCatImgBlock = randomCatSection.querySelector('.randomCat__image');
    const randomCatInfoBlock = randomCatSection.querySelector('.randomCat__info');

    const randomCatImage = document.createElement('img');
    randomCatImage.setAttribute("src", data.url);
    randomCatImage.setAttribute("alt", "cat");
    randomCatImage.classList.add("randomCat__img");
    randomCatImgBlock.append(randomCatImage);

   const  randomCatIdBlock = document.createElement('p');
   randomCatIdBlock.textContent = `Cats id: ${data.id}`;
   randomCatInfoBlock.append(randomCatIdBlock);

   const randomCatNameBlock = document.createElement('p');
   const randomCatName = getRandomName(catNamesArr);
   randomCatNameBlock.textContent = `Cats name: ${randomCatName}`;
   randomCatInfoBlock.append(randomCatNameBlock);
}

function getRandomName(namesArr) {
    const randomIndex = Math.floor(Math.random() * namesArr.length);
    const randomName = namesArr[randomIndex]; 
    return randomName;
}

/* Создайте элементы DOM для отображения текущей погоды для вашего города, полученной 
с помощью OpenWeather API, включая описание и температуру. */


