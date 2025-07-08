import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: currentTheme.backgroundGradient }}
      >
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(currentTheme.primary)}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] h-[250px] rounded-[999px]"
          style={{
            background: `radial-gradient(circle, ${currentTheme.primary}26 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(40px)',
            top: '-50px',
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div className="inline-block relative">
              <h1 className="text-6xl md:text-8xl font-bold gradient-text">وکیلیم</h1>
              <div 
                className="absolute -bottom-1 left-0 right-0 h-px opacity-70"
                style={{ 
                  background: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)` 
                }}
              ></div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 font-light"
            style={{ color: currentTheme.textSecondary }}
          >
            با وکیلیم همیشه حق با شماست
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-block"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.02,
                boxShadow: currentTheme.shadow
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full backdrop-blur-sm font-medium transition-all duration-300"
              style={{ 
                border: `1px solid ${currentTheme.primary}4D`,
                background: `${currentTheme.secondary}4D`,
                color: currentTheme.primary
              }}
            >
              درخواست مشاوره
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-16 h-16 rounded-full"
            style={{ 
              left: '10%', 
              top: '20%',
              background: `${currentTheme.primary}0D`
            }}
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
            className="absolute w-8 h-8 rounded-full"
            style={{ 
              right: '15%', 
              top: '30%',
              background: `${currentTheme.primary}1A`
            }}
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
            className="absolute w-12 h-12 rounded-full"
            style={{ 
              left: '20%', 
              bottom: '15%',
              background: `${currentTheme.primary}1A`
            }}
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
            className="absolute w-6 h-6 rounded-full"
            style={{ 
              right: '25%', 
              bottom: '25%',
              background: `${currentTheme.primary}0D`
            }}
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
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 z-[1]"
        style={{ 
          background: `linear-gradient(to top, ${currentTheme.secondary}, transparent)` 
        }}
      ></div>
    </section>
  );
};

export default Hero; 