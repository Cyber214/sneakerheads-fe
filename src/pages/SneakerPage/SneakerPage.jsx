// src/pages/SneakerDetail/SneakerDetail.jsx

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sneakerService from '../../services/sneakerService'
import './SneakerPage.css'
import { NavLink } from "react-router-dom"

const SneakerPage = () => {
  const { sneakerId } = useParams()
  const [sneaker, setSneaker] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await sneakerService.getSneakerDetail(sneakerId)
      setSneaker(data)
    }

    fetchDetails()
  }, [sneakerId])

  const formatDate = (timestamp) => {
    return timestamp.slice(0, 10) // Extracts 'YYYY-MM-DD'
  }

  return (
    <div className="SneakerPage">
      {sneaker ? (
        <>
          <div className="SneakerHeader">
            <h1>{sneaker.brand}</h1>
            <h2>{sneaker.model}</h2>
          </div>
          <div className="SneakerInfo">
            <p><strong>Size:</strong> {sneaker.size}</p>
            <p><strong>Colorway:</strong> {sneaker.colorway}</p>
            <p><strong>Posted at:</strong> {formatDate(sneaker.posted_at)}</p>
          </div>
        </>
      ) : (
        <p>Loading Sneaker Details...</p>
      )}
      <NavLink to='/sneakers'><button id="back-btn">Back</button></NavLink>
      <NavLink to={`/sneakers/${sneakerId}/update`}><button id="edit-btn">Edit</button></NavLink>
    </div>
  )
}

export default SneakerPage
