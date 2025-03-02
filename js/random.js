document.getElementById('random-color').addEventListener('click', function (event) {
    event.preventDefault();
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomcolor;

})





document.getElementById("calender").addEventListener("click", function (event) {


    const currentDate = new Date();


    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'short' });


    const dateString = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const dayElement = document.getElementById('wed-day');
    const dateElement = document.getElementById('date');


    if (dayElement) {
        dayElement.innerText = dayOfWeek;
    }

    if (dateElement) {
        dateElement.innerText = dateString;
    }
});