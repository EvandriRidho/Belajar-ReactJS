const Button = (props) => {
  const { classname = "bg-black", children = "..." } = props;
  return (
    <button
      className={`w-full h-10 px-6 rounded-md text-white font-semibold ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
