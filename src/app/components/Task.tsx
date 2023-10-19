"use client";

interface TaskProps {
    task: {
        id: number;
        text: string;
        completed: boolean;
    };
    onToggleCompletion: (taskId: number) => void;
}

export default function Task({ task, onToggleCompletion }: TaskProps) {
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
                ></input>
            </td>
        </tr>
    );
}
