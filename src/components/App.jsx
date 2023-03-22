import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from './redux/actions';
import { delFilms } from './redux/actions';
import GET from './GET';
import DEL from './DEL';
import Card from './Card/Card';
import '../style/App.css';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function App() {

  const films = useSelector(state => state);
  const dispatch = useDispatch() //функция-обертка для действий, обычно сохраняют в переменную dispatch

  useEffect(() => {
    async function get() {
      const data = await GET.getFilms()
      console.log(data);
      dispatch(getFilms(data))
    }
    get()
  }, [])

  // function deleteFilm(id) {
  //   console.log('delete film');
  //   console.log(id);
  //   films.filter(film = film.id !== id)
  // }


  if (films.length < 1) {
    return <h1>Loading</h1>
  }

  return (
    <div className="App">
      <h1>Лучшие фильмы в 2023</h1>
      <h2>Избранные</h2>
      <button className='show-btn'>показать</button>
      {/* <label><BsToggleOff className='show-btn-toggle' /></label> */}

      <div className='cards-wrapper'>
        {films.map((item, index) => (
          <Card key={index} item={item}>
          </Card>
        ))}
      </div>
    </div >
  );
}

export default App;
