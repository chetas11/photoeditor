import React from 'react'

export default function Sidebar({name, active, handleClick}) {
    return (
        <div className="sidebar mt-3 text-center">
            <button onClick={handleClick} className={`sidebar-item btn btn-lg ${ active ? 'active' : '' }`}>{name}
            </button>
        </div>
    )
}
