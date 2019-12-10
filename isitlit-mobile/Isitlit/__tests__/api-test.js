import { getAllPoints, createPoint } from '../api';

describe('get all points', () => {
  test('works for valid responses', async () => {
    const points = [{latitude: 0, longitude: 0}];
    fetch.mockResponse(JSON.stringify(points));
    const received = await getAllPoints();
    expect(received).toEqual(points);
  });

  test('returns an empty array when network is not available', async () => {
    fetch.mockReject("Yeahnah");
    const received = await getAllPoints();
    expect(received).toEqual([]);
  });

  test('returns an empty array for invalid JSON', async () => {
    fetch.mockResponse('ASDLFKJASDLFKJ');
    const received = await getAllPoints();
    expect(received).toEqual([]);
  });
});

describe('create point', () => {
  test('works for valid responses', async () => {
    const newPoint = {latitude: 0, longitude: 0};
    fetch.mockResponse(JSON.stringify([newPoint]));
    const received = await createPoint(newPoint);
    expect(received).toEqual([newPoint]);
  });

  test('returns empty array when network is not available', async () => {
    const newPoint = {latitude: 0, longitude: 0};
    fetch.mockResponse(JSON.stringify([]));
    const received = await createPoint(newPoint);
    expect(received).toEqual([]);
  });
});
