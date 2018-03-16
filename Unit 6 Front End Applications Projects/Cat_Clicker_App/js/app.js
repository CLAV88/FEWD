//Constructor function for the pics
function Picture (img_obj) {
    name = img_obj.alt;
    this.pic_count = 0;
}

Picture.prototype.updateClick = function () {
    this.pic_count += 1;
};

let img_ary = $('.main_img').children().toArray();
let cat_pic_ary = [];

for (let i = 0;  i < img_ary.length; i++) {
    console.log(img_ary[i]);
    let cat_pic = new Picture(img_ary[i]);
    cat_pic_ary.push(cat_pic);
    img_ary[i].addEventListener("click", function() {cat_pic_ary[1].updateClick();}, false);
}



