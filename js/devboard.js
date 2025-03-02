document.addEventListener("click", function (event) {
    // Check if the clicked element is a complete button
    if (event.target && event.target.classList.contains("complete-btn")) {
        // Prevent default action (if applicable)
        event.preventDefault();

        // Task Assigned & Completed Count (সংখ্যা আপডেট)
        const taskAssignedElement = document.getElementById("task-assigned");
        const numberElement = document.getElementById("number");
        const activityLog = document.getElementById("activity-log");
        const modal = document.getElementById("success-modal");
        const closeModal = document.getElementById("close-modal");

        // Task Assigned & Completed Count
        let assignedCount = parseInt(taskAssignedElement.innerText.trim());
        let completedCount = parseInt(numberElement.innerText.trim());

        // Task Completed
        if (assignedCount > 0) {
            assignedCount--;
            taskAssignedElement.innerText = assignedCount;
        }

        completedCount++;
        numberElement.innerText = completedCount;

        // Activity Log এ নতুন এন্ট্রি যোগ করা

        const logEntry = document.createElement("p");
        logEntry.innerText = `✅ Task completed at ${new Date().toLocaleTimeString()}`;
        logEntry.classList.add("text-green-600", "font-semibold", "mt-2");
        activityLog.appendChild(logEntry);

        // Modal দেখানো
        modal.showModal();

        // Disable the button after click
        event.target.disabled = true;
        event.target.classList.add("bg-gray-400", "cursor-not-allowed");
    }
});

// Modal বন্ধ করার ইভেন্ট
document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("success-modal").close();
});

// Clear History Button functionality
document.getElementById("clear-history-button").addEventListener("click", function () {
    // Get the container that holds the activity log
    const activityLogContainer = document.getElementById("activity-log");

    // Clear the content inside the activity log container
    activityLogContainer.innerHTML = "";

    // Optionally, you can add a message saying the log was cleared
    const clearedMessage = document.createElement("p");
    clearedMessage.innerText = "Activity log has been cleared.";
    clearedMessage.classList.add("text-center", "text-red-600", "font-semibold");
    activityLogContainer.appendChild(clearedMessage);
});
