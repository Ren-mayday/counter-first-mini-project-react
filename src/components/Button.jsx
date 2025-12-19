import "./Button.css";
// props, aceptará un children que será el text y onClick la función (evento) necesario
const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
