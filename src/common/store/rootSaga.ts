/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import cart from './sagas/cartSagas';

export default function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  any,
  unknown
> {
  return yield all([cart]);
}
