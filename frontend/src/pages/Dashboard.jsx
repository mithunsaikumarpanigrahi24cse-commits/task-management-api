import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import StatsCards from '../components/StatsCards'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import FilterBar from '../components/FilterBar'
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from '../services/taskService'
import '../styles/Dashboard.css'

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Tasks' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'high', label: 'High Priority' },
]

const normalizePriority = (priority) => (priority || '').toString().trim().toLowerCase()
const normalizeCompleted = (value) => value === true || value === 'true' || value === 1 || value === '1'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [searchText, setSearchText] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedTask, setSelectedTask] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTasks() {
      setLoading(true)
      setError('')
      try {
        const data = await fetchTasks()
        setTasks(Array.isArray(data) ? data : [])
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem('token')
          window.location.href = '/login'
          return
        }
        setError('Unable to load tasks. Please check your backend connection.')
      } finally {
        setLoading(false)
      }
    }
    loadTasks()
  }, [])

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => normalizeCompleted(task.completed)).length
    const pending = tasks.filter((task) => !normalizeCompleted(task.completed)).length
    const highPriority = tasks.filter(
      (task) => normalizePriority(task.priority) === 'high'
    ).length

    return {
      total: tasks.length,
      completed,
      pending,
      highPriority,
    }
  }, [tasks])

  const filteredTasks = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase()

    return tasks.filter((task) => {
      const title = (task.title || '').toString().toLowerCase()
      const description = (task.description || '').toString().toLowerCase()
      const priority = normalizePriority(task.priority)
      const dueDateText = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : ''
      const completed = normalizeCompleted(task.completed)

      const matchesSearch =
        title.includes(normalizedSearch) ||
        description.includes(normalizedSearch) ||
        priority.includes(normalizedSearch) ||
        dueDateText.toLowerCase().includes(normalizedSearch)

      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'completed' && completed) ||
        (activeFilter === 'pending' && !completed) ||
        (activeFilter === 'high' && priority === 'high')

      return matchesSearch && matchesFilter
    })
  }, [tasks, searchText, activeFilter])

  async function handleAddOrUpdateTask(taskData) {
    setLoading(true)
    setError('')

    try {
      if (taskData._id) {
        const updatedTask = await updateTask(taskData._id, taskData)
        setTasks((current) =>
          current.map((task) => (task._id === updatedTask._id ? updatedTask : task))
        )
      } else {
        const newTask = await createTask(taskData)
        setTasks((current) => [newTask, ...current])
      }
      setSelectedTask(null)
    } catch (err) {
      setError('Unable to save task. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleRemoveTask(taskId) {
    setLoading(true)
    setError('')

    try {
      await deleteTask(taskId)
      setTasks((current) => current.filter((task) => task._id !== taskId))
      if (selectedTask && selectedTask._id === taskId) {
        setSelectedTask(null)
      }
    } catch (err) {
      setError('Unable to delete task. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleStatus(task) {
    setLoading(true)
    setError('')

    try {
      const updatedTask = await toggleTaskStatus(task._id, !normalizeCompleted(task.completed))
      setTasks((current) =>
        current.map((item) => (item._id === updatedTask._id ? updatedTask : item))
      )
    } catch (err) {
      setError('Unable to update task status. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleEditTask(task) {
    setSelectedTask(task)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleCancelEdit() {
    setSelectedTask(null)
  }

  const activeFilterLabel =
    FILTER_OPTIONS.find((option) => option.value === activeFilter)?.label || 'All Tasks'

  return (
    <main className="dashboard-shell">
      <div className="dashboard-inner">
        <Header
          projectName="TaskFlow"
          searchValue={searchText}
          onSearchChange={setSearchText}
        />

        <section className="dashboard-hero">
          <div className="hero-copy-block">
            <span className="eyebrow">Modern task management</span>
            <h1>TaskFlow lets you organize work with clarity and speed.</h1>
            <p>
              Track every task, filter by status, and manage priorities with a clean responsive
              dashboard. Designed for mobile and laptop-first workflows.
            </p>
          </div>

          <div className="hero-cards">
            <StatsCards stats={stats} />
          </div>
        </section>

        <section className="dashboard-body">
          <aside className="dashboard-sidebar">
            <div className="panel-card">
              <div className="panel-title">Quick filters</div>
              <FilterBar
                filters={FILTER_OPTIONS}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>

            <div className="panel-card sidebar-summary">
              <div className="panel-title">Active filter</div>
              <p>{activeFilterLabel}</p>
              <div className="sidebar-metrics">
                <div>
                  <span>{stats.completed}</span>
                  <small>Completed</small>
                </div>
                <div>
                  <span>{stats.pending}</span>
                  <small>Pending</small>
                </div>
                <div>
                  <span>{stats.highPriority}</span>
                  <small>High</small>
                </div>
              </div>
            </div>
          </aside>

          <section className="dashboard-main">
            <TaskForm
              key={selectedTask ? selectedTask._id : 'new-task'}
              selectedTask={selectedTask}
              onSubmit={handleAddOrUpdateTask}
              onCancel={handleCancelEdit}
              isLoading={loading}
            />

            {error && <div className="dashboard-alert">{error}</div>}

            <TaskList
              tasks={filteredTasks}
              loading={loading}
              onEdit={handleEditTask}
              onDelete={handleRemoveTask}
              onToggleStatus={handleToggleStatus}
            />
          </section>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
