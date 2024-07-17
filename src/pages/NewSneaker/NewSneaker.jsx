import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sneakerService from '../../services/sneakerService'

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
    <div>
      <h1>New Sneaker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Colorway:</label>
          <input
            type="text"
            name="colorway"
            value={formData.colorway}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Create Sneaker</button>
      </form>
    </div>
  )
}

export default NewSneaker
