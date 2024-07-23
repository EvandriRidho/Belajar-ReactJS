import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = () => {
    console.log("login");
  };
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
      <Button
        classname="bg-blue-600 w-full hover:bg-slate-700"
        onClick={handleLogin}
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
