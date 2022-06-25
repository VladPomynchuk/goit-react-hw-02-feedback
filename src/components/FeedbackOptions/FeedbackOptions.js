import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  :not(: last-child) {
    margin-right: 10px;
  }

  :first-letter {
    text-transform: uppercase;

    colo
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <StyledButton onClick={onLeaveFeedback} key={el}>
      {el}
    </StyledButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
