import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.profile.logOutText};
  backdrop-filter: blur(10px);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${p => p.theme.colors.profile.cardBg};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  overflow: auto;
  width: 280px;
  max-height: 100%;
  padding: 40px 20px;

  @media (min-width: 768px) {
    width: 608px;
    border-radius: 40px;
    padding: 40px 80px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;
export const TitleModal = styled.h3`
  font-weight: ${p => p.theme.fontWeights.preBold};

  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: ${p => p.theme.colors.profile.text};
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: 1.36;
  }
`;

export const IconClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.profile.bgTrash};
  transition: background-color 200ms linear, transform 200ms linear;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 20px;
    right: 20px;
  }
  @media screen and (min-width: 1280px) {
    top: 24px;
    right: 24px;
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.profile.logOutIcon};
  }
`;
