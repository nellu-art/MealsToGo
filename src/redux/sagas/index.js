import {takeEvery} from 'redux-saga/effects';

import {FETCH_RESTAURANTS} from '../reducers/restaurants-reducer';
import {UPDATE_LOCATION} from '../reducers/location-reducer';

import {getRestaurantsData} from './restaurant-saga';
import {updateLocation} from './location-saga';

export function* watchAll() {
  yield takeEvery(FETCH_RESTAURANTS, getRestaurantsData);
  yield takeEvery(UPDATE_LOCATION, updateLocation);
}
