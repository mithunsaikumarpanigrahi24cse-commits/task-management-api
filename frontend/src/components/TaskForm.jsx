import { useEffect, useState } from 'react'
import '../styles/TaskForm.css'

const PRIORITY_OPTIONS = ['Low', 'Medium', 'High']

function TaskForm({ selectedTask, onSubmit, onCancel, isLoading }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title || '')
      setDescription(selectedTask.description || '')
      setPriority(selectedTask.priority || 'Medium')
      setDueDate(selectedTask.dueDate ? selectedTask.dueDate.slice(0, 10) : '')
    } else {
      setTitle('')
      setDescription('')
      setPriority('Medium')
      setDueDate('')
    }
  }, [selectedTask])

  function handleSubmit(event) {
    event.preventDefault()
    if (!title.trim() || !description.trim() || !dueDate) {
      return
    }

    const payload = {
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      completed: selectedTask ? selectedTask.completed : false,
    }

    if (selectedTask?._id) {
      payload._id = selectedTask._id
    }

    onSubmit(payload)
  }

  return (
    <section className="task-form-panel" id="create">
      <div className="form-header">
        <div>
          <p className="eyebrow">Create or edit a task</p>
          <h2>{selectedTask ? 'Update task' : 'New task'}</h2>
        </div>
        {selectedTask && (
          <button type="button" className="text-button" onClick={onCancel}>
            Cancel edit
          </button>
        )}
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form-row">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Task title"
              required
            />
          </label>

          <label>
            Priority
            <select value={priority} onChange={(event) => setPriority(event.target.value)}>
              {PRIORITY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the task in a few sentences"
            rows="4"
            required
          />
        </label>

        <label>
          Due date
          <input
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            required
          />
        </label>

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Saving...' : selectedTask ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </section>
  )
}

export default TaskForm
