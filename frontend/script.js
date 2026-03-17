const API_URL = "http://localhost:5000/tasks";

window.onload = fetchTasks;

function fetchTasks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(tasks => {
            document.getElementById("todo").innerHTML = "";
            document.getElementById("progress").innerHTML = "";
            document.getElementById("done").innerHTML = "";

            tasks.forEach(task => {
                const div = document.createElement("div");
                div.className = "task";

                div.innerHTML = `
                    <strong>${task.title}</strong><br>
                    <button onclick="moveTask(${task.id}, 'In Progress')">Start</button>
                    <button onclick="moveTask(${task.id}, 'Done')">Done</button>
                    <button onclick="editTask(${task.id}, '${task.title}')">Edit</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;

                if (task.status === "To Do") {
                    document.getElementById("todo").appendChild(div);
                } else if (task.status === "In Progress") {
                    document.getElementById("progress").appendChild(div);
                } else {
                    document.getElementById("done").appendChild(div);
                }
            });
        });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const title = input.value;

    if (!title) return;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    }).then(() => {
        input.value = "";
        fetchTasks();
    });
}

function moveTask(id, status) {
    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
    }).then(fetchTasks);
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(fetchTasks);
}

function editTask(id, oldTitle) {
    const newTitle = prompt("Edit task:", oldTitle);
    if (!newTitle) return;

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle })
    }).then(fetchTasks);
}