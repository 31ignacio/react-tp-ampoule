const NavBar = (props) => {
  const { title, temps } = props;

  return (
    <div>
      <p>La navbar - {title} - {temps}</p>
    </div>
  );
};

export default NavBar;
