
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("complete-btn")) {
        event.preventDefault();

        const taskAssignedElement = document.getElementById("task-assigned");
        const numberElement = document.getElementById("number");
        const activityLog = document.getElementById("activity-log");
        const modal = document.getElementById("success-modal");
        const modalTextElement = modal.querySelector(".modal-box p");
        const closeModal = document.getElementById("close-modal");

        let assignedCount = parseInt(taskAssignedElement.innerText.trim());
        let completedCount = parseInt(numberElement.innerText.trim());

        if (assignedCount > 0) {
            assignedCount--;
            taskAssignedElement.innerText = assignedCount;
        }

        completedCount++;
        numberElement.innerText = completedCount;

        const logEntry = document.createElement("p");
        logEntry.innerText = ` Task completed at ${new Date().toLocaleTimeString()}`;
        logEntry.classList.add("text-green-600", "font-semibold", "mt-2");
        activityLog.appendChild(logEntry);


        if (modalTextElement) {
            modalTextElement.innerText = "taskmeeter.netlify.app says board updated successfully";
        }


        modal.showModal();


        event.target.disabled = true;
        event.target.classList.add("bg-gray-400", "cursor-not-allowed");
    }
});


document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("success-modal").close();
});


document.getElementById("clear-history-button").addEventListener("click", function () {
    const activityLogContainer = document.getElementById("activity-log");
    activityLogContainer.innerHTML = "";

    const clearedMessage = document.createElement("p");
    clearedMessage.innerText = "Activity log has been cleared.";
    clearedMessage.classList.add("text-center", "text-red-600", "font-semibold");
    activityLogContainer.appendChild(clearedMessage);
});
