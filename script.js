window.onload = () => {
    placeNav();
    placeGrayBoars();
};
window.onscroll = fixNavBar;

async function placeNav() {
    const body = document.getElementsByTagName('body')[0];
    const navHTML = await getFileText('nav.html');

    body.innerHTML = navHTML + body.innerHTML;
}

function placeGrayBoars() {
    const body = document.getElementsByTagName('body')[0];
    const bodyHeight = body.clientHeight;
    const boarSpacing = window.innerHeight;
    const numBoars = Math.ceil(bodyHeight / boarSpacing);

    const grayBoarDiv = document.createElement('div');

    for (let i=0; i<numBoars; i++) {
        const grayBoarElement = document.createElement('img');
        grayBoarElement.className = 'nav-img';
        grayBoarElement.src = 'images/BoarBotMascotGray.png';
        grayBoarElement.style.top = (i * boarSpacing - 150) + 'px';
        grayBoarDiv.appendChild(grayBoarElement);
    }

    body.appendChild(grayBoarDiv);
}

function fixNavBar() {
    const navBar = document.getElementsByTagName('nav')[0];
    const boarLogo = document.getElementById('nav-left').children[0];

    if (window.scrollY > 100) {
        navBar.style.backgroundColor = '#151518bb';
        navBar.style.height = '75px';
    } else {
        navBar.style.backgroundColor = '#15151800';
        navBar.style.height = '100px';
    }
}

async function getFileText(path) {
    const result = await fetch(path);
    const resultText = await result.text();

    return resultText;
}