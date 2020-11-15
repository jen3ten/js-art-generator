const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');
let artButton;

const navElement = function(){
    appHeader.innerHTML= nav();
    artButton = document.querySelector('.nav__section__art');
    artButton.addEventListener('click', function(){
        getArt()
    })
}

const nav = function(){
    return `
    <div class="nav__section">
    <h3 class="nav__section__items nav__section__art">New Art</h3>
    <h3 class="nav__section__items nav__section__api">Harvard API</h3>
    </div>
    `
}


const getArt = function(){
    fetch(`https://api.harvardartmuseums.org/object?apikey=05e25272-22c4-4ae2-b9bc-db212b94fe69&q=primaryimageurl:*%26 title:*&sort=random&size=1`)
    .then(response => response.json())
    .then(art => {
        const artTitle = art.records[0].title;
        const artImageURL = art.records[0].primaryimageurl;
        const artURL = art.records[0].url;
        console.log(artTitle);
        console.log(artImageURL);
        console.log(artURL);
        appDiv.innerHTML = loadArt(artTitle, artImageURL, artURL);
    })
    .catch(err => console.log(err))
}

const loadArt = function(artTitle, artImageURL, artURL){
    return `
    <h3 class="app__art-title">${artTitle}</h3>
    <a class="app__art-url" href='${artURL}' target='_blank'><img class="app__art-image-url" src='${artImageURL}'></a>
    `
}

navElement();
