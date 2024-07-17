// npm modules
import { useState, useEffect } from 'react';
import sneakerService from '../../services/sneakerService';
import { NavLink } from "react-router-dom"

//css
import './SneakerList.css'

const SneakerList = () => {
  const [sneakers, setSneakerList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const sneakerData = await sneakerService.getSneakers()
      setSneakerList(sneakerData.sneakers)
    }

    fetchData()
  }, [])

  if (!sneakers.length) return <h1 id="header" >Loading Sneakers...</h1>

  return (
    <>
      <h1 id="header" >Sneakers List</h1>
      <div className='SneakerList' >
        {sneakers.map((sneaker) => (
          <NavLink key={sneaker.id} to={`/sneakers/${sneaker.id}`}>
            <div className='SneakerCard'>
              <h3>{sneaker.brand}</h3>
              <h4>{sneaker.model}</h4>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default SneakerList