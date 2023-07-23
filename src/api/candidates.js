export const addCandidate = async candidateData => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/candidate`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(candidateData),
    })

    const data = await response.json()
    return data
}

// Get all my collages for email
export const getCollagesByEmail = async email => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/candidates/${email}`)
    const data = await response.json()
    return data
}

