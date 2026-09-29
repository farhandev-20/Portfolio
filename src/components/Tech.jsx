import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technicalSkills } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>What I bring to the table</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      {/* Categorized Skills Grid */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      >
        <div className='bg-[#1d1836] p-5 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-colors shadow-lg'>
          <h3 className='text-[#00cea8] font-bold text-[17px] mb-3 flex items-center gap-2'>
            <span>💻</span> Programming
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.programming.map((skill) => (
              <span key={skill} className='bg-tertiary text-white text-[13px] px-3 py-1 rounded-lg'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-[#1d1836] p-5 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-colors shadow-lg'>
          <h3 className='text-[#915EFF] font-bold text-[17px] mb-3 flex items-center gap-2'>
            <span>🌐</span> Web Development
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.webDevelopment.map((skill) => (
              <span key={skill} className='bg-tertiary text-white text-[13px] px-3 py-1 rounded-lg'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-[#1d1836] p-5 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-colors shadow-lg'>
          <h3 className='text-[#ff8a00] font-bold text-[17px] mb-3 flex items-center gap-2'>
            <span>🗄️</span> Databases
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.databases.map((skill) => (
              <span key={skill} className='bg-tertiary text-white text-[13px] px-3 py-1 rounded-lg'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-[#1d1836] p-5 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-colors shadow-lg'>
          <h3 className='text-[#e269c7] font-bold text-[17px] mb-3 flex items-center gap-2'>
            <span>🛠️</span> Tools &amp; Design
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.tools.map((skill) => (
              <span key={skill} className='bg-tertiary text-white text-[13px] px-3 py-1 rounded-lg'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3D Floating Tech Balls */}
      <div className='mt-16 flex flex-row flex-wrap justify-center gap-8'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center' key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-secondary text-[12px] font-medium mt-1'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
