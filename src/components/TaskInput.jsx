import { Plus } from "lucide-react";

const TaskInput = ({ taskTitle, setTaskTitle, onAddTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedTitle = taskTitle.trim();
    
    if (!trimmedTitle) {
      return;
    }
    
    onAddTask(trimmedTitle);
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
      >
        <Plus size={18} />
        Add
      </button>
    </form>
  );
};

export default TaskInput;
