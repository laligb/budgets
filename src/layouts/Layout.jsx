import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container w-100 mx-auto" style={{ maxWidth: "1000px" }}>
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
