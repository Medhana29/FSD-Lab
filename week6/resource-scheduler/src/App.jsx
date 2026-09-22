
import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [developer, setDeveloper] = useState("");
  const [resource, setResource] = useState("");
  const [time, setTime] = useState("");
  const [schedule, setSchedule] = useState([]);

  const addSchedule = () => {
    if (task === "" || developer === "" || resource === "" || time === "") {
      alert("Please fill all fields");
      return;
    }

    const newSchedule = {
      id: Date.now(),
      task,
      developer,
      resource,
      time
    };

    setSchedule([...schedule, newSchedule]);

    setTask("");
    setDeveloper("");
    setResource("");
    setTime("");
  };

  const deleteSchedule = (id) => {
    setSchedule(schedule.filter((item) => item.id !== id));
  };

  return (
    <div className="container">

      <h1>Software Resource Scheduler</h1>

      <div className="form">

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
        >
          <option value="">Select Developer</option>
          <option value="Riya">Riya</option>
          <option value="Aman">Aman</option>
          <option value="Charlie">Charlie</option>
        </select>

        <input
          type="text"
          placeholder="Enter resource"
          value={resource}
          onChange={(e) => setResource(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={addSchedule}>
          Schedule Task
        </button>

      </div>

      <h2>Scheduled Resources</h2>

      {schedule.length === 0 ? (
        <p>No tasks scheduled.</p>
      ) : (
        schedule.map((item) => (
          <div className="card" key={item.id}>

            <h3>{item.task}</h3>

            <p>
              <b>Developer:</b> {item.developer}
            </p>

            <p>
              <b>Resource:</b> {item.resource}
            </p>

            <p>
              <b>Time:</b> {item.time}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteSchedule(item.id)}
            >
              Delete
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default App;

