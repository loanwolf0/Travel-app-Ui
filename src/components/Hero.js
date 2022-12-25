import "./HeroStyles.css";
function Hero({ cName, heroImg, title, text, url, btnClass, buttonTexxt }) {
  return (
    <div className={cName}>
      <img src={heroImg} alt="HeroImg" />

      <div className="hero-text">
        <h1>{title} </h1>
        <p> {text}</p>
        <a href={url} className={btnClass}>
          {" "}
          {buttonTexxt}{" "}
        </a>
      </div>
    </div>
  );
}
export default Hero;
