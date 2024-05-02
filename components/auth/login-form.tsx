import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Don't have account?"
      headerLabel="Welcome back"
      showSocials
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
