/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            type: 'GET',
            dataType: 'jsonp',
            headers: {
                'Authorization': 'Client-ID 26307bda28a40deef21ea74f3c70829479fe6fdf204b8594bd568abe5b90cc3c'
            }
        }).done(addImage)
            .fail(function (err) {
                requestError(err, 'image');
            });
    });
    function addImage(data) {
        let htmlContent = '';
        if (data && data.results && data.results.length > 1) {
            const firstImage = data.results[0];
            htmlContent = `<figure>
                <img src="${firstImage.urls.small}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`;
        } else {
            htmlContent = '<div class="error-no-image">No images avaiable</div>';
        }
        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }
    function requestError(e, part) {
        console.log(e);
    }
})();


