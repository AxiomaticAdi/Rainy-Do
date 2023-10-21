"use client";

import { useState } from "react";

import AudioPlayer from "./components/AudioPlayer";
import PomodoroLauncher from "./components/PomodoroLauncher";
import TaskLauncher from "./components/TaskLauncher";
import TaskList from "./components/TaskList";
import BackgroundSwap from "./components/BackgroundSwap";

export default function Home() {
    const [isTasksVisible, setIsTasksVisible] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            {showVideo ? (
                <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    poster="https://images.pexels.com/photos/1906932/pexels-photo-1906932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                >
                    <source src="rain_video2.mp4" type="video/mp4" />
                </video>
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://images.pexels.com/photos/1906932/pexels-photo-1906932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                        zIndex: -1,
                    }}
                ></div>
            )}
            <main className="flex min-h-screen flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <TaskLauncher
                        onToggle={() => setIsTasksVisible(!isTasksVisible)}
                    />
                    <AudioPlayer />
                    <PomodoroLauncher />
                    <BackgroundSwap onToggle={() => setShowVideo(!showVideo)} />
                </div>
                <div
                    className="flex flex-col items-center justify-center"
                    style={{
                        visibility: isTasksVisible ? "visible" : "hidden",
                    }}
                >
                    <TaskList />
                </div>
            </main>
        </>
    );
}
