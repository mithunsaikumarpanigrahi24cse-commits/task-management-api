import '../styles/Dashboard.css'

function StatsCards({ stats }) {
  return (
    <section className="stats-grid" id="stats">
      <article className="stat-card">
        <p className="stat-label">Total Tasks</p>
        <h2>{stats.total}</h2>
      </article>

      <article className="stat-card">
        <p className="stat-label">Completed</p>
        <h2>{stats.completed}</h2>
      </article>

      <article className="stat-card">
        <p className="stat-label">Pending</p>
        <h2>{stats.pending}</h2>
      </article>

      <article className="stat-card">
        <p className="stat-label">High Priority</p>
        <h2>{stats.highPriority}</h2>
      </article>
    </section>
  )
}

export default StatsCards
