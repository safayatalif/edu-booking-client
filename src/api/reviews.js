export const addReview = async reviewData => {
    const response = await fetch(`https://edu-bookings-server.vercel.app/review`, {
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
    const response = await fetch(`https://edu-bookings-server.vercel.app/reviews`)
    const data = await response.json()
    return data
}