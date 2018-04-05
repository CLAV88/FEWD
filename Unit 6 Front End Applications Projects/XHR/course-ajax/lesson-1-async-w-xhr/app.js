(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });

})();

const unsplashRequest = new XMLHttpRequest();
let searchedForText = 'hippos';
const responseContainer = document.querySelector('#response-container');

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID 960ee6e399c6b61b9f2886b126caf7bcdc6c7d41bc5c2b9a874bbb028adc887a');
unsplashRequest.send();
function addImage() {
    console.log('adding image successful');
}
