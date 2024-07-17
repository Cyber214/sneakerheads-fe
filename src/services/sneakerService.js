const apiUrl = 'http://localhost:8000'

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
    return await res.json();
  } catch (error) {
    throw new Error(`Error adding sneaker: ${error.message}`)
  }
}

export default {
  getSneakers,
  createSneaker,
}