export const getAlbums = () => {
    return (
        fetch('https://tune-spoon-db-v1.herokuapp.com/albums')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Something went wrong')
            }
        })
    )
}