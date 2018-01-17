import React from 'react';
import * as S from './index.styles';

const Information = (props: any) => {
  return <S.InformationContainer>
    <div>Name: {props.info.name}</div>
    <div>Height: {props.info.height}</div>
    <div>Gender: {props.info.gender}</div>
    <div>Eye Color: {props.info.eye_color}</div>
    <div>Birth Year: {props.info.birth_year}</div>
    <div>Hair Color: {props.info.hair_color}</div>
    <div>Mass: {props.info.mass}</div>
  </S.InformationContainer>;
}

export default Information;
