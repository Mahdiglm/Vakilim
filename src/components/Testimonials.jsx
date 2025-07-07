import { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'testimonial1',
      name: 'علی محمدی',
      role: 'کارآفرین',
      quote: 'مشاوره با وکیلیم باعث شد قرارداد کاری من از هرگونه مشکل حقوقی در امان بماند. سرعت و دقت وکلای وکیلیم واقعا ستودنی است.',
    },
    {
      id: 'testimonial2',
      name: 'سارا رضایی',
      role: 'صاحب کسب‌و‌کار',
      quote: 'با کمک وکیلیم توانستم حق خود را در یک پرونده پیچیده بگیرم. هزینه منصفانه و مشاوره دقیق آنها بسیار کمک‌کننده بود.',
    },
    {
      id: 'testimonial3',
      name: 'حسین کریمی',
      role: 'پزشک',
      quote: 'در دعوی حقوقی که داشتم، وکیلیم با حرفه‌ای‌گری تمام مشکل من را حل کرد. قطعا برای مشکلات حقوقی آینده هم سراغ آنها خواهم رفت.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Responsive design - for mobile screens, show one testimonial at a time with navigation
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation for mobile testimonials
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Background decorative element */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نظرات موکلین ما</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        {/* Desktop view - all testimonials in a grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black/10 backdrop-blur-sm border border-gold/5 rounded-lg p-8 relative group hover:border-gold/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-2 text-gold opacity-20 text-5xl font-serif">❝</div>
              <p className="text-gray-300 mb-8 relative z-10">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gold text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view - single testimonial with navigation */}
        <div className="md:hidden">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/10 backdrop-blur-sm border border-gold/5 rounded-lg p-8 relative"
          >
            <div className="absolute -top-4 -right-2 text-gold opacity-20 text-5xl font-serif">❝</div>
            <p className="text-gray-300 mb-8">{testimonials[activeIndex].quote}</p>
            <div>
              <p className="font-bold text-white">{testimonials[activeIndex].name}</p>
              <p className="text-gold text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 