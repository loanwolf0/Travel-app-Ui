import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonTexxt="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
    </>
  );
}
export default Home;
