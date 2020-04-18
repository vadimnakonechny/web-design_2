import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader';
import MainList from './MainList';

const Dictionary = ({ data }) => (
  <Container>
    <Sticky>
      <ListHeader size={data.map.size} />
    </Sticky>

    <MainList data={data.map} />
  </Container>
);

Dictionary.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
};

export default connect(
  (state) => ({
    data: state.dictionary.filtred,
  }),
  null,
)(Dictionary);

const Container = styled.div`
  position: relative;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
`;
