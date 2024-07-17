import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateSneaker } from '../../services/sneakerService'

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
    <div>
      <h2>Edit Sneaker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Colorway:</label>
          <input
            type="text"
            name="colorway"
            value={formData.colorway}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Sneaker</button>
      </form>
    </div>
  )
}

export default EditSneaker
