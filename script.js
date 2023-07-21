window.onload = () => {
    placeNav();
    placeGrayBoars();
};
window.onscroll = fixNavBar;

console.log(document.getElementById('home-nav'));

async function placeNav() {
    const body = document.getElementsByTagName('body')[0];
    const navHTML = await getFileText('nav.html');

    body.innerHTML = navHTML + body.innerHTML;
}

function placeGrayBoars() {
    const body = document.getElementsByTagName('body')[0];
    const bodyHeight = Math.max(body.clientHeight, window.innerHeight+1);
    const boarSpacing = window.innerHeight;
    const numBoars = Math.ceil(bodyHeight / boarSpacing);

    const grayBoarDiv = document.createElement('div');
    grayBoarDiv.className = 'gray-boars';
    grayBoarDiv.style.height = Math.max(body.clientHeight, window.innerHeight) + 'px';

    for (let i=0; i<numBoars; i++) {
        const grayBoarElement = document.createElement('img');
        grayBoarElement.className = 'gray-boar';
        grayBoarElement.src = 'images/BoarBotMascotGray.png';
        grayBoarElement.style.top = (i * boarSpacing - 150) + 'px';
        grayBoarDiv.appendChild(grayBoarElement);
    }

    body.appendChild(grayBoarDiv);
}

function fixNavBar() {
    const navBar = document.getElementsByTagName('nav')[0];

    if (window.scrollY > 100) {
        navBar.style.backgroundColor = '#151518bb';
        navBar.style.height = '75px';
    } else {
        navBar.style.backgroundColor = '#15151800';
        navBar.style.height = '100px';
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

async function getFileText(path) {
    const result = await fetch(path);
    const resultText = await result.text();

    return resultText;
}