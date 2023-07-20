import { FiGithub } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";

const SideBar = () => {
  return (
    <>
      <div
        className="sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "1.2rem",
          position: "fixed",
          bottom: "0",
          left: "5%",
        }}
      >
        <button
          style={{
            color: "#fff",
            backgroundColor: "transparent",
            border: "none",
            width: "1.5rem",
            fontSize: "1.5rem",
          }}
        >
          <a href="https://www.linkedin.com/in/yonaskk">
            <BiLogoLinkedin />
          </a>
        </button>
        <button
          style={{
            color: "#fff",
            backgroundColor: "transparent",
            border: "none",
            width: "1.5rem",
            fontSize: "1.5rem",
          }}
        >
          <a href="https://github.com/Yonasketema">
            <FiGithub />
          </a>
        </button>

        <div
          style={{
            borderLeft: "1px solid #fff",
            height: "8rem",
            margin: "0 auto",
          }}
        ></div>
      </div>

      <div
        className="sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "2rem",

          position: "fixed",
          bottom: "0",
          right: "5%",
        }}
      >
        <a
          href="mailto:yonask.kitaw@gmail.com"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(0deg)",
            width: "1rem",
          }}
        >
          yonask.kitaw@gmail.com
        </a>
        <div
          style={{
            borderLeft: "1px solid #fff",
            height: "8rem",
            margin: "0 auto",
          }}
        ></div>
      </div>
    </>
  );
};

export default SideBar;
