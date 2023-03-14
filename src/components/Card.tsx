import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Members from "../Data/Members.json";
import "./Card.css";

interface Props {
  variants: any;
  ref: any;
}

export default function Card({ variants, ref }: Props) {
  const [cards, setCards] = useState(
    Members.map((member) => ({ ...member, plus: true }))
  );

  const handleClick = (index: number) => {
    const updatedCards = [...cards];
    updatedCards[index].plus = !updatedCards[index].plus;
    setCards(updatedCards);
  };
  return (
    <>
      {cards.map((member, index) => {
        return (
          <motion.div className="wrapper" ref={ref} variants={variants}>
            <div
              className={index % 2 === 0 ? "card even" : "card odd"}
              key={index}
            >
              <div
                className="photo"
                style={{
                  background: `url(${member.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="info">
                <div className="name">{member.name}</div>
                <div className="designation">{member.designation}</div>
              </div>
              <button
                onClick={() => {
                  handleClick(index);
                }}
              >
                <motion.div
                  animate={{ rotate: member.plus ? 0 : 180 }}
                  transition={{ bounce: 0 }}
                >
                  {member.plus ? (
                    <FaPlus className="plus" />
                  ) : (
                    <FaMinus className="minus" />
                  )}
                </motion.div>
              </button>
            </div>
            {member.plus ? null : (
              <div className="detail">
                <div>Email: {member.Email}</div>
                <div>{member.detail}</div>
              </div>
            )}
          </motion.div>
        );
      })}
    </>
  );
}
