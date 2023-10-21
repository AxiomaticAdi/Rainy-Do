"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Image from "next/image";
import Task from "./Task";

export default function TaskList() {
    const [tasks, setTasks] = useState([{ id: 1, text: "", completed: false }]);
    const [isHovered, setIsHovered] = useState(false);

    const [animationParent] = useAutoAnimate();

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
        <div
            className="px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="flex min-w-[300px] flex-col gap-4 rounded-2xl bg-primary bg-opacity-0 transition duration-1000 hover:bg-opacity-80 hover:text-base-content hover:transition-all"
                ref={animationParent}
            >
                <div className="flex items-center justify-center gap-4 pt-2 text-3xl">
                    <span>To Do</span>
                    <button
                        className="btn btn-circle btn-ghost"
                        onClick={addTask}
                    >
                        <Image
                            src={"/add-circle.svg"}
                            alt={"add task"}
                            width={25}
                            height={25}
                        />
                    </button>
                </div>
                <ul className="pb-4 pl-4 pr-6" ref={animationParent}>
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
            <div className="flex items-center justify-center pb-4">
                <button
                    className="btn btn-ghost"
                    onClick={clearCompletedTasks}
                    ref={animationParent}
                    style={{ visibility: isHovered ? "visible" : "hidden" }}
                >
                    <span>Clear completed</span>
                    <Image
                        src={"/trash.svg"}
                        alt={"clear completed"}
                        width={25}
                        height={25}
                    />
                </button>
            </div>
        </div>
    );
}
