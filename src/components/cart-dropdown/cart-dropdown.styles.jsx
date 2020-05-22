import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 340px;
  padding: 20px;
  background-color: white;
  border: 1px solid black;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageSpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartCheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;