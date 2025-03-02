
const activityLogSection = document.getElementById("activity-log");


const completeButtons = document.getElementsByClassName("complete-btn");


for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", function (event) {
        event.preventDefault();


        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        const taskTitle = this.parentElement.parentElement.querySelector("h3").textContent.trim();


        const message = `You have completed the task "${taskTitle}" at ${timeString}`;


        const logMessage = document.createElement("p");
        logMessage.textContent = message;
        logMessage.classList.add("text-black", "text-sm", "mt-2", "text-center", "font-semibold");
        logMessage.classList.add("activity-message");


        activityLogSection.parentElement.appendChild(logMessage);
    });
}


document.getElementById("clear-history-button").addEventListener("click", function (event) {
    event.preventDefault();


    const logMessages = document.querySelectorAll(".activity-message");
    logMessages.forEach(message => message.remove());
});
