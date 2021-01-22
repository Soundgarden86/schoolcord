
// These are the variables to manipulate the objects on the webpage
let avatar = document.querySelector('.avatar');
let moveBy = 10;

// The .addEventListener() method attaches an event handler to the document. So in this case, the position is determined from the avatar.
window.addEventListener('load', () => {
    avatar.style.position = 'absolute';
    avatar.style.left = 0;
    avatar.style.top = 0;
});


window.addEventListener('keyup', (e) => {
//     The switch statement executes the code blocks. Within this case, the arrowkeys on your keyboard.
    switch (e.key) {
            //             If you press the left arrow key the object (avatar) will move to left
        case 'ArrowLeft':
//             The parseInt() function parses a string and returns an integer.
//             In this case the avatar will move to the left with one pixel.
            avatar.style.left = parseInt(avatar.style.left) - moveBy + 'px';
            //             the command stops immediatly
            break;
            
            //             If you press the right arrow key the object (avatar) will move to right
        case 'ArrowRight':
            avatar.style.left = parseInt(avatar.style.left) + moveBy + 'px';
            //             the command stops immediatly
            break;
            
            //             If you press the up arrow key the object (avatar) will move up
        case 'ArrowUp':
            avatar.style.top = parseInt(avatar.style.top) - moveBy + 'px';
            //             the command stops immediatly
            break;
            
            //             If you press the down arrow key the object (avatar) will move down
        case 'ArrowDown':
            avatar.style.top = parseInt(avatar.style.top) + moveBy + 'px';
            //             the command stops immediatly
            break;
    }
});
