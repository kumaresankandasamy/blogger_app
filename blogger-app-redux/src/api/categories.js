const apiUrl = 'http://localhost:3001/categories';

export const getCategories = () =>
  fetch(apiUrl).then(response => response.json());

export const getCategory = id =>
  fetch(`${apiUrl}/${id}`).then(response => response.json());
