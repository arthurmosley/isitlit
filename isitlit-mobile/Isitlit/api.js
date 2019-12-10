/**
 * This file provides abstractions for the Isitlit API endpoints. All helper
 * functions return Promises that resolve to simplified data structures. By
 * intention, these functions return Promises that always resolve to valid data
 * structures. If our API service is inaccessible, these defaults provide sane
 * behavior to the application.
 */

import { Platform } from 'react-native';

// Machine localhost from Android simulator is the special IP "10.0.0.2".
/*
export const BASE_URL = (
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000'
    : 'http://localhost:3000'
);
*/

// AWS!!!
export const BASE_URL = 'http://54.152.111.88:3000';

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
