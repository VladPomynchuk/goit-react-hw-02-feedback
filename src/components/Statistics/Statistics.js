const Statistics = props => {
  return Object.keys(props).map(el => <p key={el}>{`${el}: ${props[el]}`}</p>);
};

export default Statistics;
