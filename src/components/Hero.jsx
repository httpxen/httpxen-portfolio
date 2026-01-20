import { useRef, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Drei.png";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const container = (direction = "top", delay = 0) => ({
  hidden: { 
    y: direction === "top" ? -100 : 100, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      delay, 
      ease: "easeInOut" 
    }
  },
});

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const formRef = useRef();

  const titleInView = useInView(titleRef, { threshold: 0.5, once: true });
  const subtitleInView = useInView(subtitleRef, { threshold: 0.5, once: true });
  const paraInView = useInView(paraRef, { threshold: 0.5, once: true });
  const buttonInView = useInView(buttonRef, { threshold: 0.5, once: true });
  const imageInView = useInView(imageRef, { threshold: 0.5, once: true });
  const mobileButtonInView = useInView(mobileButtonRef, { threshold: 0.5, once: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const SERVICE_ID = 'service_44ear1e';
  const TEMPLATE_ID = 'template_7vncj2l';
  const AUTO_REPLY_TEMPLATE_ID = 'template_fc2wfkk';
  const PUBLIC_KEY = 'Kg_A5OPvzVw-ptIG2';

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const userName = formRef.current.user_name.value;
    const userEmail = formRef.current.user_email.value;
    const userMessage = formRef.current.message.value;

    console.log('Form values for auto-reply:', { 
      to_email: userEmail, 
      user_name: userName, 
      message: userMessage 
    });

    try {
      console.log('Sending contact email...');
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      console.log('Contact email sent successfully!');

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Sending auto-reply...');
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          to_email: userEmail,
          user_name: userName,
          message: userMessage
        },
        PUBLIC_KEY
      );

      console.log('Auto-reply sent successfully!');
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email send error details:', error);
      let errorMsg = 'Something went wrong. Please try again.';
      if (error.status === 400 || error.status === 422) {
        errorMsg = 'Template setup issue (e.g., To Email field). Check EmailJS dashboard.';
      } else if (error.status === 401) {
        errorMsg = 'Invalid public key or auth issue.';
      } else if (error.status === 429) {
        errorMsg = 'Rate limit hit. Try again in a second.';
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus('');
    setIsSubmitting(false);
  };

  return (
    <div className="pb-24 lg:pb-20 lg:mb-35 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-wrap max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <motion.h1
              ref={titleRef}
              variants={container("top", 0)}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-white"
            >
              Andrei Opulencia
            </motion.h1>

            <motion.span
              ref={subtitleRef}
              variants={container("top", 0.2)}
              initial="hidden"
              animate={subtitleInView ? "visible" : "hidden"}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-2xl tracking-tight font-medium"
            >
              Junior Web Developer
            </motion.span>

            <motion.p
              ref={paraRef}
              variants={container("top", 0.4)}
              initial="hidden"
              animate={paraInView ? "visible" : "hidden"}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-200 text-xs sm:text-sm"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              ref={buttonRef}
              variants={container("top", 0.6)}
              initial="hidden"
              animate={buttonInView ? "visible" : "hidden"}
              className="mt-4 hidden lg:flex gap-4"
            >
              <a
                href="Opulencia_CV.pdf"
                download="Opulencia_CV.pdf"
                aria-label="Download Andrei Opulencia's CV"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                Download CV
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Open contact form"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex flex-col items-center">
            <div className="relative w-[200px] sm:w-[300px] lg:w-[400px]">
              <motion.img
                ref={imageRef}
                initial={{ y: 100, opacity: 0 }}
                animate={imageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                src={profilePic}
                alt="Andrei Opulencia profile picture"
                className="relative w-full h-auto rounded-lg object-cover filter brightness-75 shadow-md"
              />
            </div>

            <motion.div
              ref={mobileButtonRef}
              variants={container("bottom", 0.6)}
              initial="hidden"
              animate={mobileButtonInView ? "visible" : "hidden"}
              className="mt-6 flex flex-col sm:flex-row gap-4 lg:hidden w-full max-w-md"
            >
              <a
                href="Opulencia_CV.pdf"
                download="Opulencia_CV.pdf"
                aria-label="Download Andrei Opulencia's CV"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 text-center"
              >
                Download CV
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Open contact form"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 text-center"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM MODAL */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-end lg:items-center justify-center z-50 lg:pt-0 pt-16 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag  // Enable dragging in both x and y directions
            dragElastic={0.1}  // Slight elasticity for smoother feel
            whileDrag={{ cursor: "grabbing" }}  // Changes cursor to closed hand while dragging
            className="relative bg-gray-900/95 backdrop-blur-lg rounded-t-xl lg:rounded-xl p-6 lg:p-8 w-full max-w-md mx-4 border border-gray-700/50 shadow-2xl max-h-[90vh] overflow-y-auto cursor-grab select-none"  // cursor-grab for open hand, select-none to prevent text selection during drag
            onClick={(e) => e.stopPropagation()}
          >
            {/* Optional: Add a drag handle bar for better UX */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-gray-600 rounded-full cursor-grab"></div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 tracking-tight text-center">Contact Me</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center text-sm font-medium">
                Thank you! Your message has been sent. I'll reply soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center text-sm font-medium">
                Something went wrong. Please try again or email me directly. Check console for details.
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Name"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="e.g., john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            <button
              onClick={closeModal}
              className="mt-4 w-full text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;