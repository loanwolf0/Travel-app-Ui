import Hero from "../components/Hero";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Service"
        btnClass="hide"
      />

      <Trip />
    </>
  );
}
export default Service;
