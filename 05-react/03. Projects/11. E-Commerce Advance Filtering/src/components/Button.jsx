const Button = ({onClick, value, title}) => {
  return (
    <button onClick={onClick} value={value} className="btns">{title}</button>
  );
};

export default Button;