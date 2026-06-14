import TaskCard from './TaskCard'
import '../styles/TaskCard.css'

function TaskList({ tasks, loading, onEdit, onDelete, onToggleStatus }) {
  if (loading) {
    return (
      <div className="task-state-panel">
        <div className="loader" />
        <p>Loading tasks...</p>
      </div>
    )
  }

  if (!tasks.length) {
    return (
      <div className="task-state-panel">
        <p>No tasks found. Add a new task or adjust the filter.</p>
      </div>
    )
  }

  return (
    <section className="task-list" id="tasks">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </section>
  )
}

export default TaskList
