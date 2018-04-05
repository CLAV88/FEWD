(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        fetch(`https://api.unsplash.com/search/photos?client_id=26307bda28a40deef21ea74f3c70829479fe6fdf204b8594bd568abe5b90cc3c&page=1&query=${searchedForText}`, {
            method: 'GET',
            mode: 'no-cors',
        }).then(response => response.json()).then(addImage);
        function addImage(data) {
            let htmlContent = '';
            const firstImage = data.results[0];
            if (firstImage) {
                htmlContent = `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.';
            }
            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }
    });
})();
