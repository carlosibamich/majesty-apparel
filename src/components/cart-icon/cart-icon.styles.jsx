import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 45px;
  height: 45px;
  align-items: center;
  cursor: pointer;
`;

export const ShoppingIconImage = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountSpan = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;