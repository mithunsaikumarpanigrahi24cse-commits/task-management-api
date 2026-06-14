import React, { useEffect, useState } from 'react'
import '../styles/Header.css'

function Header({ projectName, searchValue, onSearchChange }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-text">Display</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>

      <header className="dashboard-header">
        <div className="brand-block">
          <div className="brand-mark">TF</div>
          <div>
            <p className="brand-subtitle">Modern task workspace</p>
            <h1 className="brand-title">{projectName}</h1>
          </div>
        </div>

        <nav className="dashboard-nav">
          <a href="#tasks">Overview</a>
          <a href="#create">Create</a>
          <a href="#stats">Stats</a>
          <a href="#help">Support</a>
        </nav>

        <label className="search-field">
          <span className="search-label">Search tasks</span>
          <input
            type="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title, description, priority, or date"
          />
        </label>
      </header>
    </div>
  )
}

export default Header
