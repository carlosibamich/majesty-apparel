import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  width: 55%;
  min-height: 90vh;
  align-items: center;

  button {
    margin-top: 50px;
    margin-left: auto;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;

  .header-block {
    width: 23%;
    text-transform: capitalize;

    &:last-child {
      width: 8%;
    }
  }
`;

export const HeaderBlockContainer = styled.div`
  width: 23%;
  text-transform: capitalize;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutTestWarning = styled.div`
  margin-top: 40px;
  font-size: 24px;
  color: red;
  text-align: center;
`;
