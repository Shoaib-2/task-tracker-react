import { Circle, CheckCircle } from "lucide-react";

const TaskItem = ({ task, onToggleComplete }) => {
  const { id, title, completed } = task;

  const statusText = completed ? "Completed" : "Pending";
  const statusColor = completed ? "text-green-600" : "text-yellow-600";

  return (
    <li className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
      <div className="flex flex-col">
        <span className={completed ? "line-through text-gray-400" : "text-gray-800"}>
          {title}
        </span>
        <span className={`text-sm ${statusColor}`}>{statusText}</span>
      </div>

      <button
        onClick={() => onToggleComplete(id)}
        disabled={completed}
        className={`p-2 rounded-md ${
          completed
            ? "text-green-600 cursor-default"
            : "text-gray-400 hover:text-green-600 hover:bg-gray-100"
        }`}
        aria-label={completed ? "Task completed" : "Mark as completed"}
      >
        {completed ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
    </li>
  );
};

export default TaskItem;
