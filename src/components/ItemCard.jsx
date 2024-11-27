// eslint-disable-next-line react/prop-types
function ItemCard({ title, inputname, price }) {
  return (
    <div className="row shadow m-3 rounded p-4 align-items-center">
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
          <input name={inputname} type="checkbox" />
          Alejir
        </label>
      </div>
    </div>
  );
}

export default ItemCard;
