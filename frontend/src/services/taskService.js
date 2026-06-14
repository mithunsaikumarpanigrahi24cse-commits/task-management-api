import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchTasks() {
  const response = await apiClient.get('/tasks')
  return response.data
}

export async function createTask(task) {
  const response = await apiClient.post('/tasks', task)
  return response.data
}

export async function updateTask(id, task) {
  const response = await apiClient.put(`/tasks/${id}`, task)
  return response.data
}

export async function deleteTask(id) {
  const response = await apiClient.delete(`/tasks/${id}`)
  return response.data
}

export async function toggleTaskStatus(id, completed) {
  const response = await apiClient.put(`/tasks/${id}`, { completed })
  return response.data
}
