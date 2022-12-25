import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="About"
        btnClass="hide"
      />

      <AboutUs />
    </>
  );
}
export default About;
