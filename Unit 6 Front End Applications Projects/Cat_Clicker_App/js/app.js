//Constructor function for the pics
function Picture (img_obj, i) {
    this.name = img_obj.alt;
    this.pic_count = 0;
    this.id = img_obj.id;
    this.index = i;
}

Picture.prototype.update = function () {
    this.pic_count += 1;
    figCaptionArray[this.index].innerText = this.name + "Clicks:" + this.pic_count;
};

let imgArray = $('.main_img').children('img').toArray();
let figCaptionArray = $('.main_img').children('figcaption').toArray();
let catPicArray = [];

for (let i = 0;  i < imgArray.length; i++) {
    let cat_pic = new Picture(imgArray[i], i);
    catPicArray.push(cat_pic);
    imgArray[i].addEventListener("click", function () { catPicArray[i].update();}, false);
}





