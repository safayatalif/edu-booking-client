export const addReview = async reviewData => {
    const response = await fetch(`http://localhost:5000/review`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    })

    const data = await response.json()
    return data
}

// Get all reviews
export const getAllReview = async () => {
    const response = await fetch(`http://localhost:5000/reviews`)
    const data = await response.json()
    return data
}