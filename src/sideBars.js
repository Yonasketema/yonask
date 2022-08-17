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
          gap: "2rem",
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
          }}
        >
          <a href="https://github.com/Yonasketema">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
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
