import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sneakerService from '../../services/sneakerService'
import './NewSneaker.css'  // Make sure you create this CSS file for styling

const NewSneaker = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    colorway: '',
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const { brand, model, size, colorway } = formData

    if (!brand || !model || !size || !colorway) {
      setError('All fields are required')
      return
    }

    try {
      await sneakerService.createSneaker(formData)
      navigate('/sneakers')
    } catch (error) {
      console.error('Error adding sneaker:', error)
      setError('Failed to add sneaker. Please try again.')
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">New Sneaker</h1>
      <form className="sneaker-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            id="brand"
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            id="model"
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            id="size"
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="colorway">Colorway:</label>
          <input
            id="colorway"
            type="text"
            name="colorway"
            value={formData.colorway}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-button">Create Sneaker</button>
      </form>
    </div>
  )
}

export default NewSneaker
