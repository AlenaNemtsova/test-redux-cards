class DEL {
    static async delFilms(id) {
        try {
            await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1/${id}/delete`, {
                method: 'DEL',
                headers: {
                    'X-API-KEY': 'bff8fce2-f0f3-4f18-b63d-699557701b34',
                    'Content-Type': 'application/json',
                },
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}
export default DEL