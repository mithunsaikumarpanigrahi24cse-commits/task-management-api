import '../styles/TaskCard.css'

function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
  const safePriority = (task?.priority || 'Low').toString()
  const priorityClass = safePriority.toLowerCase()
  const priorityLabel = safePriority.charAt(0).toUpperCase() + safePriority.slice(1)
  const dueDate = task?.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'
  const createdDate = new Date(task?.createdAt || task?.createdOn || Date.now()).toLocaleDateString()

  return (
    <article className="task-card">
      <div className="task-card-header">
        <div>
          <h3>{task?.title || 'Untitled task'}</h3>
          <span className={`priority-pill ${priorityClass}`}>{priorityLabel}</span>
        </div>
        <span className={`status-pill ${task?.completed ? 'completed' : 'pending'}`}>
          {task?.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-card-meta">
        <div>
          <span>Due</span>
          <strong>{dueDate}</strong>
        </div>
        <div>
          <span>Created</span>
          <strong>{createdDate}</strong>
        </div>
      </div>

      <div className="task-card-actions">
        <button type="button" className="secondary-button" onClick={() => onToggleStatus(task)}>
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button type="button" className="secondary-button" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button type="button" className="danger-button" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskCard
