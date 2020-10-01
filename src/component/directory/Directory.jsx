import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/selectDirectory';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <div className='directory__menu'>
      {sections?.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
