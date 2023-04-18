// Первый файл будет содержать описание запросов к нашему Api.
class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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

  editProfileInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      // Метод PATCH обычно используют для обновления сущностей, уже существующих на сервере
      body: JSON.stringify({
        name: data.name,
        email: data.email
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        id: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        return data;
      })
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        return data;
      })
  }

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, { 
      method: "DELETE",
      // Метод PATCH обычно используют для обновления сущностей, уже существующих на сервере
      body: JSON.stringify({
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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
  }
}

export const mainApi = new MainApi({
  // baseUrl: 'https://api.diploma.project.nomoredomains.rocks',
    baseUrl: 'http://localhost:3000',
});
