import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
