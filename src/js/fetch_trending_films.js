// import Pagination from 'tui-pagination';
// import { FilmAPI } from './filmApi.js';
// import { markupFilmCardHome } from './filmCardMarkUpHome.js';
// import { refs } from './refs.js';

// const filmApi = new FilmAPI();
// // console.log('filmApi', filmApi);

// filmApi
//   .fetchTrendingFilms()
//   .then(response => {
//     // console.log('response', response.data.results);
//     refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
//       response.data.results
//     );

//     const options = {
//       totalItems: data.results.total_results,
//       itemsPerPage: 20,
//       visiblePages: data.results.total_pages,
//       page: 1,
//       centerAlign: true,
//       firstItemClassName: 'tui-first-child',
//       lastItemClassName: 'tui-last-child',
//       template: {
//         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//         currentPage:
//           '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//         moveButton:
//           '<a href="#" class="tui-page-btn tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}">--></span>' +
//           '</a>',
//         disabledMoveButton:
//           '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}"><--</span>' +
//           '</span>',
//         moreButton:
//           '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//           '<span class="tui-ico-ellip">...</span>' +
//           '</a>',
//       },
//     };

//     const pagination = new Pagination(container, options);

//     pagination.on('afterMove', e => {
//       console.log(e.page);
//       filmApi.page = e.page;

//       filmApi.fetchTrendingFilms().then(data => {
//         console.log(data);
//       });
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const data = filmApi.fetchTrendingFilms().then(data => {
//   galleryEl.insertAdjacentHTML('beforeend', markupFilmCard(data.results));
// });

// async function fetchTrendingFilms() {
//   try {
//     const data = await filmApi.fetchTrendingFilms();
//     console.log(data.results);

//     galleryEl.insertAdjacentHTML('beforeend', markupFilmCard(data.results));
//   } catch {
//     err => console.log(err);
//   }
// }
// fetchTrendingFilms();
// где ее вызывать? нужно ли этот файл добавлять в index.js
