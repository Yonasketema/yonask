import "./App.css";
import bookstore from "./imgs/bookstore.png";
import hahu from "./imgs/hahu.jpeg";
import shopia from "./imgs/shopia.png";
import ethio from "./imgs/ethio.png";
import guzoweb from "./imgs/GuzoAdwa.png";
import About from "./components/About";
import Header from "./components/Header";
import SideBar from "./components/SideBars";
import Footer from "./components/Footer";
import Project from "./components/Projects";

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
          <h1 style={{ fontSize: "16vw", color: "#FFB200" }}>Y</h1>
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
          Full stack developer.
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
              marginBottom: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(50%, 1fr))",
               placeItems: "center",
            }}
          >
            <Project
              nav={true}
              gitLink="https://github.com/Yonasketema/bookstore-react"
              navLink="https://shopia-et.vercel.app/"
              img={shopia}
              width="20vw"
              title="Shopia"
              stacks={["React", "TypeScript", "Django"]}
              description="Ethiopian shopping store"
            />

            <Project
              title="Hahu App"
              nav={false}
              width="40vw"
              gitLink="https://github.com/Yonasketema/hahu-hiking"
              img={hahu}
              stacks={["React-Native", "Django"]}
              description="Travel planning app build with react native & django"
            />

            <Project
              title="Land of origin"
              nav={true}
              width="40vw"
              navLink="https://yonasketema.github.io/ethiopia"
              gitLink="https://github.com/Yonasketema/ethiopia"
              img={ethio}
              stacks={["Html", "Sass"]}
            />

            <Project
              title="Guzo Adwa"
              nav={true}
              width="60vw"
              navLink="https://yonasketema.github.io/guzo-adwa/"
              gitLink="https://github.com/Yonasketema/guzo-adwa"
              img={guzoweb}
              stacks={["Html", "Css"]}
            />

            <Project
              nav={false}
              gitLink="https://github.com/Yonasketema/bookstore-react"
              img={bookstore}
              width="20vw"
              title="Book Store"
              stacks={["React", "Node"]}
              description="Designed user-friendly full stack web application to allow users to search, save, and view pinned books."
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
