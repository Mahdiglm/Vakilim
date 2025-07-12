import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  const { currentTheme } = useTheme();
  
  const clientTestimonials = [
    {
      id: 1,
      name: 'دکتر احمد رضایی',
      role: 'مدیرعامل شرکت تولیدی',
      company: 'شرکت صنعتی پارس',
      quote: 'تیم حقوقی وکیلیم در حل اختلاف پیچیده تجاری ما نقش بسیار مهمی ایفا کرد. تخصص و تجربه آن‌ها در حقوق تجارت باعث شد که بتوانیم به سرعت و با کمترین هزینه به نتیجه مطلوب برسیم. بسیار راضی از همکاری هستم.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق تجارت'
    },
    {
      id: 2,
      name: 'خانم سارا محمدی',
      role: 'کارآفرین',
      company: 'استارتاپ تکنولوژی',
      quote: 'وکیل من در پرونده طلاق پیچیده‌ام فوق‌العاده حرفه‌ای عمل کرد. علاوه بر دانش حقوقی بالا، حمایت روحی و راهنمایی‌هایش در طول فرآیند بسیار ارزشمند بود. توانست حقوق من و فرزندم را به بهترین شکل ممکن دفاع کند.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c95d4afb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق خانواده'
    },
    {
      id: 3,
      name: 'مهندس علی حسینی',
      role: 'مدیر فنی',
      company: 'شرکت مهندسی',
      quote: 'در پرونده کیفری من، وکیل مدافع با استراتژی دقیق و ارائه دلایل محکم توانست تبرئه کاملی برای من به همراه داشته باشد. تشکر از تیم وکیلیم که در سخت‌ترین لحظات کنارم بودند و حقیقت را اثبات کردند.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق کیفری'
    },
    {
      id: 4,
      name: 'خانم مریم قاسمی',
      role: 'صاحب املاک',
      company: 'سرمایه‌گذار',
      quote: 'در خرید و فروش چندین ملک تجاری، تیم حقوقی وکیلیم نقش کلیدی در بررسی قراردادها و جلوگیری از مشکلات احتمالی داشت. دقت و سرعت عمل آن‌ها برای من بسیار مهم بود.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق املاک'
    },
    {
      id: 5,
      name: 'دکتر محسن یزدانی',
      role: 'پزشک متخصص',
      company: 'کلینیک تخصصی',
      quote: 'مشاوره حقوقی دریافتی برای راه‌اندازی کلینیک و رعایت قوانین پزشکی بسیار جامع و مفید بود. تیم وکیلیم در تمام مراحل راهنمایی دقیق ارائه داد و من را از مشکلات احتمالی دور نگه داشت.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق پزشکی'
    },
    {
      id: 6,
      name: 'آقای حسن کریمی',
      role: 'کارگر',
      company: 'کارخانه فولاد',
      quote: 'وقتی از سوی کارفرما اخراج شدم، فکر می‌کردم حقی ندارم. اما تیم وکیلیم نشان داد که حقوق کارگری من نقض شده و توانست غرامت مناسبی برای من دریافت کند. از حمایت بی‌دریغشان متشکرم.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      caseType: 'حقوق کار'
    }
  ];

  // Professional animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], 
      } 
    },
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Professional gradient background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `linear-gradient(135deg, ${currentTheme.surfaceDark} 0%, ${currentTheme.secondary} 50%, ${currentTheme.surfaceLight} 100%)` 
        }}
      />
      
      {/* Professional decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: `${currentTheme.primary}20` }}
        />
        <div 
          className="absolute top-1/2 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: `${currentTheme.accent}15` }}
        />
        <div 
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
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
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">
                نظرات موکلین
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
              اعتماد موکلین ما
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
              تجربه موکلین ما در همکاری با تیم حقوقی وکیلیم
            </p>
            <div className="h-1 w-32 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})`,
                boxShadow: `0 0 20px ${currentTheme.primary}40`
              }}
            />
          </motion.div>
        </div>

        {/* Professional testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {clientTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group"
            >
              <div className="card-professional p-8 h-full relative overflow-hidden">
                {/* Professional quote icon */}
                <div className="mb-6">
                  <svg 
                    className="w-10 h-10 opacity-30" 
                    fill="currentColor" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true"
                    style={{ color: currentTheme.primary }}
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                {/* Professional case type badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ 
                      backgroundColor: `${currentTheme.primary}15`,
                      color: currentTheme.primary
                    }}
                  >
                    {testimonial.caseType}
                  </span>
                </div>

                {/* Professional testimonial content */}
                <blockquote className="mb-6">
                  <p className="text-professional leading-relaxed"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Professional rating */}
                <div className="mb-6">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: currentTheme.primary }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Professional client info */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 rtl:mr-0 rtl:ml-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2"
                      style={{ 
                        borderColor: `${currentTheme.primary}30`,
                        filter: 'grayscale(20%)'
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-professional-heading"
                      style={{ color: currentTheme.textPrimary }}
                    >
                      {testimonial.name}
                    </p>
                    <p className="text-sm"
                      style={{ color: currentTheme.textMuted }}
                    >
                      {testimonial.role}
                    </p>
                    <p className="text-xs"
                      style={{ color: currentTheme.textMuted }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Professional accent line */}
                <div 
                  className="absolute top-0 right-0 w-1 h-16 rounded-l-full"
                  style={{ backgroundColor: `${currentTheme.primary}40` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="card-professional p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '۵۰۰+', label: 'موکل راضی', icon: '👥' },
                { number: '۹۸٪', label: 'نرخ موفقیت', icon: '🏆' },
                { number: '۱۵+', label: 'سال تجربه', icon: '⚖️' },
                { number: '۲۴/۷', label: 'پشتیبانی', icon: '📞' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: currentTheme.primary }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium"
                    style={{ color: currentTheme.textMuted }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 