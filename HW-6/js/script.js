

const productsUrl = 'https://fakestoreapi.com/products';
let productsData;

document.addEventListener("click", (e) => {

    const bodyHasModalActiveClass = document.body.classList.contains("modal-active");

    if (bodyHasModalActiveClass && e.target.closest(".modal__close")) {
        document.body.classList.remove("modal-active");
    }

    if (!bodyHasModalActiveClass && e.target.closest(".btn-fetch") ) {
        document.body.classList.add("modal-active");
        renderProductsData(productsUrl);
    }

    if (bodyHasModalActiveClass && !e.target.closest(".modal__wrap") && e.target.closest(".modal")) {
        document.body.classList.remove("modal-active");
    }
});


async function renderProductsData(url) {
    productsData = await getProductData(url);
    productsData = productsData.slice(0, 2);
    createModalWindow(productsData);
}

async function getProductData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function createModalWindow(productsData) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalWrap = document.createElement("div");
    modalWrap.classList.add("modal__wrap");
    modal.append(modalWrap);

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal__title");
    modalTitle.innerText = "Fetch posts";
    modalWrap.append(modalTitle);

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");
    modalWrap.append(modalList);

    let modalListContent = "";

    productsData.forEach(product => {
        modalListContent += `
        <li class="modal__item">
        <div class="modal__container">
            <span class="modal__caption">
                Title:
            </span>
            <div class="modal__info">
                ${product.title}
            </div>
        </div>
        <div class="modal__container">
            <span class="modal__caption">
                Body:
            </span>
            <div class="modal__info">
                ${product.description}
            </div>
        </div>
    </li>
        `;

        modalList.innerHTML = modalListContent;

        const modalClose = document.createElement("div");
        modalClose.classList.add("modal__close");

        const modalCloseImg = document.createElement("img");
        modalCloseImg.setAttribute("src", "images/icon-close.svg");
        modalCloseImg.setAttribute("alt", "close modal window");
        modalClose.append(modalCloseImg);
        modalWrap.append(modalClose);
    })

    document.body.append(modal);
}



