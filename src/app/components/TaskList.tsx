"use client";

import { useState } from "react";
import Image from "next/image";
import Task from "./Task";

export default function TaskList() {
    const [tasks, setTasks] = useState([{ id: 1, text: "", completed: false }]);

    const addTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: tasks.length + 1, text: "", completed: false },
        ]);
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

    const updateTaskText = (taskId: number, newText: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task,
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
                <hr
                    style={{
                        height: "2px",
                        borderWidth: 0,
                        color: "gray",
                        backgroundColor: "gray",
                    }}
                />
                <tbody>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onToggleCompletion={toggleTaskCompletion}
                            onUpdateText={updateTaskText}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
