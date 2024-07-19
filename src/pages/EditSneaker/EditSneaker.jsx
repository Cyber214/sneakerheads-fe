import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateSneaker } from '../../services/sneakerService'
import './EditSneaker.css'

const EditSneaker = () => {
  const { sneakerId } = useParams()
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    colorway: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateSneaker(sneakerId, formData)
      navigate(`/sneakers/${sneakerId}`)
    } catch (error) {
      console.error('Failed to update sneaker:', error)
    }
  }

  return (
    <div className="edit-sneaker-container">
      <h2>Edit Sneaker</h2>
      <form onSubmit={handleSubmit} className="edit-sneaker-form">
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="colorway">Colorway:</label>
          <input
            type="text"
            id="colorway"
            name="colorway"
            value={formData.colorway}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="update-button">Update Sneaker</button>
      </form>
    </div>
  )
}

export default EditSneaker
