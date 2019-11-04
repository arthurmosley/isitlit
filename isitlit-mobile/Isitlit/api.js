export const BASE_URL = 'http://10.0.2.2:3000';

// Fetches all points on the map.
export async function getAllPoints() {
  try {
    const response = await fetch(`${BASE_URL}/points`);
    const points = await response.json();
    return Array.isArray(points) ? points : [];
  } catch {
    return [];
  }
}

// Creates a new point and returns all updated points on the map.
export async function createPoint(point) {
  try {
    const response = await fetch(`${BASE_URL}/points`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(point),
    });
    const points = await response.json();
    return Array.isArray(points) ? points : [];
  } catch {
    return [];
  }
}
