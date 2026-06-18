import api from './api'

export async function fetchTasks() {
  const response = await api.get('/tasks')
  return response.data
}

export async function createTask(task) {
  const response = await api.post('/tasks', task)
  return response.data
}

export async function updateTask(id, task) {
  const response = await api.put(`/tasks/${id}`, task)
  return response.data
}

export async function deleteTask(id) {
  const response = await api.delete(`/tasks/${id}`)
  return response.data
}

export async function toggleTaskStatus(id, completed) {
  const response = await api.put(`/tasks/${id}`, { completed })
  return response.data
}
