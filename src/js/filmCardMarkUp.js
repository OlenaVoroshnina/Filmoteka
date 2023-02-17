export const markupFilmCard = function (array) {
  return array
    .map(film => {
      const {
        id,
        poster_path,
        original_title,
        genres = [],
        release_date,
        vote_average,
        backdrop_path,
      } = film;
      // console.log('film', film);
      let line = "|";
      if (genres.length === 0){
        line = "";
      }
      
      return `  
    <li class="card-library__item" data-id="${id}" >
      <img class="card-library__photo" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${original_title}" width="395"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">"${original_title}"</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            "${genres}" <span class="card-library__line">${line}</span> <span class="card-library__year">"${release_date.slice(
        0,
        4
      )}"</span>
          </p>
          <span class="card-library__rate">"${vote_average.toFixed(1)}"</span>
        </div>
      </div>
    </li>`;
    })
    .join('');
};
