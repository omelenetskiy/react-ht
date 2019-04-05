import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../movie';
import { actionMovieFetch } from '../movie';

jest.mock('../../../constants/api', () => ({
  movieURL: 'movieURL',
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Movie action', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('movie', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { posts: {} },
      });
    });

    const store = mockStore({ posts: {} });

    return store.dispatch(actions.actionMovieFetch()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual({ posts: {} });
    });
  });
});
