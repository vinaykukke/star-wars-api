import { IInitialState } from './types';

/**
 * ACTION TYPES
 */
const SET_PEOPLE = 'esl/src/client/scenes/Home/SET_PEOPLE';
const SAVE_PEOPLE = 'esl/src/client/scenes/Home/SAVE_PEOPLE';
const FETCH_PEOPLE = 'esl/src/client/scenes/Home/FETCH_PEOPLE';
const SET_INFO = 'esl/src/client/scenes/Home/SET_INFO';

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

/**
 * SELECTORS
 */
export const peopleSelector = state => state.people;
export const savedPeopleSelector = state => state.savedPeople;
export const infoSelector = state => state.information;

/**
 * SAGAS
 */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

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

/**
 * LISTENERS
 */
export function* homeListeners() {
  yield takeLatest(FETCH_PEOPLE, getPeopleSaga);
}
