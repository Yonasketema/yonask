import me from "../imgs/proimg.jpg";

const About = () => {
  return (
    <div id="about" style={{ marginBottom: "7rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "7rem" }}>፩ About Me</h1>
      <div
        className="about"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "30vw" }}>
          <p>
            Hello!my name is yonas. I like blending colors to create new ones.
            My fascination with web programming began when a friend showed me a
            hello world html web page. That day inspired me to succeed as a web
            developer. On this particular day, I created my own full-stack app.
            Working on my own projects is something I like doing. My birthplace
            is Ethiopia, where design began in a cave. This led me to seek for
            my own design system, habesha theme, in order to present you with a
            more distinct and engaging experience .
          </p>
        </div>
        <div>
          <div
            style={{
              width: "max(10rem, 21vw)",
              height: "60vh",
              borderRadius: "30vh",
              backgroundImage: `linear-gradient(to top,#ffc94242,#ffc94247), url(${me})`,
              marginBottom: "1rem",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
