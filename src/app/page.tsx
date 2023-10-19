import AudioPlayer from "./components/AudioPlayer";
import PomodoroLauncher from "./components/PomodoroLauncher";
import TaskLauncher from "./components/TaskLauncher";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-wrap items-center justify-center">
            <TaskLauncher />
            <AudioPlayer />
            <PomodoroLauncher />
        </main>
    );
}
