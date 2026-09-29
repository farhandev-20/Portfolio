import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  title,
  issuer,
  category,
  date,
  image,
  description,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[340px] w-full border border-white/5 hover:border-[#915EFF]/50 transition-all flex flex-col justify-between shadow-card group'
  >
    <div>
      <div className='flex items-center justify-between gap-4 mb-4'>
        <div className='w-14 h-14 rounded-2xl overflow-hidden p-1 bg-[#1d1836] border border-[#915EFF]/30 flex justify-center items-center group-hover:scale-110 transition-transform'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <span className='bg-[#915EFF]/20 text-[#00cea8] text-[12px] font-semibold px-3 py-1 rounded-full border border-[#915EFF]/40'>
          {category}
        </span>
      </div>

      <h3 className='text-white font-bold text-[20px] group-hover:text-[#915EFF] transition-colors leading-snug'>
        {title}
      </h3>
      <p className='text-[#dfd9ff] text-[13px] font-medium mt-1'>
        Issued by <span className='text-white font-semibold'>{issuer}</span> • {date}
      </p>

      <p className='text-secondary text-[13px] mt-4 leading-relaxed'>
        {description}
      </p>
    </div>

    <div className='mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-[#00cea8] font-semibold'>
      <span className='flex items-center gap-1.5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.751 3.75 3 3 0 005.305 0 3 3 0 003.75-3.751zm-2.546-4.46a.75.75 0 00-1.214-.883L9.16 12.1 7.354 10.293a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4.026-5.572z" clipRule="evenodd" />
        </svg>
        Verified Credential
      </span>
      <span className='text-secondary text-[11px] font-mono'>Farhan Attar</span>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[24px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px] border border-white/5`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Verified Credentials &amp; Studies</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
