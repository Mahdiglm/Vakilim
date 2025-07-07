import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'مشاوره تخصصی',
      description: 'مشاوره تخصصی حقوقی با وکلای مجرب در تمام زمینه‌های حقوقی',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'وکالت دعاوی',
      description: 'وکالت در دعاوی مدنی، کیفری، خانواده، تجاری و قراردادها',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'خدمات حقوقی آنلاین',
      description: 'دسترسی به خدمات حقوقی آنلاین با استفاده از فناوری های نوین',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.899 1.558l-1.222-1.223a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l2.5-2.5a.75.75 0 00-1.06-1.06l-1.012 1.011A6.751 6.751 0 0112 18.75a6.75 6.75 0 01-5.738-3.212l1.418.581a.75.75 0 10.571-1.389l-3.5-1.438a.75.75 0 00-1.001.989l1.436 3.5a.75.75 0 001.39-.572l-.653-1.592z" clipRule="evenodd" />
        </svg>
      ),
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

  const featureVariants = {
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080808] z-0"></div>
      
      {/* Enhanced decorative elements for better transition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top circles */}
        <div className="absolute -top-64 -right-64 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] opacity-40"></div>
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] opacity-30"></div>
        
        {/* Middle circles */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[120px] opacity-30"></div>
        
        {/* Bottom circles that connect to Testimonials section */}
        <div className="absolute -bottom-[200px] left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/3 blur-[150px] opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-xs bg-gold/10 text-gold rounded-full tracking-wider">خدمات حقوقی</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-100 to-gold"
          >
            خدمات ویژه وکیلیم
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-400 text-lg">
              با وکیلیم، خدمات حقوقی به شیوه نوین ارائه می‌شود
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={featureVariants}
              className="p-1"
            >
              <div className="relative group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold/20 to-transparent rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gold/5 overflow-hidden flex flex-col">
                  {/* Icon container */}
                  <div className="relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-black to-gray-900 border border-gold/20">
                    <span className="text-gold">{feature.icon}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Animated arrow */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-gold text-sm font-medium group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                      مشاهده جزئیات
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 transform rotate-180">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  
                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-gold"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced floating elements that match Testimonials section */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-16 h-16 rounded-full bg-gold/5"
            style={{ left: '10%', top: '20%' }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute w-8 h-8 rounded-full bg-gold/10"
            style={{ right: '15%', top: '30%' }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute w-12 h-12 rounded-full bg-gold/10"
            style={{ left: '20%', bottom: '15%' }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.div 
            className="absolute w-6 h-6 rounded-full bg-gold/5"
            style={{ right: '25%', bottom: '10%' }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          {/* Additional floating element at the bottom to connect with Testimonials */}
          <motion.div 
            className="absolute w-20 h-20 rounded-full bg-gold/8"
            style={{ left: '50%', bottom: '-10%', transform: 'translateX(-50%)' }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features; 