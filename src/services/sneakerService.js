const apiUrl = 'http://3.140.246.223:8000'

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
    console.error('Error fetching sneaker detail:', error)
    throw error
  }
}

export default {
  getSneakers,
  createSneaker,
  getSneakerDetail,
}