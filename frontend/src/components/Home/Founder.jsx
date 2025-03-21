import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.png";

const Founder = () => {
const animation  = {
    initial: {x: "-100%", opacity: 0},
    whileInView: {x: 0, opacity: 1}
}

  return (
    <section className="founder">
      <motion.div {...animation}>
        <img src={founder} alt="Founder" height={200} />
<<<<<<< HEAD
        <h3>Pragya and Nishi</h3>
        <p>
          Hey Everyone, we are Pragya and Nishi Sharma, the founder of
          <br/> 
          <span>THE CAKE SHOP</span> 
          <br />
          Our aim is to create the most tastiest cakes on the planet.
=======
        <h3>Pragya Verma</h3>
        <p>
          Hey Everyone, I am Pragya Verma, the founder of
          <br/> 
          <span>THE CAKE SHOP</span> 
          <br />
          I aim to create the most tastiest cakes on the planet.
>>>>>>> 37707f8cda4d141e6671ce2afb5bf01db541dc9a
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;

