import { IInitialState } from './types';

/**
 * ACTION TYPES
 */
const SET_PEOPLE = 'swapi/src/client/scenes/Home/SET_PEOPLE';
const SAVE_PEOPLE = 'swapi/src/client/scenes/Home/SAVE_PEOPLE';
const FETCH_PEOPLE = 'swapi/src/client/scenes/Home/FETCH_PEOPLE';
const SET_INFO = 'swapi/src/client/scenes/Home/SET_INFO';
const REMOVE_SAVED = 'swapi/src/client/scenes/Home/REMOVE_SAVED';
const REMOVE = 'swapi/src/client/scenes/Home/REMOVE';

const initialState: IInitialState = {
  people: [],
  savedPeople: [],
  information: null
};

/**
 * REDUCER
 */
export default function Home(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE: {
      return {
        ...state,
        people: action.payload,
      };
    }

    case SAVE_PEOPLE: {
      return {
        ...state,
        savedPeople: [
          ...state.savedPeople,
          action.payload
        ],
      };
    }

    case REMOVE_SAVED: {
      return {
        ...state,
        savedPeople: action.payload,
      };
    }

    case SET_INFO: {
      return {
        ...state,
        information: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * ACTION CREATORS
 */
export const setPeople = (people: any) => ({
  type: SET_PEOPLE,
  payload: people
});

export const savePeople = (people: any) => ({
  type: SAVE_PEOPLE,
  payload: people
});

export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
});

export const setInfo = (info: any) => ({
  type: SET_INFO,
  payload: info
});

export const removeSaved = (data: any[]) => ({
  type: REMOVE_SAVED,
  payload: data
});

export const remove = (data: any) => ({
  type: REMOVE,
  payload: data
});

/**
 * SELECTORS
 */
export const peopleSelector = state => state.people;
export const savedPeopleSelector = state => state.savedPeople;
export const infoSelector = state => state.information;

/**
 * SAGAS
 */
import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { IState } from 'Types/globalTypes';

export function* getPeopleSaga() {
  let gotPeople;
  let people;
  yield axios.get('/api/people')
  .then((res) => {
    gotPeople = true;
    people = res.data;
  });

  yield gotPeople && put(setPeople(people));
}

export function* removePeopleSaga(data: any) {
  const savedPeople = yield select((state: IState) => savedPeopleSelector(state.home));
  const removablePerson = savedPeople.filter((person: any) => person.name !== data.payload);
  yield put(removeSaved(removablePerson));
}

/**
 * LISTENERS
 */
export function* homeListeners() {
  yield takeLatest(FETCH_PEOPLE, getPeopleSaga);
  yield takeLatest(REMOVE, removePeopleSaga);
}
