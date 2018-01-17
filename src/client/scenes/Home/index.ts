import { connect } from 'react-redux';
import Home from './components/Home';
import {
  fetchPeople,
  peopleSelector,
  savePeople,
  savedPeopleSelector,
  setInfo,
  infoSelector
} from './reducer';
import { IState } from 'Types/globalTypes';

const mapStateToProps = (state: IState) => ({
  people: peopleSelector(state.home),
  savedPeople: savedPeopleSelector(state.home),
  info: infoSelector(state.home),
});

const mapDispatchToProps = ({
  fetchPeople,
  savePeople,
  setInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
