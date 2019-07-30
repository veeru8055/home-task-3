var channel = "abc-news-au";
class Model {
    constructor() {
    }

    createLeft() {
        let innerLeft = document.createElement("div");
        innerLeft.setAttribute("class", "innerLeft");
        innerLeft.setAttribute("id", "innerLeft");
        var i = 0;
        fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=38bdf22d077e45dcbdd9bbf51d0cf880`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let titles = myJson.articles;
                let fragment = document.createDocumentFragment();
                titles.forEach(function (value) {
                    let tile = document.createElement("div");
                    tile.setAttribute("class", "tile");
                    let image = document.createElement("div");
                    image.setAttribute("class", "image");
                    let img = document.createElement("img");
                    img.setAttribute("src", value.urlToImage);
                    image.appendChild(img);
                    tile.appendChild(image);
                    let info = document.createElement("div");
                    info.setAttribute("class", "info");
                    info.setAttribute("id", i);
                    var h1 = document.createElement("h1");
                    h1.appendChild(document.createTextNode(value.title));
                    info.appendChild(h1);
                    var h5 = document.createElement("h5");
                    var grayText = document.createElement("span");
                    grayText.setAttribute("class", "grayText");
                    grayText.appendChild(document.createTextNode("Posted on "));
                    h5.appendChild(grayText);
                    var published = new Date(value.publishedAt);
                    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    h5.appendChild(document.createTextNode(published.getDate() + " " + months[published.getMonth()] + ", " + published.getFullYear()));
                    var grayText = document.createElement("span");
                    grayText.setAttribute("class", "grayText");
                    grayText.appendChild(document.createElement("i").appendChild(document.createTextNode(" // Category:")));
                    h5.appendChild(grayText);
                    h5.appendChild(document.createTextNode(" Category One"));
                    info.appendChild(h5);
                    var p = document.createElement("p");
                    p.appendChild(document.createTextNode(value.description));
                    info.appendChild(p);
                    var button = document.createElement("button");
                    button.setAttribute("onclick", "details(" + i + ")");
                    i++;
                    button.appendChild(document.createTextNode("Continue Reading"));
                    info.appendChild(button);
                    tile.appendChild(info);
                    fragment.appendChild(tile);
                })
                innerLeft.appendChild(fragment);
            });
        return innerLeft;
    }
}