class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      // .then((data) => {
      //   console.log(data);
      //   return data;
      // })
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .then((data) => {
        // console.log(data);
        return data;
      })
  }

  getInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        return data;
      })
      // .then((data) => {
      //   return data;
      // })
  }
}

export const auth = new Auth({
  // baseUrl: 'api.diploma.project.nomoredomains.rocks',
  baseUrl: 'http://api.diploma.project.nomoredomains.rocks',
});

