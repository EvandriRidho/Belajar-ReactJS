import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputFrom
        label="fullname"
        type="text"
        placeholder="enter your fullname..."
        name="fullname"
      />
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
      <InputFrom
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="Confirm password"
      />
      <Button classname="bg-blue-600 w-full hover:bg-slate-700">Login</Button>
    </form>
  );
};

export default FormRegister;
