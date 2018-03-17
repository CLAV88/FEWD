//Constructor function for the pics
function Picture (img_obj) {
    name = img_obj.alt;
    this.pic_count = 0;
}

Picture.prototype.updateClick = function () {
    this.pic_count += 1;
};

let imgArray = $('.main_img').children().toArray();
let catPicArray = [];

for (let i = 0;  i < imgArray.length; i++) {
    console.log(imgArray[i]);
    let cat_pic = new Picture(imgArray[i]);
    catPicArray.push(cat_pic);
    imgArray[i].addEventListener("click", imageInstance(i)(i), false);
}

function imageInstance(i) {
    catPicArray[i].updateClick();
}




