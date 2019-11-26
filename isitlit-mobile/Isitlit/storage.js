/**
 * This file contains helper functions related to saving and retrieving
 * information from the local storage on the phone.
 */

import AsyncStorage from '@react-native-community/async-storage';

const HAS_LAUNCHED = 'HAS_LAUNCHED';
const SAVED_POINTS = 'SAVED_POINTS';

/**
 * Retrievse whether or not the application has launched before.
 */
export async function hasLaunched() {
  try {
    const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
    if (hasLaunched === null) {
      AsyncStorage.setItem(HAS_LAUNCHED, 'true');
    }
    return !!hasLaunched;
  } catch {
    return false;
  }
}

/**
 * Retrieves a list of saved points from the user.
 */
export async function getSavedPoints() {
  try {
    const savedPoints = await AsyncStorage.getItem(SAVED_POINTS);
    if (savedPoints === null) {
      return [];
    }
    return JSON.parse(savedPoints);
  } catch {
    return [];
  }
}

/**
 * Sets the list of saved points from the user.
 */
export function setSavedPoints(savedPoints) {
  return AsyncStorage.setItem(SAVED_POINTS, JSON.stringify(savedPoints));
}

/**
 * Adds a point to the list of saved points from the user.
 */
export async function addSavedPoint(point) {
  const savedPoints = await getSavedPoints();
  savedPoints.push(point);
  await setSavedPoints(savedPoints);
  return savedPoints;
}
