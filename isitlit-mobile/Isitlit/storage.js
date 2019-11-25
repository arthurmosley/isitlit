import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'HAS_LAUNCHED';
const SAVED_POINTS = 'SAVED_POINTS';

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

export function setSavedPoints(savedPoints) {
  return AsyncStorage.setItem(SAVED_POINTS, JSON.stringify(savedPoints));
}

export async function addSavedPoint(point) {
  const savedPoints = await getSavedPoints();
  savedPoints.push(point);
  await setSavedPoints(savedPoints);
  return savedPoints;
}
