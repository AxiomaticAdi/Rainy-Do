"use client";

import { useState } from "react";
import Image from "next/image";
import Task from "./Task";

// type tasks = [{ id: number; text: string }];

export default function TaskList() {
    const [tasks, setTasks] = useState([{ id: 1, text: "", completed: false }]);

    const addTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: tasks.length + 1, text: "", completed: false },
        ]);
    };

    const editTaskDescription = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        );
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        );
    };

    return (
        <div className="card bg-primary rounded-2xl opacity-40 shadow-xl hover:opacity-90">
            <table className="text-base-content table">
                <thead className="flex items-center justify-center gap-4 pt-2 text-3xl">
                    <span>To Do</span>
                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={addTask}
                    >
                        <Image
                            src={"/add-circle.svg"}
                            alt={"add task"}
                            width={25}
                            height={25}
                        />
                    </button>
                </thead>
                <div className="divider bg-base-100 my-0 py-0"></div>
                <tbody>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onToggleCompletion={toggleTaskCompletion}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
