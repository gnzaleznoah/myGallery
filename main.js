let galleryImages = document.querySelectorAll('.gallery-cell');
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
    image.onclick = function(){
        getLatestOpenedImg = index +1;

        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
    }
})