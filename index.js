const list = document.querySelector("#list")
console.log(list)

fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(data => renderPic(data))


const renderPic = (data) => {
    // console.log(data.message)
    let image = document.createElement("img")
    image.src = data.message
    console.log(image)
    list.append(image)
}
