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
        <svg
          className="background"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="3000"
          height="750"
        >
          <g>
            <rect
              width="3000"
              height="750"
              x="0"
              y="0"
              fill="rgba(15, 34, 38, 1)"
            ></rect>
            <motion.path
              initial={{ x: 0 }}
              animate={{ x: -700 }}
              transition={{
                duration: 100,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0,
                yoyo: true,
              }}
              d="M3250 750L0 750 L0 474.52Q85.68 310.2, 250 395.88Q369.38 365.25, 400 484.63Q482.32 416.95, 550 499.28Q639.75 339.03, 800 428.78Q863.09 341.87, 950 404.96Q1017.94 322.9, 1100 390.84Q1240.95 281.79, 1350 422.75Q1503.82 326.57, 1600 480.39Q1731.35 361.74, 1850 493.09Q1887.83 380.92, 2000 418.75Q2154.63 323.38, 2250 478.01Q2312.12 390.13, 2400 452.24Q2463.86 366.11, 2550 429.97Q2598.43 328.4, 2700 376.84Q2781.05 307.89, 2850 388.95Q2982.95 371.89, 3000 504.84Q3082.34 337.17, 3250 419.51z"
              fill="rgba(47, 71, 71, 0.3)"
            ></motion.path>
            <motion.path
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 120,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0,
                yoyo: true,
              }}
              d="M3050 750L0 750 L0 481.47Q78.57 410.05, 150 488.62Q260.06 448.68, 300 558.75Q410.3 419.05, 550 529.34Q631.32 460.66, 700 541.99Q806.19 398.18, 950 504.37Q1088.59 392.96, 1200 531.56Q1332.67 414.23, 1450 546.91Q1551.67 398.58, 1700 500.24Q1806.6 456.84, 1850 563.44Q1881.94 445.38, 2000 477.33Q2086.55 413.88, 2150 500.43Q2299.94 400.37, 2400 550.31Q2531.36 431.66, 2650 563.02Q2711.86 474.88, 2800 536.73Q2900.62 387.35, 3050 487.96z"
              fill="rgba(70, 91, 92, 0.7)"
            ></motion.path>
            <motion.path
              initial={{ x: 0 }}
              animate={{ x: -700 }}
              transition={{
                duration: 100,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0,
                yoyo: true,
              }}
              d="M3150 750L0 750 L0 685.58Q126.86 562.44, 250 689.31Q362.32 551.63, 500 663.94Q541.76 555.71, 650 597.47Q752.81 550.28, 800 653.08Q890.64 593.72, 950 684.36Q985.21 569.57, 1100 604.77Q1259.07 513.84, 1350 672.9Q1374.73 547.63, 1500 572.36Q1585.13 507.5, 1650 592.63Q1754.62 547.25, 1800 651.87Q1867.02 568.89, 1950 635.91Q2010.66 546.58, 2100 607.24Q2209.78 467.01, 2350 576.79Q2514.8 491.59, 2600 656.39Q2681.14 587.53, 2750 668.67Q2775.41 544.08, 2900 569.48Q3031.86 451.35, 3150 583.21z"
              fill="rgba(93, 112, 112, 1)"
            ></motion.path>
            <path
              d="M3250 750L0 750 L0 774.05Q18.79 642.84, 150 661.62Q286.21 547.83, 400 684.04Q503.25 637.29, 550 740.55Q664.62 605.16, 800 719.78Q850.94 620.72, 950 671.66Q1090.48 562.14, 1200 702.62Q1305.82 658.44, 1350 764.26Q1454.63 618.89, 1600 723.53Q1713.26 586.78, 1850 700.04Q1949.37 649.4, 2000 748.77Q2118.09 616.86, 2250 734.95Q2301.44 636.39, 2400 687.83Q2521.84 659.67, 2550 781.52Q2586.92 668.44, 2700 705.36Q2782.06 637.42, 2850 719.48Q2912.66 632.14, 3000 694.8Q3151.9 596.7, 3250 748.6z"
              fill="white"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1014">
              <rect width="3000" height="750" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
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
