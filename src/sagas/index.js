import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

//worker function
function* handleImagesLoad() {
  console.log('fetching images from unsplash');
}

//watcher function
function* rootSaga() {
  takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;