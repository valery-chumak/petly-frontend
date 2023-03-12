import { RegisterForm } from 'components/AuthForm/RegisterForm/RegisterForm';
import { Section } from './RegisterPage.styled';
import { MainContainer } from '../../components/App.styled';

export default function RegisterPage() {
  return (
    <Section>
      <MainContainer>
        <RegisterForm />
      </MainContainer>
    </Section>
  );
}
