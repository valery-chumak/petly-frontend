import { StyledCloseBtn, StyledIcon } from './ModalCloseBtn.styled';
import closeIcon from '../../img/close-icon.png';

const ModalCloseBtn = ({ closeModal }) => {
  return (
    <StyledCloseBtn onClick={closeModal} type="button">
      <StyledIcon src={closeIcon} alt="close-icon" />
    </StyledCloseBtn>
  );
};

export default ModalCloseBtn;
