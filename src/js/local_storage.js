let watchedSavedList = localStorage.getItem('watchedList');
let queueSavedList = localStorage.getItem('queueList');

export const watchedParsedList = JSON.parse(watchedSavedList) || [];
export const queueParsedList = JSON.parse(queueSavedList) || [];

export function onWatchedModalBtnClick(evt) {
    
    const watchedModalBtnEl = document.querySelector('[data-modal] [data-modal-add]');
    const dataFilmInfo = JSON.parse(localStorage.getItem('dataFilm'));
    
    const filmID = dataFilmInfo.id;
    
    const isWatched = watchedParsedList.find(({id}) => id === filmID);
    if (isWatched) {
        const indexOfFilm = watchedParsedList.findIndex(({id}) => id === filmID);
        watchedParsedList.splice(indexOfFilm, 1);
        watchedModalBtnEl.textContent = 'Add to watched';
    } else {
        watchedModalBtnEl.textContent = 'Remove from watched';
        watchedParsedList.push(dataFilmInfo);
    }
    localStorage.setItem('watchedList', JSON.stringify(watchedParsedList));
}

export function onQueueModalBtnClick(evt) {
    const queueModalBtnEl = document.querySelector('[data-modal] [data-modal-queue]');
    
    const dataFilmInfo = JSON.parse(localStorage.getItem('dataFilm'));
    const filmID = dataFilmInfo.id;
    
    const isQueue = queueParsedList.find(({id}) => id === filmID);
    
    if (isQueue) {
        const indexOfFilm = queueParsedList.findIndex(({ id }) => id === filmID);
        queueParsedList.splice(indexOfFilm, 1);
        queueModalBtnEl.textContent = 'Add to queue';
    } else {
        queueModalBtnEl.textContent = 'Remove from queue';
        queueParsedList.push(dataFilmInfo);
    }
    localStorage.setItem('queueList', JSON.stringify(queueParsedList));
}
