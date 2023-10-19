"use client";

interface TaskProps {
    task: {
        id: number;
        text: string;
        completed: boolean;
    };
    onToggleCompletion: (taskId: number) => void;
    onUpdateText: (taskId: number, newText: string) => void;
}

export default function Task({
    task,
    onToggleCompletion,
    onUpdateText,
}: TaskProps) {
    return (
        <tr>
            <td className="ml-3 flex items-center gap-4">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleCompletion(task.id)}
                />
                <input
                    type="text"
                    placeholder="New task..."
                    value={task.text}
                    className="input input-ghost"
                    onChange={(e) => onUpdateText(task.id, e.target.value)}
                ></input>
            </td>
        </tr>
    );
}
