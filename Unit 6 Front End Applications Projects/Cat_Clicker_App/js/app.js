let cat_pic_1 = $('#cat_pic_1');
let click_count = 0;

cat_pic_1.click(function(e) {
    ++click_count;
    return click_count;
});