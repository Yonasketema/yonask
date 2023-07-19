const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        top: 0,
        right: 0,
        backgroundColor: "#1B2430",
        padding: "2% 5%",
        boxShadow: "#0003 0px 5px 15px",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          color: "orange",
          fontWeight: "bold",
        }}
      >
        Y
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#project">
            <li>project</li>
          </a>

          <a href="mailto:yonask.kitaw@gmail.com">
            <li>contact</li>
          </a>
        </ul>
      </div>
    </header>
  );
};
export default Header;
