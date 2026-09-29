import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatusMessage({ text: "Please fill in all fields before sending.", isError: true });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: "", isError: false });

    // Try sending email if EmailJS environment keys are configured
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: personalInfo.name,
            from_email: form.email,
            to_email: personalInfo.email,
            message: form.message,
          },
          publicKey
        )
        .then(
          () => {
            setLoading(false);
            setStatusMessage({
              text: `Thank you, ${form.name}! Your message has been sent to Farhan.`,
              isError: false,
            });
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            // Fallback opening mail client
            window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
            setStatusMessage({
              text: "Redirecting to your mail client to send the message directly to Farhan...",
              isError: false,
            });
          }
        );
    } else {
      // Direct mailto fallback when EmailJS keys are not configured yet
      setLoading(false);
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`;
      setStatusMessage({
        text: "Thank you! Opening your email app to send directly to Farhan Attar.",
        isError: false,
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-3xl border border-white/5'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Farhan.</h3>

        {/* Direct Contact Info Pills */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <a
            href={`mailto:${personalInfo.email}`}
            className='flex items-center gap-3 p-3.5 bg-tertiary/70 rounded-xl hover:bg-tertiary transition-colors border border-white/5'
          >
            <div className='w-9 h-9 rounded-lg bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] font-bold text-lg'>
              ✉️
            </div>
            <div>
              <p className='text-secondary text-[11px] uppercase tracking-wider font-semibold'>Email</p>
              <p className='text-white text-[13px] font-medium truncate'>{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className='flex items-center gap-3 p-3.5 bg-tertiary/70 rounded-xl hover:bg-tertiary transition-colors border border-white/5'
          >
            <div className='w-9 h-9 rounded-lg bg-[#00cea8]/20 flex items-center justify-center text-[#00cea8] font-bold text-lg'>
              📞
            </div>
            <div>
              <p className='text-secondary text-[11px] uppercase tracking-wider font-semibold'>Phone</p>
              <p className='text-white text-[13px] font-medium'>{personalInfo.phone}</p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 p-3.5 bg-tertiary/70 rounded-xl hover:bg-tertiary transition-colors border border-white/5'
          >
            <div className='w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-lg'>
              🐙
            </div>
            <div>
              <p className='text-secondary text-[11px] uppercase tracking-wider font-semibold'>GitHub</p>
              <p className='text-white text-[13px] font-medium'>github.com/farhandev-20</p>
            </div>
          </a>

          <div className='flex items-center gap-3 p-3.5 bg-tertiary/70 rounded-xl border border-white/5'>
            <div className='w-9 h-9 rounded-lg bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] font-bold text-lg'>
              📍
            </div>
            <div>
              <p className='text-secondary text-[11px] uppercase tracking-wider font-semibold'>Location</p>
              <p className='text-white text-[13px] font-medium'>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[14px]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-transparent focus:border-[#915EFF] transition-colors font-medium text-[14px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[14px]'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-transparent focus:border-[#915EFF] transition-colors font-medium text-[14px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[14px]'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Let Farhan know how he can help or discuss opportunities..."
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-transparent focus:border-[#915EFF] transition-colors font-medium text-[14px]'
            />
          </label>

          {statusMessage.text && (
            <p className={`text-[13px] ${statusMessage.isError ? "text-red-400" : "text-[#00cea8]"}`}>
              {statusMessage.text}
            </p>
          )}

          <button
            type='submit'
            className='bg-gradient-to-r from-[#915EFF] to-[#703bf7] hover:opacity-90 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915eff]/30 transition-all cursor-pointer'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
