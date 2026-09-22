
import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [employee, setEmployee] = useState("");
  const [tasks, setTasks] = useState([]);

  const employees = ["Riya", "Aman", "Chaitra", "David"];

  const assignTask = () => {
    if (task === "" || employee === "") {
      alert("Please enter task and select employee");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      employee: employee,
      status: "Pending"
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setEmployee("");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, status: "Completed" }
          : item
      )
    );
  };

  return (
    <div className="container">
      <h1>Manager Task Assignment</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        >
          <option value="">Select Employee</option>

          {employees.map((emp) => (
            <option key={emp} value={emp}>
              {emp}
            </option>
          ))}
        </select>

        <button onClick={assignTask}>
          Assign Task
        </button>
      </div>

      <h2>Assigned Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <div className="task-list">
          {tasks.map((item) => (
            <div className="task-card" key={item.id}>
              <h3>{item.task}</h3>

              <p>
                <b>Employee:</b> {item.employee}
              </p>

              <p>
                <b>Status:</b> {item.status}
              </p>

              {item.status === "Pending" && (
                <button onClick={() => completeTask(item.id)}>
                  Mark Completed
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

