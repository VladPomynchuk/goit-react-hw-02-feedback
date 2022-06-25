const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button onClick={onLeaveFeedback} key={el}>
      {el}
    </button>
  ));
};

export default FeedbackOptions;
