let popupOverlay = document.querySelector(".popup-overlay")
let popupBox = document.querySelector(".popup-box")
let addPopupButton = document.getElementById("add-popup-button")

addPopupButton.addEventListener("click", function () {
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})


let cancelButton = document.getElementById("cancel-button")

cancelButton.addEventListener("click", function (event) {
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

let addButton = document.getElementById("add-button")
let container = document.querySelector(".container")
let bookTitle = document.getElementById("book-title-input")
let bookAuthor = document.getElementById("book-author-input")
let bookDescription = document.getElementById("book-description")

addButton.addEventListener("click", function (event) {

    event.preventDefault()

    let div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = ` <div class="header">
                <h3>${bookTitle.value}</h3>
                <h5>${bookAuthor.value}</h5>
            </div>
            <p>${bookDescription.value}</p>
            <button onclick="deleteBook(event)">Delete</button>`
            container.append(div)
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

function deleteBook(event){

    event.target.parentElement.remove()
}