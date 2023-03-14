import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import "./Home.css";
import ScrollToTop from "../components/ScrollToTop";
import ReadMore from "../components/ReadMore";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const messageVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    document.title = "Home - Jnu Botany";
  }, []);

  return (
    <>
      <section className="main home">
        <motion.div
          className="textbox"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h4 className="h4" variants={itemVariants}>
            Welcome to
          </motion.h4>
          <motion.h2
            className="h2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Department</span>
            <span>of</span>
            <span>Botany,</span>
          </motion.h2>
          <motion.h4 variants={itemVariants}>Jagannath University</motion.h4>
          <motion.p variants={itemVariants}>
            "Botany is the art of insulting flowers in Greek and Latin."_
            Alphonse Karr
          </motion.p>
        </motion.div>
        <div
          className="comingSoon"
          style={{ backgroundImage: "url(/images/under.png)" }}
        ></div>
      </section>
      <section className="content ">
        <motion.div
          ref={ref}
          className="message"
          variants={messageVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, bounce: 0 }}
        >
          <div className="image">
            <img src="/images/sir/shahriar.jfif" alt="Chairman" />
            <h4>Dr. Shahriar Ahmad</h4>
          </div>
          <div className="text">
            <h3>Message from the Chairman</h3>
            <ReadMore>
              Welcome you to the Department of Botany, Jagannath University,
              Dhaka, Bangladesh. I like to express my sincere thanks and
              appreciation to you and your parents/guardians for getting
              admission to this department. Now, you are one of the valued
              members of this department. With a wide range of courses, offered
              by the talent and energetic faculty members, we, here, strive to
              provide our students with an effective educational experience to
              create and apply the highest form of academic excellence. Faculty
              members of this department are conducting researches on UGC and
              government-funded projects. Some teachers are doing research
              leading to a Ph.D. in reputed universities of home and abroad.
              They have published their research findings in national and
              international journals. They are also actively engaged in various
              professional organizations to serve the society and academic
              community. I encourage you to begin to consider the use of your
              time to flourish your talents and merits. Good grades and results
              are a stepping stone towards a good job and eventually living a
              standard life. I hope you would devote yourselves to serve your
              community, humanity and country. I think you will define you and
              write the life story of Jagannath chapter with pride and honor. I
              can assure that you will find your teachers, staff and senior
              students as passionate, friendly, and cooperative. You will be a
              unique example for others. I am looking forward to having your
              education, behavior, belongingness to a positive change. I hope
              you will do your best and you will be the best.
            </ReadMore>
          </div>
        </motion.div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}
