
document.getElementById("discover-btn").addEventListener("click", function () {
    window.location.href = "page.html";
});

// Get the "Completed" button and the modal
// const completeButton = document.getElementById("complete-btn");
// const modal = document.getElementById("success-modal");
// const closeModalButton = document.getElementById("close-modal");

// Show modal when "Completed" button is clicked
// completeButton.addEventListener("click", () => {
//     modal.showModal();
// });

// Close modal when "OK" button is clicked
// closeModalButton.addEventListener("click", () => {
//     modal.close();
// });


const completedButtons = document.querySelectorAll(".complete-btn");
for (let i = 0; i < completedButtons.length; i++) {
    completedButtons[i].addEventListener('click', function () {
        console.log('button')
    });

}




