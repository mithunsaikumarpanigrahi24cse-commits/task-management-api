import '../styles/FilterBar.css'

function FilterBar({ filters, activeFilter, onFilterChange }) {
  const getFilterClass = (value) => {
    switch(value) {
      case 'completed': return 'filter-completed'
      case 'pending': return 'filter-pending'
      case 'high-priority': return 'filter-high'
      default: return 'filter-all'
    }
  }

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`filter-button ${getFilterClass(filter.value)} ${filter.value === activeFilter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
