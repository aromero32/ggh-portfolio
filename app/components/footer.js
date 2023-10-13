import Socials from "./socials";
const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Genesis&apos; Portfolio
          </p>
          <Socials />
        </div>
      </>
    )
  }
  
  export default Footer;