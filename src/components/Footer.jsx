import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  
  // Animation variants
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

  // Footer links and data
  const footerLinks = [
    {
      title: 'خدمات حقوقی',
      links: [
        { name: 'مشاوره حقوقی', href: '#' },
        { name: 'وکالت دعاوی', href: '#' },
        { name: 'تنظیم قراردادها', href: '#' },
        { name: 'داوری حقوقی', href: '#' },
      ],
    },
    {
      title: 'درباره ما',
      links: [
        { name: 'تیم وکیلیم', href: '#' },
        { name: 'تماس با ما', href: '#' },
        { name: 'همکاری با ما', href: '#' },
        { name: 'سوالات متداول', href: '#' },
      ],
    },
    {
      title: 'قوانین',
      links: [
        { name: 'حریم خصوصی', href: '#' },
        { name: 'شرایط استفاده', href: '#' },
        { name: 'سیاست بازپرداخت', href: '#' },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
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
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.23-.08-.32-.09-.1-.25-.07-.36-.04-.15.05-1.88 1.2-3.57 2.22-.34.2-.65.3-.93.3-.3-.01-.88-.17-1.31-.31-.53-.17-1.07-.35-.91-.85.05-.17.42-.34 1.09-.52.93-.25 2.01-.64 3.08-1 2.94-1.02 3.94-1.34 4.79-1.13.17.04.39.16.51.3.12.14.15.31.13.48z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer 
      className="relative overflow-hidden" 
      id="contact"
      style={{ background: currentTheme.secondary }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-50"
          style={{ background: `${currentTheme.primary}08` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40"
          style={{ background: `${currentTheme.primary}08` }}
        ></div>
      </div>

      <div className="container-custom relative z-10 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pb-8 mb-8"
          style={{ borderBottom: `1px solid ${currentTheme.primary}1A` }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {/* Logo and description */}
            <motion.div variants={itemVariants} className="col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold gradient-text">وکیلیم</span>
              </div>
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: currentTheme.textSecondary }}
              >
                وکیلیم مجموعه‌ای از وکلا و مشاوران حقوقی برجسته است که با استفاده از فناوری‌های نوین، خدمات حقوقی را به شیوه‌ای جدید ارائه می‌دهد.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="transition-colors duration-300"
                    style={{ 
                      color: `${currentTheme.primary}B3`,
                      ':hover': { color: currentTheme.primary }
                    }}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer link columns */}
            {footerLinks.map((column) => (
              <motion.div key={column.title} variants={itemVariants} className="flex flex-col">
                <h3 
                  className="font-semibold mb-4 relative inline-block"
                  style={{ color: currentTheme.textPrimary }}
                >
                  {column.title}
                  <span 
                    className="absolute -bottom-1 right-0 w-12 h-px"
                    style={{ background: `linear-gradient(to right, ${currentTheme.primary}80, transparent)` }}
                  ></span>
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-sm transition-colors duration-300"
                        style={{ 
                          color: currentTheme.textSecondary,
                          ':hover': { color: currentTheme.primary }
                        }}
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

        {/* Newsletter and copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row"
          >
            <div className="relative group w-full md:max-w-md">
              <input
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
                className="w-full rounded-full px-5 py-3 outline-none transition-colors duration-300"
                style={{ 
                  background: `${currentTheme.secondary}80`, 
                  border: `1px solid ${currentTheme.primary}33`,
                  color: currentTheme.textPrimary
                }}
              />
              <button 
                className="absolute left-1 top-1 bottom-1 font-medium rounded-full px-5 transition-all duration-300"
                style={{ 
                  background: currentTheme.gradient,
                  color: currentTheme.secondary
                }}
              >
                اشتراک
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm text-center md:text-start"
            style={{ color: `${currentTheme.textSecondary}80` }}
          >
            <p>© {new Date().getFullYear()} وکیلیم. تمامی حقوق محفوظ است.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 