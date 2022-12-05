import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Table({contacts}) {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // search
  const searchFormList = (contact) => contact.name.includes(search)

  let filterData = []
  if (filter === 'all'){
    filterData = search ?  contacts.filter(searchFormList) : contacts
  } else {
    filterData = contacts.filter(item => item.group === filter && searchFormList(item))
  }

  return (
    <div>
      <div>
        Filter: 
        <select name="filter" onChange={handleFilterChange}>
          <option value="all">all</option>
          <option value="">none</option>
          <option value="home">home</option>
          <option value="office">office</option>
        </select>
        <input type="serch" placeholder='search' onChange={handleSearch} value={search}/>
      </div>
        {
            filterData.map((item, index) => (
                <p key={index}>{item.name} ----- {item.group}</p>
            ))
        }
    </div>
  )
}
