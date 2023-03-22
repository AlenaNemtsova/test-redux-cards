
export const getFilms = (films) => ({ type: 'GET_FILMS', payload: films })
export const deleteFilm = (id) => ({ type: 'DELETE_FILM', payload: { id } })