let myImage = document.querySelector('img');
let catImages = [
    '111.jpg',
    '222.jpg',
    '333.jpg',
    '444.jpg',
];
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
myImage.onclick = function() {
    let randomCatImage = getRandomElement(catImages); 
    myImage.setAttribute('src', 'images/' + randomCatImage); 
}