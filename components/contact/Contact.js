import WaveTop from "../ui/WaveTop";
import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <WaveTop>
        <div className=" bg-light-yellow py-20">
          <div className="custom-container flex flex-col lg:grid grid-cols-3 items-center gap-12 lg:gap-4">
            <ContactContent />
            <ContactForm />
          </div>
        </div>
      </WaveTop>
    </section>
  );
};

export default Contact;
