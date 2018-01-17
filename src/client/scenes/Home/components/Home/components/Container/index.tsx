import React from 'react';
import People from '../People';
import Information from '../Information';
import { IContainerProps } from './types';

const Container = (props: IContainerProps) => {
  return <div>
    <People
      people={props.people}
      savePeople={props.savePeople}
      savedPeople={props.savedPeople}
      setInfo={props.setInfo}
      remove={props.remove}
    />
    {props.info && <Information info={props.info}/>}
  </div>;
}

export default Container;
