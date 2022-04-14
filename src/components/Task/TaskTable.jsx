import { useEffect, useState } from "react";

// Components
import TaskForm from "./TaskForm";
import TaskRow from "./TaskRow";

const initialState = [
    { id: 1, name: "Aprender programación", priority: 3, done: false },
    { id: 2, name: "Practicar sentencias SQL", priority: 2, done: false },
    { id: 3, name: "Reposar la espalda", priority: 2, done: true },
    { id: 4, name: "Realizar compras semanales", priority: 1, done: false }
];

const TaskTable = () => {
    const headers = ["#", "Task", "Priority", "Done?"];
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // console.log("Iniciando!");
        setTasks(initialState);
    }, []);

    const addNewTask = (newTaskName) => {
        setTasks([...tasks, { id: tasks.length + 1, name: newTaskName, priority: 1, done: false }]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
    };

    const headerStyle = { textAlign: "center", verticalAlign: "middle" };

    return (
        <div className="row">
            <div className="col-md-4">
                <TaskForm addNewTask={addNewTask} />
            </div>
            <div className="col-md-8">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th style={headerStyle} key={index}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <TaskRow key={task.id} index={index} task={task} toggleTask={toggleTask} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;
