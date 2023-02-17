'use strict';

import { FilmAPI } from './filmApi';
import Notiflix from 'notiflix';
import { refs } from './refs.js';
import { markupFilmCardHome } from './filmCardMarkUpHome';
import { pagination, onPaginationBtnClick } from './pagination.js';
import popcornImgPath from '../images/popcorn.svg-min.png';

const headerFormEl = document.querySelector('.header__form');
const headerInputEl = document.querySelector('.header__input');
const headerFormBtn = document.querySelector('.btn_search');
const headerWarningMessage = document.querySelector('.header__warning');
const searchFieldMessage = document.querySelector('.js_search_results');

const filmApi = new FilmAPI();

headerFormEl.addEventListener('submit', onSearchClick);

function renderDefaultPhoto() {
  return `<img class="popcorn__picture__search" src="${popcornImgPath}" alt="popcorn picture" width="150">`;
}

async function onSearchClick(event) {
  event.preventDefault();
  filmApi.query = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  filmApi.page = 1;

  if (filmApi.query === '') {
    searchFieldMessage.textContent = '';
    headerWarningMessage.textContent = '';
    searchFieldMessage.textContent = `Please write something in the box!`;
    return;
  }

  Notiflix.Loading.pulse({
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgColor: '#ff6b08',
  });

  //   filmApi
  //     .fetchFilmsByQuery()
  //     .then(data => {
  //       if (data.total_results === 0) {
  //         Notiflix.Loading.remove(300);
  //         searchFieldMessage.textContent = '';
  //         refs.galleryCardLibraryEl.innerHTML = '';
  //         headerWarningMessage.textContent = `Search result not successful. Enter the correct movie name and `;
  //         return;
  //       } else {
  //         Notiflix.Loading.remove(2500);

  //         refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(data.results);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   event.currentTarget.elements.searchQuery.value = '';
  //   searchFieldMessage.textContent = '';
  //   headerWarningMessage.textContent = '';
  // }

  filmApi
    .fetchFilmsByQuery()
    .then(data => {
      if (data.total_results === 0) {
        Notiflix.Loading.remove(300);
        pagination.reset(data.total_results);

        searchFieldMessage.textContent = '';
        refs.galleryCardLibraryEl.innerHTML = renderDefaultPhoto();
        headerWarningMessage.textContent = `Search result not successful. Enter the correct movie name`;
        return;
      } else {
        Notiflix.Loading.remove(2500);

        refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(data.results);

        pagination.reset(data.total_results);
        pagination.off('afterMove', onPaginationBtnClick);

        pagination.on('afterMove', e => {
          
          filmApi.page = e.page;
          window.scrollTo({
          top: 0,
          behavior: 'smooth',
          });

          filmApi.fetchFilmsByQuery().then(data => {
            
            refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
              data.results
            );
          });
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
  event.currentTarget.elements.searchQuery.value = '';
  searchFieldMessage.textContent = '';
  headerWarningMessage.textContent = '';
}
