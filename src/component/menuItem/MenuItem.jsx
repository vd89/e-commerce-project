import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './MenuItemStyles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
