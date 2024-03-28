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

    const randomCatIdBlock = document.createElement('p');
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


/* let weatherData;
const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=ba8185357306ed31322763eef4df535b";

renderWeatherData();

async function renderWeatherData() {
    weatherData = await getWeatherData(weatherUrl);
    //createWeatherData(weatherData);
}

async function getWeatherData(url) {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();

        console.log(data);
        return data;

    } catch (e) {
        console.error('Request was not sent successfully', e);
    }
} */


/* Создайте элементы DOM для отображения случайных шуток, полученных с Chuck Norris API. */

let jokeData;
const randomJokeUrl = "https://api.chucknorris.io/jokes/random";

renderRandomJoke(randomJokeUrl);

async function renderRandomJoke(url) {
    jokeData = await getRandomJoke(url);
    createJoke(jokeData);
}


async function getRandomJoke(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();

        return data;

    } catch (e) {
        console.log(e)
    }
};

function createJoke(jokeInfo) {

    const jokeWrapper = document.querySelector(".randomJoke__block");

    jokeWrapper.innerHTML = `
    <blockquote cite=${jokeInfo.url}>
        <q>
          ${jokeInfo.value}
        </q>
        <cite>Chuck Norris</cite>
    </blockquote>
    <p>Created: ${new Date(jokeInfo.created_at).toLocaleDateString()}</p>
    <p>Udated: ${new Date(jokeInfo.updated_at).toLocaleDateString()}</p>

    `;
}

/* Создайте элементы DOM для отображения текущего курса биткоина, полученного с помощью CoinDesk 
API */


let bitcoinData;

const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

renderBitcoinData(bitcoinUrl);

async function renderBitcoinData(url) {
    bitcoinData = await getBitcoinData(url);
    createBitcoinData(bitcoinData);
}


async function getBitcoinData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching current Bitcoin information:", error)
    }
};

function createBitcoinData(bitcoinInfo) {

    const bitcoinBlock = document.querySelector(".bitcoin__block");
    const bitcionPrice = bitcoinInfo.bpi.USD.rate_float;
    const bitcionCurrency = bitcoinInfo.bpi.USD.code;
    const bitcionUpdatingTime = new Date(bitcoinInfo.time.updated).toLocaleDateString();

    bitcoinBlock.innerHTML = `
        <p>Current Bitcoin Price: ${bitcionPrice.toFixed(2)} ${bitcionCurrency}</p>
        <p>Updated: ${bitcionUpdatingTime}</p>
    `;
}

/* Создайте элементы DOM для отображения текста и источника случайных цитат, полученных с 
Kanye West API. */

const quotesUrl = 'https://api.kanye.rest/';
let quotesData;

renderQuotesData(quotesUrl);

async function renderQuotesData(url) {
    quotesData = await getQuotesData(url);
    createQuotesData(quotesData);
}


async function getQuotesData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
};

function createQuotesData(quotesInfo) {

    const quoteBlock = document.querySelector(".quote__block");
    const quoteValue = quotesInfo.quote;

    quoteBlock.innerHTML = `
    <blockquote>
      <q>${quoteValue}</q>
    </blockquote>
    `;
}

/* Создайте элементы DOM для отображения случайного изображения, полученного с NASA API и данных
 из всех полей объекта */




/* const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16';

let nasaData;

renderNasaData(nasaUrl);

async function renderNasaData(url) {
    nasaData = await getNasaData(url);
    //createNasaData(nasaData);
}


async function getNasaData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
    }
};

function createNasaData(nasaInfo) {

    const nasaBlock = document.querySelector(".nasa__block");

    nasaBlock.innerHTML = `
    <div class="nasa__img">
                <img src="${nasaInfo.url}" alt="${nasaInfo.title}">
            </div>
            <h3 class="nasa__caption">
            ${nasaInfo.title}
            </h3>
            <p class="nasa__descr">
            ${nasaInfo.explanation}
            </p>
            <p class="nasa__date">
            ${nasaInfo.date}
            </p>
    `;
} */



const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

let bookData;

renderBookData(bookUrl);

async function renderBookData(url) {
    bookData = await getBookData(url);
    createBookData(bookData);
}


async function getBookData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        const dataResults = data.items["0"].volumeInfo;
        console.log(dataResults);
        return dataResults;

    } catch (error) {
        console.error(error);
    }
};

function createBookData(bookInfo) {

    const bookBlock = document.querySelector(".book__block");

    bookBlock.innerHTML = `
       <h3 class="book__caption">
         ${bookInfo.title}
       </h3>
       <div class="book__img">
         <img src="${bookInfo.imageLinks.thumbnail}" alt="${bookInfo.title}">
       </div> 
       <p>Author: ${bookInfo.authors[0]}</p>    
       <p class="book__date">
         Published: ${bookInfo.publishedDate}
       </p>
    `;
}
