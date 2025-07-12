import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Features = () => {
  const { currentTheme } = useTheme();
  
  const legalServices = [
    {
      id: 1,
      title: 'مشاوره حقوقی تخصصی',
      description: 'مشاوره تخصصی در تمام زمینه‌های حقوقی از سوی وکلای مجرب با بیش از ۱۵ سال تجربه',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
      features: ['مشاوره حضوری و آنلاین', 'تحلیل قانونی پرونده', 'ارائه استراتژی حقوقی']
    },
    {
      id: 2,
      title: 'وکالت در دادگاه',
      description: 'وکالت حرفه‌ای در دعاوی مدنی، کیفری، خانواده، تجاری و اداری با نرخ موفقیت ۹۸٪',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>
      ),
      features: ['تمام محاکم قضایی', 'دیوان عدالت اداری', 'محاکم انتظامی']
    },
    {
      id: 3,
      title: 'تنظیم قراردادها',
      description: 'تنظیم، بررسی و اصلاح قراردادهای حقوقی و تجاری با رعایت کامل قوانین',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>
      ),
      features: ['قراردادهای تجاری', 'قراردادهای املاک', 'قراردادهای کار']
    },
    {
      id: 4,
      title: 'مشاوره شرکت‌ها',
      description: 'مشاوره حقوقی جامع برای شرکت‌ها و کسب‌وکارها در زمینه قراردادها و قوانین تجاری',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      features: ['حقوق تجاری', 'حقوق شرکت‌ها', 'حل اختلافات تجاری']
    },
    {
      id: 5,
      title: 'حقوق خانواده',
      description: 'مشاوره و وکالت در امور خانواده شامل طلاق، نفقه، حضانت و تقسیم اموال',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
      features: ['طلاق و مهریه', 'حضانت فرزندان', 'تقسیم اموال']
    },
    {
      id: 6,
      title: 'حقوق کیفری',
      description: 'دفاع حرفه‌ای در پرونده‌های کیفری و جنایی با تیم متخصص حقوق کیفری',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.548 10.77 8.596 12.828a.75.75 0 00.308 0C16.202 20.52 19.75 15.564 19.75 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08z" clipRule="evenodd" />
        </svg>
      ),
      features: ['دفاع کیفری', 'پرونده‌های جنایی', 'تخلفات قضایی']
    }
  ];

  // Professional animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], 
      } 
    },
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Seamless background that matches Hero transition */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `linear-gradient(180deg, ${currentTheme.surfaceDark} 0%, ${currentTheme.secondary} 40%, ${currentTheme.surfaceDark} 100%)` 
        }}
      />
      
      {/* Smooth transition from Hero section */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 z-[1]"
        style={{ 
          background: `linear-gradient(to bottom, ${currentTheme.surfaceDark} 0%, transparent 100%)` 
        }}
      />
      
      {/* Professional decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20" 
          style={{ backgroundColor: `${currentTheme.primary}20` }}
        />
        <div 
          className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15" 
          style={{ backgroundColor: `${currentTheme.accent}15` }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-10" 
          style={{ backgroundColor: `${currentTheme.primary}10` }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Professional section header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{ 
                backgroundColor: `${currentTheme.primary}0A`,
                borderColor: `${currentTheme.primary}20`,
                color: currentTheme.primary
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">
                خدمات حقوقی
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-professional-heading"
          >
            <span className="text-transparent bg-clip-text"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${currentTheme.textPrimary} 0%, ${currentTheme.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              خدمات حقوقی جامع
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: currentTheme.textSecondary }}
            >
              با تیم متخصص وکلا و مشاوران حقوقی، مجموعه‌ای کامل از خدمات حقوقی را ارائه می‌دهیم
            </p>
            <div className="h-1 w-32 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})`,
                boxShadow: `0 0 20px ${currentTheme.primary}40`
              }}
            />
          </motion.div>
        </div>

        {/* Professional services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="grid"
          aria-label="فهرست خدمات حقوقی"
        >
          {legalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
              role="gridcell"
            >
              <div className="card-professional p-8 h-full relative overflow-hidden" 
                   tabIndex="0"
                   role="article"
                   aria-labelledby={`service-title-${service.id}`}
                   aria-describedby={`service-desc-${service.id}`}
              >
                {/* Professional icon container */}
                <div className="mb-6">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl relative group-hover:scale-110 transition-transform duration-300" 
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.primary}20, ${currentTheme.accent}15)`,
                      border: `1px solid ${currentTheme.primary}30`
                    }}
                  >
                    <span style={{ color: currentTheme.primary }}>
                      {service.icon}
                    </span>
                  </div>
                </div>
                
                {/* Professional content */}
                <div className="mb-6">
                  <h3 id={`service-title-${service.id}`} 
                      className="text-xl font-bold mb-3 group-hover:text-theme transition-colors duration-300"
                      style={{ color: currentTheme.textPrimary }}
                  >
                    {service.title}
                  </h3>
                  <p id={`service-desc-${service.id}`} 
                     className="text-professional leading-relaxed mb-4"
                     style={{ color: currentTheme.textSecondary }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Professional features list */}
                <div className="mb-6">
                  <ul className="space-y-2" role="list" aria-label="ویژگی‌های خدمت">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start" role="listitem">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0"
                          style={{ backgroundColor: currentTheme.primary }}
                          aria-hidden="true"
                        />
                        <span className="text-sm"
                          style={{ color: currentTheme.textMuted }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Professional call-to-action */}
                <div className="mt-auto">
                  <button 
                    className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" 
                    style={{ color: currentTheme.primary }}
                    aria-label={`درخواست مشاوره برای ${service.title}`}
                  >
                    درخواست مشاوره
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 transform rotate-180" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {/* Professional card accent */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-5"
                  style={{ backgroundColor: currentTheme.primary }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Professional call-to-action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="card-professional p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: currentTheme.textPrimary }}
            >
              آماده همکاری با شما هستیم
            </h3>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ color: currentTheme.textSecondary }}
            >
              برای دریافت مشاوره رایگان و بررسی پرونده خود، همین الان با ما تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-professional px-8 py-3 rounded-full font-semibold"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
                  color: currentTheme.textPrimary
                }}
              >
                مشاوره رایگان
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-professional px-8 py-3 rounded-full font-semibold border"
                style={{ 
                  backgroundColor: 'transparent',
                  color: currentTheme.primary,
                  borderColor: currentTheme.primary
                }}
              >
                ۰۲۱-۱۲۳۴۵۶۷۸
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Smooth transition to Testimonials section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-[1]"
        style={{ 
          background: `linear-gradient(to bottom, transparent 0%, ${currentTheme.surfaceDark} 100%)` 
        }}
      />
    </section>
  );
};

export default Features; 