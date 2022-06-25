import styled from 'styled-components';

const StyledOption = styled.p`
  text-align: center;
  :first-letter {
    text-transform: uppercase;
  }
`;

const Statistics = props => {
  return Object.keys(props).map(el => (
    <StyledOption key={el}>{`${el}: ${props[el]}`}</StyledOption>
  ));
};

export default Statistics;
