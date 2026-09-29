import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 400,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full border border-white/5 shadow-card hover:border-[#915EFF]/40 transition-all'
      >
        <div>
          <div className='relative w-full h-[220px] rounded-xl overflow-hidden'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105'
            />

            <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
              {live_demo_link && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className='bg-gradient-to-r from-[#00cea8] to-[#00a884] w-9 h-9 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-transform'
                  title='Live Demo'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='w-4 h-4 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                    />
                  </svg>
                </div>
              )}

              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-transform border border-white/20'
                title='GitHub Repository'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='flex items-center justify-between gap-2'>
              <h3 className='text-white font-bold text-[22px] hover:text-[#915EFF] transition-colors'>
                {name}
              </h3>
              {live_demo_link && (
                <span className='bg-[#00cea8]/20 border border-[#00cea8]/50 text-[#00cea8] text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1'>
                  <span className='w-1.5 h-1.5 rounded-full bg-[#00cea8] animate-pulse'></span> Live
                </span>
              )}
            </div>
            <p className='mt-3 text-secondary text-[14px] leading-relaxed line-clamp-4'>
              {description}
            </p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='flex flex-wrap gap-2 pt-3 border-t border-white/10'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-medium px-2.5 py-0.5 rounded-md bg-[#151030] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and practical experience through
          real-world implementations. Each project includes a concise description, tech stack tags,
          and links to source code repositories and live interactive platforms.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
