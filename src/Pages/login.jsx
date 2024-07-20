import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layout/AuthLayouts";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm text-center my-5">
        Dont have an account?{""}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
