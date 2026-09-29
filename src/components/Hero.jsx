import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='pointer-events-auto'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF] bg-gradient-to-r from-[#915EFF] to-[#00cea8] bg-clip-text text-transparent'>Farhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
            Computer Engineering Student &amp; Web Developer <br className='sm:block hidden' />
            Crafting responsive web apps, database architectures, and intuitive UI/UX experiences.
          </p>

          <div className='mt-5 flex flex-wrap gap-4 items-center'>
            <a
              href='#projects'
              className='bg-gradient-to-r from-[#915EFF] to-[#703bf7] hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-[#915eff]/30 text-[15px]'
            >
              Explore Projects
            </a>
            <a
              href='#contact'
              className='bg-[#151030]/80 hover:bg-[#1f1745] text-white border border-[#915EFF]/40 font-semibold px-6 py-2.5 rounded-xl transition-all backdrop-blur-sm text-[15px]'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-8 bottom-28 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
