/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { budgetContext } from "../context/BudgetContext";

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
  const [showPagesModal, setShowPagesModal] = useState(false);
  const [showLanguagesModal, setShowLanguagesModal] = useState(false);

  const handlePagesModalClose = () => setShowPagesModal(false);
  const handlePagesModalShow = () => setShowPagesModal(true);

  const handleLanguagesModalClose = () => setShowLanguagesModal(false);
  const handleLanguagesModalShow = () => setShowLanguagesModal(true);

  const { isAnnual } = useContext(budgetContext);
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
        {isAnnual && (
          <p className="text-danger" id="disscount">
            Now 20% Discount
          </p>
        )}
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
          Select
        </label>
      </div>
      <div className="col-1"></div>
      <div className="col-3"></div>
      {showInputs && (
        <div className="col-8 text-end">
          <label htmlFor="pages">
            <Button
              onClick={handlePagesModalShow}
              style={{ background: "white", color: "grey", border: "none" }}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </Button>
            <Modal show={showPagesModal} onHide={handlePagesModalClose}>
              <Modal.Title className="text-center p-3">
                Number of Pages
              </Modal.Title>

              <Modal.Body className="text-center pb-5">
                Select the number of pages for your project. Price of each page
                is 30 euros.
              </Modal.Body>
            </Modal>
            Number of pages
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
            <Button
              onClick={handleLanguagesModalShow}
              style={{ background: "white", color: "grey", border: "none" }}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </Button>
            <Modal show={showLanguagesModal} onHide={handleLanguagesModalClose}>
              <Modal.Title className="text-center p-3">
                Number of Languages
              </Modal.Title>

              <Modal.Body className="text-center pb-5">
                Select the number of languages for your project. Price of each
                language is 30 euros.
              </Modal.Body>
            </Modal>
            Number of languages
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
