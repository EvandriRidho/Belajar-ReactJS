import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputFrom
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputFrom
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button classname="bg-blue-600">Login</Button>
    </form>
  );
};

export default FormLogin;
