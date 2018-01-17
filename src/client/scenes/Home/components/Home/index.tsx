import React, { Component } from 'react';
import * as S from './index.styles';
import Container from './components/Container';
import { IHomeProps, IPerson } from './types';

class Home extends Component<IHomeProps, any> {
  constructor(props: IHomeProps) {
    super(props);

    this.state ={
      searchText: '',
      people: [],
    };
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  handleInputchange = (e: any) => {
    const { value } = e.target;
    const { people } = this.props;
    this.setState({
      searchText: value,
      people: people.filter((person: IPerson) => person.name.includes(value)),
    });
  }

  render() {
    const { people: newPeople } = this.state;
    const { people, savePeople } = this.props;

    return <S.HomeBackground>
      <h3>Web Test SWAPI playground</h3>
      <S.SearchboxContainer>
        <S.Input
          type='text'
          placeholder='Search by name'
          value={this.state.searchText}
          onChange={this.handleInputchange}
        />
        <S.Button>Search</S.Button>
      </S.SearchboxContainer>
      <Container
        people={newPeople.length > 0 ? newPeople : people}
        savePeople={savePeople}
        savedPeople={this.props.savedPeople}
        setInfo={this.props.setInfo}
        info={this.props.info}
        remove={this.props.remove}
      />
    </S.HomeBackground>
  }
}

export default Home;
