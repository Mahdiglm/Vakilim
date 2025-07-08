import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  const { currentTheme } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      name: 'محمد رضایی',
      role: 'کارآفرین',
      quote: 'مشاوره‌های حقوقی وکیلیم به من کمک کرد تا کسب و کارم را با اطمینان گسترش دهم. وکلای حرفه‌ای و باتجربه‌شان در زمینه حقوق تجارت، راهنمایی‌های ارزشمندی به من ارائه دادند.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'سارا احمدی',
      role: 'مدیر شرکت',
      quote: 'من برای یک پرونده پیچیده از وکیلیم کمک گرفتم و نتیجه فراتر از انتظارم بود. تیم حقوقی آنها با تخصص و تعهد بالا، مرا در تمام مراحل همراهی کردند.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'علی محمدی',
      role: 'مهندس نرم‌افزار',
      quote: 'وکیلیم با ارائه خدمات حقوقی آنلاین، زمان و هزینه‌های من را به شکل قابل توجهی کاهش داد. دسترسی به وکیل اختصاصی در هر زمان، واقعاً برای من ارزشمند بود.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `linear-gradient(to bottom, ${currentTheme.surfaceDark}, ${currentTheme.secondary})` 
        }}
      ></div>
      
      {/* Circular background elements for seamless transition from Features */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top circle that extends from Features section */}
        <div 
          className="absolute -top-[300px] left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[150px] opacity-30"
          style={{ backgroundColor: `${currentTheme.primary}08` }}
        ></div>
        
        {/* Additional circles for visual interest */}
        <div 
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
          style={{ backgroundColor: `${currentTheme.primary}0D` }}
        ></div>
        <div 
          className="absolute top-1/4 -left-64 w-[300px] h-[300px] rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: `${currentTheme.primary}0D` }}
        ></div>
        
        {/* Bottom circles that connect to the next section */}
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
          style={{ backgroundColor: `${currentTheme.primary}0A` }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span 
              className="inline-block px-3 py-1 text-xs rounded-full tracking-wider"
              style={{ 
                backgroundColor: `${currentTheme.primary}1A`,
                color: currentTheme.primary 
              }}
            >نظرات موکلین</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text"
            style={{ backgroundImage: currentTheme.gradient }}
          >
            تجربه موکلین ما
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-400 text-lg">
              با وکیلیم، همیشه حق با شماست
            </p>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="p-0.5 h-full"
              style={{ 
                transformOrigin: index === 1 ? 'center' : index === 0 ? 'right' : 'left',
              }}
            >
              <div className="group relative h-full">
                {/* Animated gradient border */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-[2px] opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(to bottom right, ${currentTheme.primary}4D, ${currentTheme.primary}33, transparent)` 
                  }}
                ></div>
                
                {/* Card content */}
                <div 
                  className="relative h-full backdrop-blur-xl rounded-2xl p-8 overflow-hidden flex flex-col"
                  style={{ 
                    background: `linear-gradient(to bottom, ${currentTheme.secondary}CC, ${currentTheme.surfaceDark}F2)`,
                    borderWidth: '1px', 
                    borderColor: `${currentTheme.primary}0D` 
                  }}
                >
                  {/* Quote icon */}
                  <svg 
                    className="w-8 h-8 mb-6" 
                    fill="currentColor" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true"
                    style={{ color: `${currentTheme.primary}4D` }}
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  {/* Testimonial quote */}
                  <blockquote className="flex-1">
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                  
                  {/* Person info */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 mr-4 rtl:mr-0 rtl:ml-4">
                      <div 
                        className="absolute inset-0 rounded-full blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})` }}
                      ></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="relative rounded-full w-12 h-12 object-cover"
                        style={{ borderWidth: '1px', borderColor: `${currentTheme.primary}33` }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p style={{ color: currentTheme.primary }} className="text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute top-4 left-4 w-1 h-1 rounded-full" 
                    style={{ backgroundColor: currentTheme.primary }}
                  ></div>
                  <div 
                    className="absolute top-4 right-4 w-1 h-1 rounded-full" 
                    style={{ backgroundColor: currentTheme.primary }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Animated floating circles similar to Features section */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-10 h-10 rounded-full"
            style={{ 
              backgroundColor: `${currentTheme.primary}0D`,
              right: '15%', 
              top: '15%' 
            }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute w-6 h-6 rounded-full"
            style={{ 
              backgroundColor: `${currentTheme.primary}1A`,
              left: '10%', 
              top: '40%' 
            }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute w-8 h-8 rounded-full"
            style={{ 
              backgroundColor: `${currentTheme.primary}14`,
              right: '25%', 
              bottom: '30%' 
            }}
            animate={{ 
              y: [0, -12, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 