import Navbar from "./NavBar";

const LayoutWithNavbar = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LayoutWithNavbar;