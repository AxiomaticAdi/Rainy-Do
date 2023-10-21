"use client";

import { useState } from "react";

import AudioPlayer from "./components/AudioPlayer";
import PomodoroLauncher from "./components/PomodoroLauncher";
import TaskLauncher from "./components/TaskLauncher";
import TaskList from "./components/TaskList";

export default function Home() {
    const [isTasksVisible, setIsTasksVisible] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <TaskLauncher
                    onToggle={() => setIsTasksVisible(!isTasksVisible)}
                />
                <AudioPlayer />
                <PomodoroLauncher />
            </div>
            <div
                className="flex flex-col items-center justify-center"
                style={{ visibility: isTasksVisible ? "visible" : "hidden" }}
            >
                <TaskList />
            </div>
        </main>
    );
}
