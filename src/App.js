import "./App.css";
import Project from "./components/projects";
import bookstroe from "./imgs/bookstroe";
import ethio from "./imgs/ethio.png";
import guzoweb from "./imgs/GuzoAdwa.png";
import About from "./components/about";
import Header from "./components/header";
import SideBar from "./components/sideBars";
import Footer from "./components/footer";

function App() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SideBar />
      <Header />
      <div
        style={{
          padding: "5% 10%",
          lineHeight: "1.3",
        }}
      >
        <div
          className="heading"
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "12vw", color: "#FFB200" }}>Y</h1>
          <div>
            <h1
              style={{
                fontSize: "max(3rem, 7vw)",
                textAlign: "left",
              }}
            >
              <span className="y-letter">Y</span>onas Ketema .
            </h1>
            <h1
              style={{
                fontSize: "max(2rem, 3vw)",
                color: "#9999",
                marginBottom: "1.7rem",
              }}
            >
              <span className="y-letter">Y</span>opia Home Studio 4yopian.
            </h1>
          </div>
        </div>
        <p
          className="intro"
          style={{
            width: "50%",

            color: "#9999",
            marginBottom: "6rem",
          }}
        >
          Allow me to connect you to the internet using a custom habesha theme
          and alfabet.
        </p>

        <a
          className="contact"
          href="mailto:yonask.kitaw@gmail.com"
          style={{
            fontSize: "1rem",
            border: "1px solid #fff",
            padding: "1rem 4rem",
          }}
        >
          Contact
        </a>
      </div>

      <section
        style={{
          padding: "5% 10%",
          lineHeight: "1.3",
        }}
      >
        <About />
        <div id="project">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "7rem",
            }}
          >
            ፪ projects
          </h1>
          <div
            className="projects"
            style={{
              display: "flex",
              gap: "3rem",
              marginBottom: "2rem",
            }}
          >
            <Project
              nav={false}
              gitLink="https://github.com/Yonasketema/bookstore-react"
              img={bookstroe}
              width="20vw"
              title="Book Store"
            />

            <Project
              title="Land of origin"
              nav={true}
              width="40vw"
              navLink="https://yonasketema.github.io/ethiopia"
              gitLink="https://github.com/Yonasketema/ethiopia"
              img={ethio}
            />
          </div>
          <Project
            title="Guzo Adwa"
            nav={true}
            width="60vw"
            navLink="https://yonasketema.github.io/guzo-adwa/"
            gitLink="https://github.com/Yonasketema/guzo-adwa"
            img={guzoweb}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
