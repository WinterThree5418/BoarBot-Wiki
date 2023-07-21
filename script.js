window.onload = placeGrayBoars;
window.onscroll = fixNavBar;

function placeGrayBoars() {
    const body = document.getElementsByTagName('body')[0];
    const bodyHeight = body.clientHeight;
    const boarSpacing = window.innerHeight;
    const numBoars = Math.ceil(bodyHeight / boarSpacing);

    for (let i=0; i<numBoars; i++) {
        const grayBoarElement = document.createElement('img');
        grayBoarElement.className = 'nav-img';
        grayBoarElement.src = 'images/BoarBotMascotGray.png';
        grayBoarElement.style.top = (i * boarSpacing - 150) + 'px';
        body.appendChild(grayBoarElement);
    }
}

function fixNavBar() {
    const body = document.getElementsByTagName('body')[0];
    const navBar = document.getElementById('nav');

    if (window.scrollY > 100) {
        navBar.style.backgroundColor = '#151518';
    } else {
        navBar.style.backgroundColor = '#15151800';
    }
}