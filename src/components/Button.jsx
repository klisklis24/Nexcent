const Button = ({ variation = "primary", children, className }) => {
  return (
    <button
      className={`
      ${variation === "primary" || "bg-primary text-white"}
      ${variation === "secondary" || "text-primary"}
      ${className}
        py-2 px-4 rounded text-silverWhite`}
    >
      {children}
    </button>
  );
};

export default Button;
