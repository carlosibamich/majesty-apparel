import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  align-items: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const MenuItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
`;

export const ContentTitle = styled.h1`
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: bold;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;

