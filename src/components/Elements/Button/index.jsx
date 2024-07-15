const Button = (props) => {
  const { variant = "bg-black", children = "..." } = props;
  return (
    <button
      className={`h-10 px-6 rounded-md text-white font-semibold ${variant}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
