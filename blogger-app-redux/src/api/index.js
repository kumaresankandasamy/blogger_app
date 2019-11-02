const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () =>
  fetch(apiUrl).then(response => response.json());

export const getPost = id =>
  fetch(`${apiUrl}/${id}`).then(response => response.json());

export const createPost = post =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json());
