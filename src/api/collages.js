// Get all Collages
export const getAllCollages = async () => {
    const response = await fetch(`http://localhost:5000/collages`)
    const data = await response.json()
    return data
}

// Get single collage
export const getCollage = async id => {
    const response = await fetch(`http://localhost:5000/collage/${id}`)
    const data = await response.json()
    return data
  }
  