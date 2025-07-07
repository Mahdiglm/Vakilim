import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#121212] z-0">
        <div className="absolute inset-0 opacity-5">
          {/* Abstract pattern - diagonal lines */}
          <div className="h-full w-full" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right bottom, transparent 45%, #D4AF37 45%, #D4AF37 55%, transparent 55%), linear-gradient(to right bottom, transparent 45%, #D4AF37 45%, #D4AF37 55%, transparent 55%)',
                 backgroundSize: '60px 60px' 
               }}>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-gold"
          >
            وکیلیم
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white"
          >
            با وکیلیم همیشه حق با شماست
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gold text-black hover:shadow-lg hover:opacity-90">
              درخواست مشاوره
            </button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-4 left-8 md:left-24 w-16 h-16 rounded-full bg-gold opacity-20"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -top-4 right-8 md:right-24 w-24 h-24 rounded-full bg-gold opacity-10"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 