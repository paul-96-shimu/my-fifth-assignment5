document.getElementById('random-color').addEventListener('click', function (event) {
    event.preventDefault();
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomcolor;

})
