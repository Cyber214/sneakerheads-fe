const apiUrl = 'http://3.23.128.176:8000'

const getSneakers = async () => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/`)
    if (!res.ok) {
      throw new Error('Error getting all sneakers')
    }
    return await res.json()
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }
}

const createSneaker = async (sneaker) => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/new/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sneaker),
    })
    if (!res.ok) {
      throw new Error('Error adding sneaker')
    }
    return await res.json()
  } catch (error) {
    throw new Error(`Error adding sneaker: ${error.message}`)
  }
}

const getSneakerDetail = async (sneakerId) => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/${sneakerId}/`)
    if (!res.ok) {
      throw new Error('Error getting a sneaker')
    }
    return await res.json()
  } catch (error) {
    console.error('Error fetching sneaker details:', error)
    throw error
  }
}

export const updateSneaker = async (sneakerId, sneaker) => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/${sneakerId}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sneaker),
    })
    if (!res.ok) {
      throw new Error('Error getting a sneaker')
    }
    return await res.json()
  } catch (error) {
    console.error('Error updating sneaker detail:', error)
    throw error
  }
}

export const deleteSneaker = async (sneakerId) => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/${sneakerId}/delete/`, {
      method: 'DELETE',
    })

    if (res.ok) { // Check if response status is OK
      // Handle empty responses (e.g., HTTP 204 No Content)
      if (res.status === 204) {
        return null // No content, successful deletion
      }
      
      // Try to parse JSON only if the response has a JSON content type
      const contentType = res.headers.get('Content-Type')
      if (contentType && contentType.includes('application/json')) {
        return await res.json() // Parse and return JSON data
      }

      // If it's not JSON, just return the text response
      const text = await res.text()
      return text
    } else {
      throw new Error(`Server error: ${res.status} ${res.statusText}`)
    }
  } catch (error) {
    console.error('Error deleting sneaker:', error)
    throw error
  }
}


export default {
  getSneakers,
  createSneaker,
  getSneakerDetail,
  deleteSneaker,
}