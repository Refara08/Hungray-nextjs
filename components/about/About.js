import Image from "next/image";

const About = () => {
  return (
    <section id="about-us" className="bg-white mb-12">
      <div className="custom-container block lg:grid grid-cols-2 items-center justify-center gap-6">
        <div className="grid place-items-center mb-12 lg:mb-0">
          <Image
            src={"/images/about/chef.jpg"}
            alt="image of chef cooking"
            width={"350px"}
            height="538px"
          />
        </div>
        <div className="h-full flex flex-col justify-center gap-8">
          <h2 className="font-bold text-6xl">About Hungray</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            iusto? Doloribus unde facilis quas harum voluptatum cumque similique
            magnam nisi laudantium, pariatur nostrum, tempora facere temporibus.
            Illo rem soluta quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            accusantium ex harum minima vitae dignissimos aliquid, consequatur
            unde cumque architecto error blanditiis illum sit repellendus nulla,
            explicabo fugit. Porro doloribus nesciunt soluta voluptates earum
            fugit omnis, ipsam excepturi quo esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            accusantium ex harum minima vitae dignissimos aliquid, consequatur
            unde cumque architecto error blanditiis illum sit repellendus nulla,
            explicabo fugit. Porro doloribus nesciunt soluta voluptates earum
            fugit omnis, ipsam excepturi quo esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus ducimus expedita sint est error
            quisquam, aspernatur earum repellat nemo labore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
