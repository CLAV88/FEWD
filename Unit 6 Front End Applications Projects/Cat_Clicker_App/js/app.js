let img_ary = $('.main_img').children().toArray();
img_ary.forEach(click_pic);
//Constructor function for the pics
function click_pic(pic) {
    this.pic_count = 0;
    this.pic_name = this.alt;
    this.pic_src = this.src;
    this.click(function(e) {
        ++pic_count;
        return pic_count;
    });
}