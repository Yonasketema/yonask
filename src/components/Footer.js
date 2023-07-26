import { FiGithub } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
  <>
    <p style={{ margin: "1rem 0", textAlign: "center" }}>
      design &amp; develop by yonas ketema
      
      
         
    </p>
    
    <div    
        className="footer__link"
        style={{
          justifyContent: "center",
          alignContent: "center",
          gap: "1.2rem",
          
           margin: "1rem 0"
        }}>
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
    </div>
    </>
    );
};

export default Footer;
