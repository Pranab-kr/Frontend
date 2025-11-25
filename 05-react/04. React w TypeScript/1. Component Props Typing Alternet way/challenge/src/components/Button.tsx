const Button = ({label, onClick, disable}: {
  label: string;
  onClick: () => void;
  disable: boolean;
}) => {
  return (
    <div>
      <button onClick={onClick} disabled={disable}>
        {label}
      </button>
    </div>
  );
};
export default Button;
