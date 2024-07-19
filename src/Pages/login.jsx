import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layout/AuthLayouts";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
