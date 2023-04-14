// Второй — к сервису beatfilm-movies. Напишите этот код на нативном JS, применяя fetch. Вы можете использовать как обычные функции с импортом в нужные компоненты, так и классовую структуру.
class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        // authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        // console.log(data);
        return data;
      })
      // .then((data) => {
      //   // console.log(data);
      //   return data;
      // })
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
});
