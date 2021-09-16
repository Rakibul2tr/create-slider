const images = [
    'img/bick-1.jpg',
    'img/bick-2.jpg',
    'img/bick-1.jpg',
    'img/bick-2.jpg',
    'img/bick-1.jpg',
    'img/bick-2.jpg',
]

let imgindex= 0;
const imagesElement = document.getElementById('img');
setInterval( function(){
    if(imgindex>=images.length){
        imgindex = 0;
    }
    let imgurl = images[imgindex];
    imagesElement.setAttribute('src',imgurl);
    imgindex++
} ,2000)