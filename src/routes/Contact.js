import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=600"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </>
  );
}
export default Contact;
