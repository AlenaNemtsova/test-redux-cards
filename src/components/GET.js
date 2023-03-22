class GET {
    static async getFilms() {
        try {
            const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'bff8fce2-f0f3-4f18-b63d-699557701b34',
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            return data.films;
        }
        catch (e) {
            console.error(e)
        }
    }
}
export default GET