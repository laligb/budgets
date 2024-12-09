import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <Navbar />
      <div className="header position-relative">
        <img
          src="/images/header-img.png"
          alt="Header image"
          className="img-fluid w-100 opacity-50"
          style={{ height: "300px" }}
        />
        <div className="header-text position-absolute top-50 start-50 translate-middle text-black fs-1 fw-bold text-center">
          Aconsegeis la millor calidad
        </div>
      </div>
    </>
  );
}

export default Header;
