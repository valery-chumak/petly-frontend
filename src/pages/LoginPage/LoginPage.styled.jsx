import styled from 'styled-components';
export const Title = styled.h3`
  color: #111111;
  font-size: 36px;
  line-height: 49px;
  font-weight: 500;
  margin-bottom: 40px;
`;
export const AuthContainer = styled.div`
  width: 100%;
  margin-top: 45px;
  margin-bottom: 45px;
  text-align: center;
  @media (min-width: 768px) {
    width: 608px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px;
    background: #fff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media (min-width: 1300px) {
    width: 618px;
  }
`;
