import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color={'rgb(245, 146, 86)'}
      />
    </LoaderContainer>
  );
};

export default Loader;
