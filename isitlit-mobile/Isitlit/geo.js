/**
 * This file provides an abstracted layer ontop of the geolocation API to reduce
 * friction of use.
 */

import Geolocation from 'react-native-geolocation-service';

/**
 * Retrieves the current GPS (latitude, longitude) position of the user's device
 * and returns a Promise to the result. Resolves with the coordinates or rejects
 * with an error. If the user's location preferences have not been set, this
 * also prompts the user to allow location sharing.
 */
export async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      ({ coords }) => { resolve(coords) },
      (error) => { reject(error) },
      { enableHighAccuracy: true },
    );
  });
}
