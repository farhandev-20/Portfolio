import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, personalInfo, technicalSkills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[260px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[22px] shadow-card h-full'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[22px] py-6 px-6 min-h-[300px] flex justify-between items-center flex-col text-center'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[19px] font-bold mt-3 leading-snug'>
          {title}
        </h3>

        <p className='text-secondary text-[13px] mt-2 leading-relaxed'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-4xl leading-[30px] space-y-4'
      >
        <p>
          I am a <span className='text-white font-semibold'>Computer Engineering student</span> graduating in 2027 from{" "}
          <span className='text-[#915EFF] font-semibold'>{personalInfo.college}</span> (CGPA: <span className='text-[#00cea8] font-bold'>{personalInfo.cgpa}</span>) with hands-on experience in software and web application development, database management, and UI/UX design.
        </p>
        <p>
          Proficient in <span className='text-white font-medium'>Python, JavaScript, SQL, HTML5, CSS3, MySQL, MongoDB, Git, and GitHub</span>. I have developed interactive web applications, an AI-powered interview practice platform, and a database-driven smart parking allocation system, alongside completing a professional UI/UX internship at <span className='text-[#915EFF] font-semibold'>Satyra IT LLP</span>.
        </p>
        <p>
          Seeking a <span className='text-white font-semibold'>Graduate Trainee</span> opportunity to apply programming, problem-solving, and software development skills while contributing meaningfully to engineering projects.
        </p>
      </motion.div>

      {/* Quick Skills Pills */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className='mt-8 flex flex-wrap gap-2.5 max-w-4xl'
      >
        {technicalSkills.coreAreas.map((area, idx) => (
          <span
            key={idx}
            className='bg-[#1d1836] border border-[#915EFF]/30 text-white text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm'
          >
            {area}
          </span>
        ))}
      </motion.div>

      <div className='mt-14 flex flex-wrap gap-8 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
