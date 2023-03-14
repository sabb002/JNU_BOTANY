import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import ReadMore from "../components/ReadMore";
import ScrollToTop from "../components/ScrollToTop";
import "./Faculty.css";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      bounce: 0,
    },
  },
};

const cardVariants = {
  hidden: { x: -25, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
    },
  },
};

export default function Faculty() {
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
    document.title = "Faculty - Jnu Botany";
  }, []);
  return (
    <>
      <section className="main faculty">
        <ImageSlider />
      </section>

      <section className="overview">
        <div className="textbox">
          <h3 className="title">Overview</h3>
          <ReadMore>
            Department of Botany has started its journey since the establishment
            of the University with the aim of development of highly qualified
            Botanists/ Plant Scientists who will be responsible for the
            development of environmental and social issues for our livings and
            surroundings. Improving crops and food products, conservation of
            plant and natural resources, pest control and gene-modified
            organisms, aquatic flora and climate related issues are the main
            vision of the department. Most promising aspects of plant science
            are covered at the department, both in education and research. We
            interact with scientists in the disciplines of Zoology, Chemistry,
            Statistics and Earth Sciences and collaborate across boundaries to
            design new experiments and find innovative ideas. Our premises and
            infrastructure are modern and include almost everything a plant
            scientist might need. Co-operations are available both locally and
            nationally in government, private industry and research facilities.
          </ReadMore>
        </div>
      </section>

      <section className="members">
        <div className="image">
          <img src="/images/gif/faculty.gif" alt="" />
        </div>
        <h3 className="title">Faculty Members</h3>
        <motion.div
          ref={ref}
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Card ref={ref} variants={cardVariants} />
        </motion.div>
      </section>
      <ScrollToTop />
    </>
  );
}
