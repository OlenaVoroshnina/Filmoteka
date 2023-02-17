import { markupFilmCardLibrary } from './filmCardMarkUpLibrary';
import { refs } from './refs.js';
import popcornImgPath from '../images/popcorn.svg-min.png';


if (window.location.pathname === '/project-js-filmoteka/library.html') {
  if (!refs.btnHeaderWatchedEl.classList.contains("btn-active")) {
    refs.btnHeaderWatchedEl.classList.replace("btn-header","btn-active");
  }
  refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);  
  rerenderWatchedLib();
}
// for VSCode path
// if (window.location.pathname === '/library.html') {
//   if (!refs.btnHeaderWatchedEl.classList.contains("btn-active")) {
//     refs.btnHeaderWatchedEl.classList.replace("btn-header","btn-active");
//   }
//   refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);  
//   rerenderWatchedLib();
// }

function onBtnHeaderWatchedClick() {
  if (refs.btnHeaderQueueEl.classList.contains("btn-active")) {
    refs.btnHeaderQueueEl.classList.replace("btn-active","btn-header");
  }
  rerenderWatchedLib();
}

export function rerenderWatchedLib() {
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];

  if (watchedParsedList.length === 0) {
    refs.myLibraryGalleryEl.innerHTML = renderDefaultWatchedNotification();
    console.log('ul', refs.myLibraryGalleryEl);
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCardLibrary(watchedParsedList);
}

function renderDefaultWatchedNotification() {
  return `<div class="popcorn__picture"><img src="${popcornImgPath}" alt="popcorn picture" width="150">
  <p class="notification-library">You haven't added any films to watched...</p></div>`;
}
