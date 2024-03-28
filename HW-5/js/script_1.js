
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16';
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
}