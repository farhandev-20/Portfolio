import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      dateClassName='text-[#dfd9ff] font-semibold text-[15px]'
      iconStyle={{ 
        background: experience.iconBg, 
        boxShadow: "0 0 0 4px #915EFF, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)" 
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <div className='flex items-center justify-between flex-wrap gap-2'>
          <h3 className='text-white text-[22px] font-bold'>{experience.title}</h3>
          <span className='bg-[#915EFF]/20 border border-[#915EFF]/50 text-[#00cea8] text-[12px] font-semibold px-2.5 py-0.5 rounded-full'>
            {experience.category}
          </span>
        </div>
        <p
          className='text-secondary text-[16px] font-medium'
          style={{ margin: "4px 0 0 0" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wide leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey &amp; Milestones
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience &amp; Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
