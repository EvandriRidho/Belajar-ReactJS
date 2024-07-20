import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layout/AuthLayouts";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm text-center my-5">
        have an account?{""}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};
export default RegisterPage;
