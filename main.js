let galleryImages = document.querySelectorAll('.gallery-cell');
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
    image.onclick = function(){
        getLatestOpenedImg = index +1;

        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute('class', 'img-window');
        newImgWindow.setAttribute('onclick', 'closeImg()');

        let newImg = image.firstElementChild.cloneNode();
        newImgWindow.appendChild(newImg);
        newImg.classList.remove(gallery.cell_img);
        newImg.classList.add('popup-img');
        newImg.setAttribute('id', 'current-img');

        newImg.onload = function(){
            let newNextBtn = document.createElement('a');
            newNextBtn.innetHTML = '<i class="fas fa-chevron-right next"></i>';
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute('class', 'img-btn-next');
            newNextBtn.setAttribute('onclick', 'changeImg(1)');

            let newPrevBtn = document.createElement('a');
            newPrevBtn.innetHTML = '<i class="fas fa-chevron-right next"></i>';
            container.appendChild(newNextPrev);
            newNextPrev.setAttribute('class', 'img-btn-next');
            newNextPrev.setAttribute('onclick', 'changeImg(0)');



        }
    }
})