const Content = () => {
  const parStyle = {
    fontFamily: "tahome",
    fontSize: "1.1rem",
    textAlign: "justify",
  };

  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  };
  return (
    <main>
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React is JS library</p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_640.jpg"
        alt="bird"
      />
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_640.jpg"
        alt=""
      />
      <p style={parStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        animi reiciendis!
      </p>

      <h4 style={parStyle}>Bu bir h4</h4>
    </main>
  );
};

export default Content;
