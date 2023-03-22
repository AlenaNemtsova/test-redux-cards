import React from 'react';
import { useState } from 'react';
import '../../style/Card.css';
import { BsBookmark, BsBookmarksFill } from 'react-icons/bs'

export default function Card({ item }) {
    const [favorite, setFavorite] = useState(false);

    function delFilm(id) {
        console.log(id);
    }

    function addToFav() {
        console.log('favorite film');
        setFavorite(!favorite);
    }

    return (
        <>
            <div className='card'>
                <div className='card__img'
                    style={{
                        background: `url(${item.posterUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                </div>
                <div className='card__name'>{item.nameRu}</div>
                <div className='fav-btn' onClick={addToFav}>
                    {
                        favorite ? <BsBookmarksFill className='favorite'></BsBookmarksFill> : <BsBookmark />
                    }
                </div>

                <button className='del-btn' onClick={() => delFilm(item.filmId)}>Удалить</button>



            </div>
        </>
    )
}
