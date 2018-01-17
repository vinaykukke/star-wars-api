import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as S from './index.styles';
import { IPeopleProps } from './types';

class People extends Component<IPeopleProps, any> {
  constructor(props: IPeopleProps) {
    super(props);
  }

  handleSave = (e: any) => {
    const { name, value } = e.target;
    this.props.savePeople({
      name,
      image: value
    });
  }

  showInfo(name: string) {
    const original = this.props.people.filter((person) => person.name === name);
    // Doing this since there is always only one person that exactly matches the name
    this.props.setInfo(original[0]);
  }

  renderButtons(cellProps: any) {
    return <div>
      <S.SaveButton onClick={() => this.props.setInfo(cellProps.original)}>Show Details</S.SaveButton>
      <S.SaveButton
        onClick={this.handleSave}
        name={cellProps.original.name}
        value={`http://facetheforce.today/luke`}
      >
        Save
      </S.SaveButton>
    </div>;
  }

  render() {
    // Names of the colums
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Gender',
      accessor: 'gender'
    }, {
      Header: 'Birth Year',
      accessor: 'birth_year'
    }, {
      Header: 'Eye Color',
      accessor: 'eye_color'
    }, {
      Header: '',
      Cell: props => this.renderButtons(props),
    }];

    return <S.PeopleContainer>
      <S.SearchPeopleContainer>
        <ReactTable
          noDataText="Oh Noes! Accessing the force, hold on to your light saber."
          data={this.props.people}
          columns={columns}
          defaultPageSize={10}
        />
      </S.SearchPeopleContainer>
      <S.SavedPeopleContainer>
        {this.props.savedPeople.map((person, index) => <S.PeopleImagesContainer key={index}>
          <img width={350} height={350} src={person.image}/>
          <S.ImageName>{person.name}</S.ImageName>
          <S.ButtonContainer>
            <S.SaveButton onClick={() => this.showInfo(person.name)}>Show Details</S.SaveButton>
            <S.SaveButton onClick={() => this.props.remove(person.name)}>Remove</S.SaveButton>
          </S.ButtonContainer>
        </S.PeopleImagesContainer>)}
      </S.SavedPeopleContainer>
    </S.PeopleContainer>;
  }
}

export default People;
