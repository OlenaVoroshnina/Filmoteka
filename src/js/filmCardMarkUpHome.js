import defaultPhoto from '../images/default-photo.jpeg';
import { genresArray } from './genresArray';
export const markupFilmCardHome = function (array) {
  return array
    .map(film => {
      const {
        id,
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        backdrop_path,
      } = film;
      // console.log(genresArray);
      const genres = genre_ids.map(genre_id => {
        const elem = genresArray.find(el => el.id === genre_id) || {};

        return elem.name;
      });

      function prepareObject(array) {
        let filmGenres = '';

        if (array.length < 3) {
          filmGenres = array.join(', ');
        }
        if (array.length >= 3) {
          filmGenres = array.slice(0, 2).join(', ') + ', Other';
        }
        return filmGenres;
      }
      let filmGenres = prepareObject(genres);

      let posterPath = '';
      const defaultImg = defaultPhoto;

      if (poster_path !== null) {
        posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
      } else {
        posterPath = defaultImg;
      }

      function sliceTitle(title) {
        let titleShow = '';
        if (original_title.length < 25) {
          titleShow = original_title;
        } else {
          titleShow = original_title.slice(0, 25) + '...';
        }
        return titleShow;
      }
      let line = '|';
      if (filmGenres === '') {
        filmGenres = 'Unknown genre'
      }
      let releaseDate = release_date.slice(
        0,
        4
      ) || 'Unknown year';
      return `  
    <li class="card-library__item" data-id="${id}">
    <div class="img__container">
    <img class="card-library__photo" src="${posterPath}" alt=${sliceTitle(
        original_title
      )} width="395"/>
    </div>
    
      <div class="card-library__wrap">
        <h3 class="card-library__title">${sliceTitle(original_title)}</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            ${filmGenres} <span class="card-library__line">${line}</span> <span class="card-library__year">${releaseDate}</span>
          </p>
        </div>
      </div>
    </li>`;
    })
    .join('');
};
