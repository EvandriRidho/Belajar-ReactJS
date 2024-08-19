import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputFrom
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        ref={emailRef}
      />
      <InputFrom
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button classname="bg-blue-600 w-full hover:bg-slate-700" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
