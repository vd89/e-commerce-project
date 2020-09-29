import React, { Component } from 'react';
import MenuItem from '../menuItem/MenuItem';
import SECTIONS_DATA from './SectionData';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className='directory__menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
