import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/selectDirectory';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections?.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
