import React from 'react'

export default function SearchBar() {
  return (
    <div className="search-bar">
      <label htmlFor="search-input" />
      <input type="text" />
      <button type="submit">
        Search
      </button>
    </div>
  )
}
