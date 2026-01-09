import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete }) => {
  const hasTasks = tasks.length > 0;

  return (
    <div className="mt-6">
      {hasTasks ? (
        <ul className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
      )}
    </div>
  );
};

export default TaskList;
