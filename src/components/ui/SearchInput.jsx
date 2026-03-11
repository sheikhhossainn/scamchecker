import { useState } from 'react'
import { Search } from 'lucide-react'

function SearchInput({ size, color, strokeWidth }) {

    // 'query' = what the user has typed
    // 'setQuery' = function to update it
    const [query, setQuery] = useState('')  // starts as empty string

    function handleSubmit(e) {
        e.preventDefault()          // stops the browser from refreshing the page
        console.log('Searching for:', query)  // we'll do something real here later
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center">

            {/* The pill-shaped search box wrapper */}
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md border border-gray-200 max-w-xl w-full">

                {/* Icon on the left */}
                <Search size={size} color={color} strokeWidth={strokeWidth} className="shrink-0 text-gray-400" />

                {/* The text input */}
                <input
                    type="text"
                    placeholder="Search business name, or store name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400 text-sm"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-[#0071e3] hover:bg-[#005bbf] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200 shrink-0"
                >
                    Check Now
                </button>

            </div>

        </form>
    )
}

export default SearchInput