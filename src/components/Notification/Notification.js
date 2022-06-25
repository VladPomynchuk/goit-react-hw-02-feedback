import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  text-align: center;
  color: red;
`;

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
