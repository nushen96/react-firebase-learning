import { useState, useEffect } from "react";
import fire from "../fire";
import { useCollectionData } from "react-firebase-hooks/firestore";

const db = fire.firestore();

const Hero = ({ handleLogout }) => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  async function fetchTasks() {
    const tasksRef = db.collection("tasks");
    const fetchedTasks = await tasksRef.get();
    const newList = [];
    fetchedTasks.forEach((doc) => {
      const data = doc.data();
      const tempTask = data;
      tempTask.id = doc.id;
      newList.push(data);
    });
    setTasks(newList);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  const submitTask = () => {
      if (newTask !== "") {
        const newTaskRef = db.collection('tasks').doc()
        newTaskRef.set({
            value: newTask,
            creationDate: Date.now()
        })
      }
  }

  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="todoContainer">
        <div className="inputContainer">
          <input className="normalInput" type="text" placeholder="New task..." onChange={e => setNewTask(e.target.value)}></input>
          <button className="normalBtn" onClick={submitTask}>Add</button>
        </div>
        <ul className="tasksList">
          {tasks &&
            tasks.map((task) => {
              return (
                <li className="task" key={task.id}>
                  {task.value}
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
