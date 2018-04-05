(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        fetch(`https://api.unsplash.com/search/photos?page=1&query=hippos`, {
            mode: 'no-cors',
            headers: {
                Authorization: 'Client-ID 960ee6e399c6b61b9f2886b126caf7bcdc6c7d41bc5c2b9a874bbb028adc887a',
            }
        }).then(function (response) {
            debugger;// work with the returned response
        });
    });


})();
