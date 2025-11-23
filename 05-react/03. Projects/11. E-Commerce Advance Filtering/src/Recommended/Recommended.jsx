import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClick={handleClick} value="" title="All Products" />
          <Button onClick={handleClick} value="Nike" title="Nike" />
          <Button onClick={handleClick} value="Adidas" title="Adidas" />
          <Button onClick={handleClick} value="Puma" title="Puma" />
          <Button onClick={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
