import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Tripy </h1>
          <p> Choose Your Favourite destination </p>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"> </i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4> Projects </h4>
          <a href="/"> Changelog </a>
          <a href="/"> Status </a>
          <a href="/"> All Versions </a>
        </div>
        <div>
          <h4> Community </h4>
          <a href="/"> GitHub </a>
          <a href="/"> Issues </a>
          <a href="/"> Project </a>
        </div>
        <div>
          <h4> Help </h4>
          <a href="/"> Support </a>
          <a href="/"> Troubleshooting </a>
          <a href="/"> Contact Us </a>
        </div>
        <div>
          <h4> Others </h4>
          <a href="/"> Terms and conditions </a>
          <a href="/"> Twitter </a>
          <a href="/"> Policy </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
