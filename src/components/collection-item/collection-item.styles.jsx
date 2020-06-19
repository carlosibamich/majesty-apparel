import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 350px;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 255px;
  display: none;
  width: 80%;
  opacity: 0.8;
  border: none;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5%;
  font-size: 20px;
`;

export const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
  width: 10%;
`;