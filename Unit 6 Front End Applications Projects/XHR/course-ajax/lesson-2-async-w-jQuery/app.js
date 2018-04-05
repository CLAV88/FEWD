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
            url: `https://unsplash.com/napi/search?query=${searchedForText}`,
            type: 'GET',
            dataType: 'jsonp',
            headers: {
                Authorization: 'Client-ID 960ee6e399c6b61b9f2886b126caf7bcdc6c7d41bc5c2b9a874bbb028adc887a'
            }
        }).done(addImage);
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
    });
})();


