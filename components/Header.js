const Header = ({ children }) => {
  return (
    <div className="mx-auto">
      <h1 className="font-bold text-blue-700">{children}</h1>
    </div>
  );
};

export default Header;
