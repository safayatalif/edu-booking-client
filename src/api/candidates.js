export const addCandidate = async candidateData => {
    const response = await fetch(`http://localhost:5000/candidate`, {
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
    const response = await fetch(`http://localhost:5000/candidates/${email}`)
    const data = await response.json()
    return data
}

