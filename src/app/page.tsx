import AudioPlayer from "./components/AudioPlayer";
import PomodoroLauncher from "./components/PomodoroLauncher";
import TaskLauncher from "./components/TaskLauncher";
import TaskList from "./components/TaskList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <TaskLauncher />
                <AudioPlayer />
                <PomodoroLauncher />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
                <TaskList />
            </div>
        </main>
    );
}
