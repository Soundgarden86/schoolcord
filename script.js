let avatar = document.querySelector('.avatar');
let moveBy = 10;

window.addEventListener('load', () => {
    avatar.style.position = 'absolute';
    avatar.style.left = 0;
    avatar.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            avatar.style.left = parseInt(avatar.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            avatar.style.left = parseInt(avatar.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            avatar.style.top = parseInt(avatar.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            avatar.style.top = parseInt(avatar.style.top) + moveBy + 'px';
            break;
    }
});
