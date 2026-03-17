from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory database (simple for project)
tasks = []
task_id_counter = 1


@app.route('/')
def home():
    return "Agile Sprint Dashboard Running 🚀"


# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)


# Add a task
@app.route('/tasks', methods=['POST'])
def add_task():
    global task_id_counter

    data = request.get_json()
    task = {
        "id": task_id_counter,
        "title": data.get("title"),
        "status": "To Do"
    }

    tasks.append(task)
    task_id_counter += 1

    return jsonify(task), 201


# Update task status
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.get_json()

    for task in tasks:
        if task["id"] == task_id:
            task["status"] = data.get("status", task["status"])
            return jsonify(task)

    return jsonify({"error": "Task not found"}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)