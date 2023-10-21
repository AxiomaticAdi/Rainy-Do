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

    const clearCompletedTasks = () => {
        const newTasks = tasks.filter((task) => !task.completed);
        setTasks(newTasks);
    };

    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-primary bg-opacity-0 hover:bg-opacity-80 hover:text-base-content">
            <div className="flex items-center justify-center gap-4 pt-2 text-3xl">
                <span>To Do</span>
                <button className="btn btn-circle btn-ghost" onClick={addTask}>
                    <Image
                        src={"/add-circle.svg"}
                        alt={"add task"}
                        width={25}
                        height={25}
                    />
                </button>
                <button
                    className="btn btn-circle btn-ghost"
                    onClick={clearCompletedTasks}
                >
                    <Image
                        src={"/trash.svg"}
                        alt={"clear completed"}
                        width={25}
                        height={25}
                    />
                </button>
            </div>
            <ul className="pb-4 pl-4 pr-6">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggleCompletion={toggleTaskCompletion}
                        onUpdateText={updateTaskText}
                    />
                ))}
            </ul>
        </div>
    );
}
