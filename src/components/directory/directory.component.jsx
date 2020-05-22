import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContianer } from './directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContianer>
      {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContianer>
  )
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
//export to homepage.component.jsx