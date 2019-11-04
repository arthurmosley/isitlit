export const BASE_URL = 'http://localhost:3000';

// Fetches all points on the map.
export const getAllPoints = () => (
  fetch(`${BASE_URL}/points`).then(response => (
    response.json()
  ))
);

// Posts a new point to the map.
export const createPoint = point => (
  fetch(`${BASE_URL}/points`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(point),
  }).then(response => (
    response.json()
  ))
);
