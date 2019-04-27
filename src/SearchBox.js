import React from 'react'

const SearchBox = ({searchField , onSearch}) => {
    return ( 
        <div className='pa2'>
            <input onChange= {onSearch} className='pa3 ba bg-gold' type='search' />
        </div>
    );
}

export default SearchBox ;