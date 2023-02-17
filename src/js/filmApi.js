'use strict';

import axios from 'axios';

export class FilmAPI {
  static BASE_URL = 'https://api.themoviedb.org/3/';
  static API_KEY = 'a1c58729dd9d07a228419b3d2b553cbb';
  static GENRES_LIST = 'genre/movie/list';

  constructor() {
    this.page = 1;
    this.query = null;
  }
  async getGenresList() {
    const params = {
      params: {
        // _page: this.page,
        api_key: FilmAPI.API_KEY,
      },
    };
    const response = await axios.get(
      `${FilmAPI.BASE_URL}${FilmAPI.GENRES_LIST}`,
      params
    );
    return response.data.genres;
  }

  fetchTrendingFilms() {
    const searchParams = {
      params: {
        page: this.page,
        api_key: FilmAPI.API_KEY,
      },
    };
    return axios.get(`${FilmAPI.BASE_URL}trending/movie/week`, searchParams);
  }
  // async fetchTrendingFilms() {
  //   const params = {
  //     params: {
  //       // _page: this.page,
  //       api_key: FilmAPI.API_KEY,
  //     },
  //   };
  //   const response = await axios.get(
  //     `${FilmAPI.BASE_URL}trending/movie/week`,
  //     params
  //   );
  //   console.log(response.data);
  //   // return response.data;
  // }

  async fetchFilmsByQuery() {
    const params = {
      params: {
        page: this.page,
        api_key: FilmAPI.API_KEY,
        query: this.query,
      },
    };
    const response = await axios.get(`${FilmAPI.BASE_URL}search/movie`, params);
    // console.log(response.data);
    // pagination.setTotalItems(response.data.total_items);
    return response.data;
  }

  async fetchFilmById(id) {
    const movie_id = id;
    const params = {
      params: {
        api_key: FilmAPI.API_KEY,
      },
    };
    const response = await axios.get(
      `${FilmAPI.BASE_URL}movie/${movie_id}`,
      params
    );
    return response;
  }
}

// const filmApi = new FilmAPI();
// filmApi.fetchTrendingFilms();
