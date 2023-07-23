// Get all Collages
export const getAllCollages = async () => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/collages`)
    const data = await response.json()
    return data
}

export const getCollageByText = async (searchText) => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/getCollageByText/${searchText}`)
    const data = await response.json()
    return data
}

// Get single collage
export const getCollage = async id => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/collage/${id}`)
    const data = await response.json()
    return data
}
