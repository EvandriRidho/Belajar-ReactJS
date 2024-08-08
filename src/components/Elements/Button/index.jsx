const Button = (props) => {
  const {
    classname = "bg-black",
    children = "...",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 rounded-md text-white font-semibold ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
