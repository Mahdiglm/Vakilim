import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  
  // Professional animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Professional legal footer links
  const legalServices = [
    {
      title: 'خدمات حقوقی',
      links: [
        { name: 'مشاوره حقوقی', href: '#services' },
        { name: 'وکالت در دادگاه', href: '#services' },
        { name: 'تنظیم قراردادها', href: '#services' },
        { name: 'حل اختلافات', href: '#services' },
      ],
    },
    {
      title: 'زمینه‌های تخصصی',
      links: [
        { name: 'حقوق تجارت', href: '#services' },
        { name: 'حقوق خانواده', href: '#services' },
        { name: 'حقوق کیفری', href: '#services' },
        { name: 'حقوق املاک', href: '#services' },
      ],
    },
    {
      title: 'اطلاعات مهم',
      links: [
        { name: 'درباره ما', href: '#about' },
        { name: 'تماس با ما', href: '#contact' },
        { name: 'وکلای ما', href: '#lawyers' },
        { name: 'سوالات متداول', href: '#faq' },
      ],
    },
    {
      title: 'قوانین و مقررات',
      links: [
        { name: 'حریم خصوصی', href: '#privacy' },
        { name: 'شرایط استفاده', href: '#terms' },
        { name: 'اخلاق حرفه‌ای', href: '#ethics' },
        { name: 'گزارش تخلف', href: '#report' },
      ],
    },
  ];

  // Professional social media links
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.23-.08-.32-.09-.1-.25-.07-.36-.04-.15.05-1.88 1.2-3.57 2.22-.34.2-.65.3-.93.3-.3-.01-.88-.17-1.31-.31-.53-.17-1.07-.35-.91-.85.05-.17.42-.34 1.09-.52.93-.25 2.01-.64 3.08-1 2.94-1.02 3.94-1.34 4.79-1.13.17.04.39.16.51.3.12.14.15.31.13.48z" />
        </svg>
      ),
    },
  ];

  return (
    <footer 
      className="relative overflow-hidden" 
      id="contact"
      style={{ backgroundColor: currentTheme.secondary }}
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5" 
          style={{ backgroundColor: currentTheme.primary }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: currentTheme.accent }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-padding border-b"
          style={{ borderColor: `${currentTheme.primary}20` }}
        >
          {/* Professional header section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }}
                  >
                    وکیلیم
                  </span>
                </h3>
                <p className="text-professional leading-relaxed mb-6"
                  style={{ color: currentTheme.textSecondary }}
                >
                  موسسه حقوقی وکیلیم با بیش از ۱۵ سال تجربه در ارائه خدمات حقوقی تخصصی، همیشه در کنار شما قرار دارد. تیم ما متشکل از وکلای با تجربه و مشاوران حقوقی متخصص در تمام زمینه‌های حقوق است.
                </p>
                
                {/* Professional credentials */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3"
                      style={{ color: currentTheme.primary }}
                    >
                      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.548 10.77 8.596 12.828a.75.75 0 00.308 0C16.202 20.52 19.75 15.564 19.75 9.75a12.74 12.74 0 00-.635-4.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium"
                      style={{ color: currentTheme.textMuted }}
                    >
                      عضو رسمی کانون وکلای دادگستری
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3"
                      style={{ color: currentTheme.primary }}
                    >
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium"
                      style={{ color: currentTheme.textMuted }}
                    >
                      مجوز رسمی فعالیت حقوقی
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 text-professional-heading"
                style={{ color: currentTheme.textPrimary }}
              >
                اطلاعات تماس
              </h4>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 mt-1 flex-shrink-0"
                    style={{ color: currentTheme.primary }}
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textSecondary }}>
                      ۰۲۱-۸۸۷۷۶۶۵۵
                    </p>
                    <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                      تلفن مشاوره (۲۴ ساعته)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 mt-1 flex-shrink-0"
                    style={{ color: currentTheme.primary }}
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textSecondary }}>
                      info@vakilim.com
                    </p>
                    <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                      ایمیل رسمی موسسه
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 mt-1 flex-shrink-0"
                    style={{ color: currentTheme.primary }}
                  >
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textSecondary }}>
                      تهران، خیابان ولیعصر، کوچه دانشگاه، پلاک ۱۲۳
                    </p>
                    <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                      دفتر مرکزی موسسه حقوقی
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter signup */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 text-professional-heading"
                style={{ color: currentTheme.textPrimary }}
              >
                اطلاعیه‌های حقوقی
              </h4>
              
              <p className="text-professional mb-6"
                style={{ color: currentTheme.textSecondary }}
              >
                برای دریافت آخرین اخبار حقوقی، تغییرات قوانین و مشاوره‌های رایگان، ایمیل خود را وارد کنید.
              </p>
              
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="آدرس ایمیل شما"
                    className="w-full px-4 py-3 rounded-lg border text-professional focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${currentTheme.surfaceLight}80`,
                      borderColor: `${currentTheme.primary}30`,
                      color: currentTheme.textPrimary,
                      '&:focus': {
                        borderColor: currentTheme.primary,
                        backgroundColor: `${currentTheme.surfaceLight}CC`
                      }
                    }}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full btn-professional px-6 py-3 rounded-lg font-semibold"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
                    color: currentTheme.textPrimary
                  }}
                >
                  عضویت در خبرنامه
                </button>
              </form>
            </motion.div>
          </div>

          {/* Professional footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {legalServices.map((section, index) => (
              <motion.div 
                key={section.title} 
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-professional-heading"
                  style={{ color: currentTheme.textPrimary }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-sm text-professional transition-colors duration-300 hover:text-theme" 
                        style={{ color: currentTheme.textMuted }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional bottom section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Professional social links */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6 rtl:space-x-reverse"
            >
              <span className="text-sm font-medium"
                style={{ color: currentTheme.textMuted }}
              >
                ما را دنبال کنید:
              </span>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ 
                      color: currentTheme.textMuted,
                      backgroundColor: `${currentTheme.primary}10`,
                      '&:hover': {
                        color: currentTheme.primary,
                        backgroundColor: `${currentTheme.primary}20`
                      }
                    }}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
            
            {/* Professional copyright */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="text-sm text-professional"
                style={{ color: currentTheme.textMuted }}
              >
                © {new Date().getFullYear()} موسسه حقوقی وکیلیم. تمامی حقوق محفوظ است.
              </p>
              <p className="text-xs mt-1"
                style={{ color: currentTheme.textMuted }}
              >
                طراحی و توسعه با ❤️ برای عدالت
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 