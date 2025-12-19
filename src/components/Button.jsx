import "./Button.css";
// props, aceptará un children que será el text y onClick la función (evento) necesario
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
