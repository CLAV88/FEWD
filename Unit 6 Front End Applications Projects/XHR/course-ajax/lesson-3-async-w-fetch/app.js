(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                Authorization: 'Client-ID 26307bda28a40deef21ea74f3c70829479fe6fdf204b8594bd568abe5b90cc3c'
            }
        }).then(response => response.json()).then(addImage).catch(f => requestError(f, 'image'));
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
        function requestError(f, part) {
            console.log(f);
            responseContainer.insertAdjacentHTML('beforend', `<p class="network-warning">"Error during request for the ${part}.</p>`);
        }
    });
})();
