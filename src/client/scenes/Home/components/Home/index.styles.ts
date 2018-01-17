import styled from 'styled-components';

export const HomeBackground = styled.div`
  width: 100vw;
  height: 100%;
  background: #343a40;
  color: black;
  padding: 1em;

  > h3 {
    color: white;
    margin-bottom: 1em;
  }
`;

export const Input = styled.input`
  height: 30px
`;

export const Button = styled.button`
  height: 30px;
  background: blue;
  border-radius: 8px;
  margin-left: 1em;
  border: none;
  color: white;
  cursor: pointer;
`;

export const SearchboxContainer = styled.div`
  margin-bottom: 1em;
`;
