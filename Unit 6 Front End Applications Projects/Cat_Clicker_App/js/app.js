
let allCats = [
    {
        source:"assets/cat_pic_1.jpg",
        alt: "Kitten Pic",
        click_count:0
    }, {
        source:"assets/cat_pic_2.jpg",
        alt: "Half-look Turquoise Cat",
        click_count:0
    }, {
        source:"assets/cat_in_the_box.jpg",
        alt: "Cat In The Box",
        click_count:0
    }, {
        source:"assets/glowing_opals_cat.jpeg",
        alt: "Glowing Opals",
        click_count:0
    }, {
        source:"assets/taco_cat.png",
        alt: "Taco Cat",
        click_count:0
    }
 ]; 

function init(){
loadCat(0);
}


//need to modify the loadCat function to use only handlebars like the function that populates the menu
function loadCat(id) {
    let img_template = $('.main_img img');
    let img_caption = $('.main_img figcaption');
    img_template.attr('src', allCats[id].source);
    img_template.attr('id' , "cat_pic_"+id);
    img_template.attr('alt', allCats[id].alt);
    img_caption.text(allCats[id].alt + " Clicks:" + allCats[id].click_count);
}

init();

    /* Loop through all of our cat images, assigning an id property to
     * each of the feeds based upon its index within the array.
     * Then parse that feed against the feedItemTemplate (created
     * above using Handlebars) and append it to the list of all
     * available feeds within the menu.
     */

$(function() {
    let catId = 0,
        menuIcon = $('.menu-icon-link');
        catList = $('.cat-list'),
        feedItemTemplate = Handlebars.compile($('.tpl-cat-list').html()),
    
    allCats.forEach(function(catpic) {
        catpic.id = catId;
        catList.append(feedItemTemplate(catpic));
        catId++;
    });

    catList.on('click', 'a', function() {
        let item = $(this);

        $('body').addClass('menu-hidden');
        loadCat(item.data('id'));
        return false;
    });
    /* When the menu icon is clicked on, we need to toggle a class
     * on the body to perform the hiding/showing of our menu.
     */
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });

});
/* //Constructor function for the pics
// The names and URLs to all of the feeds we'd like available.
function Picture (img_obj, i) {
    this.name = img_obj.alt;
    this.pic_count = 0;
    this.id = img_obj.id;
    this.index = i;
}

Picture.prototype.update = function () {
    this.pic_count += 1;
    figCaptionArray[this.index].innerText = this.name + " Clicks:" + this.pic_count;
};

let imgArray = $('.main_img').children('img').toArray();
let figCaptionArray = $('.main_img').children('figcaption').toArray();
let catPicArray = [];

for (let i = 0;  i < imgArray.length; i++) {
    let cat_pic = new Picture(imgArray[i], i);
    catPicArray.push(cat_pic);
    imgArray[i].addEventListener("click", function () { catPicArray[i].update();}, false);
}
 */




