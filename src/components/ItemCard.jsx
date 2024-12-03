/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function ItemCard({
  title,
  inputname,
  price,
  isChecked,
  onCheck,
  showInputs,
  pages,
  languages,
  onPagesChange,
  onLanguagesChange,
  pPlus,
  pMinus,
  lPlus,
  lMinus,
}) {
  return (
    <div
      className="row shadow m-3 rounded p-4 align-items-center"
      style={{
        border: isChecked ? "2px solid green" : "2px solid transparent",
      }}
    >
      <div className="col-4 text-start">
        <h2>{title}</h2>
        <p>Programacio de una web responsive completa</p>
      </div>
      <div className="col-4 text-center">
        <h2>{price} €</h2>
      </div>
      <div className="col-4 text-end">
        <label
          htmlFor={`${inputname}-checkbox`}
          className="d-inline-flex align-items-center gap-2"
        >
          <input
            name={inputname}
            type="checkbox"
            style={{ accentColor: "green" }}
            checked={isChecked}
            onChange={onCheck}
          />
          Alejir
        </label>
      </div>
      <div className="col-1"></div>
      <div className="col-3"></div>
      {showInputs && (
        <div className="col-8 text-end">
          <label htmlFor="pages">
            Nombre de paginas
            <FontAwesomeIcon
              icon={faPlus}
              style={{ width: "10px", height: "10px" }}
              className="btn btn-outline-secondary rounded-circle p-0 m-1"
              onClick={pPlus}
            />
            <input
              name="pages"
              type="number"
              style={{ width: "40px" }}
              className="m-1 text-end"
              value={pages}
              onChange={onPagesChange}
              min="0"
            />
            <FontAwesomeIcon
              icon={faMinus}
              style={{ width: "10px", height: "10px" }}
              className="btn btn-outline-secondary rounded-circle p-0 m-1"
              onClick={pMinus}
            />
          </label>
          <label htmlFor="languages">
            Nombre de llenguatges
            <FontAwesomeIcon
              icon={faPlus}
              style={{ width: "10px", height: "10px" }}
              className="btn btn-outline-secondary rounded-circle p-0 m-1"
              onClick={lPlus}
            />
            <input
              name="languages"
              type="number"
              style={{ width: "40px" }}
              className="m-1 text-end"
              value={languages}
              onChange={onLanguagesChange}
              min="0"
            />
            <FontAwesomeIcon
              icon={faMinus}
              style={{ width: "10px", height: "10px" }}
              className="btn btn-outline-secondary rounded-circle p-0 m-1"
              onClick={lMinus}
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
