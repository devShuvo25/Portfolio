import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
          formRef.current.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      }, (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
          console.error('EmailJS Error:', error.text);
      });
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-light-300 max-w-xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">

                <a href="mailto:shuvomallik999@gmail.com" className="flex items-start gap-4 group cursor-pointer hover:bg-dark-700/50 p-2 rounded-lg transition-colors -mx-2">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">Email Me</h4>
                    <p className="text-light-300">shuvomallik999@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/8801610801482" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer hover:bg-dark-700/50 p-2 rounded-lg transition-colors -mx-2">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-secondary transition-colors">WhatsApp Me</h4>
                    <p className="text-light-300">+8801610801482</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Location</h4>
                    <p className="text-light-300">Khulna, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-lg"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-2 gap-6 relative">
                 <div className="relative">
                    <input type="text" name="first_name" placeholder="First Name" required className="w-full bg-dark-900 text-white border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                 </div>
                 <div className="relative">
                    <input type="text" name="last_name" placeholder="Last Name" required className="w-full bg-dark-900 text-white border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                 </div>
              </div>
              
              <div>
                <input type="email" name="user_email" placeholder="Email Address" required className="w-full bg-dark-900 text-white border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <textarea name="message" rows="4" placeholder="Your Message" required className="w-full bg-dark-900 text-white border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
              </div>
              
              {status.message && (
                  <div className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                      {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                      <span className="text-sm font-medium">{status.message}</span>
                  </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
