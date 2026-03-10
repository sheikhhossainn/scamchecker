import { useState } from 'react'       // useState lets us track the typed value
import { Search } from 'lucide-react';

function SearchInput({ size, color, strokeWidth }) {

    // 'query' = what the user has typed
    // 'setQuery' = function to update it
    const [query, setQuery] = useState('')  // starts as empty string

    function handleSubmit(e) {
        e.preventDefault()          // stops the browser from refreshing the page
        console.log('Searching for:', query)  // we'll do something real here later
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-box">

                {/* Icon on the left */}
                <Search size={size} color={color} strokeWidth={strokeWidth} />

                {/* The text input — 'controlled' by React state */}
                <input
                    type="text"
                    placeholder="Search business name, website or store..."
                    value={query}                           // React controls the displayed value
                    onChange={(e) => setQuery(e.target.value)}  // updates state on every keystroke
                />

                {/* Submit button */}
                <button type="submit">Search</button>

            </div>
        </form>
    )
}

export default SearchInput