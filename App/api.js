export const api = async (path, options = {}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com${path}`, options);
    const response = await res.json();
    if (!Array.isArray(response) && Object.keys(response).length === 0) {
        throw new Error('Empty Response');
    }
    return response;
  };