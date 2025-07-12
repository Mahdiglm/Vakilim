import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { currentTheme } = useTheme();
  
  // Professional geometric pattern with dynamic theme color
  const patternSvg = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(currentTheme.primary)}' fill-opacity='0.03'%3E%3Cpath d='M20 20h20v20H20V20zm20 0h20v20H40V20zM20 40h20v20H20V40zm20 0h20v20H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: `radial-gradient(ellipse at center, ${currentTheme.surfaceLight} 0%, ${currentTheme.secondary} 50%, ${currentTheme.surfaceDark} 100%)`
        }}
      >
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: patternSvg,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Professional content layout */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Subtle background glow */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 rounded-full"
          style={{
            background: `radial-gradient(ellipse, ${currentTheme.primary}08 0%, transparent 70%)`,
            filter: 'blur(60px)',
            top: '20%',
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Professional badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{ 
                backgroundColor: `${currentTheme.primary}0A`,
                borderColor: `${currentTheme.primary}20`,
                color: currentTheme.textAccent
              }}
            >
              <div className="w-2 h-2 rounded-full mr-3 rtl:mr-0 rtl:ml-3"
                style={{ backgroundColor: currentTheme.primary }}
              />
              <span className="text-sm font-medium tracking-wide">
                خدمات حقوقی تخصصی
              </span>
            </div>
          </motion.div>

          {/* Professional main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span 
                className="text-transparent bg-clip-text leading-none block"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.textPrimary} 0%, ${currentTheme.primary} 40%, ${currentTheme.accent} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  textShadow: `0 0 40px ${currentTheme.primary}15`
                }}
              >
                وکیلیم
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})`,
                boxShadow: `0 0 20px ${currentTheme.primary}40`
              }}
            />
          </motion.div>

          {/* Professional tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-4"
              style={{ color: currentTheme.textSecondary }}
            >
              متخصص در ارائه خدمات حقوقی
            </p>
            <p className="text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto"
              style={{ color: currentTheme.textMuted }}
            >
              با تیم مجرب وکلا و مشاوران حقوقی، حقوق شما را با دقت و تخصص دفاع می‌کنیم
            </p>
          </motion.div>

          {/* Professional call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.02,
                y: -2,
                boxShadow: currentTheme.hoverGlow
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-professional px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm border"
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
                color: currentTheme.textPrimary,
                borderColor: 'transparent',
                boxShadow: currentTheme.shadow
              }}
            >
              مشاوره رایگان
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.02,
                y: -2,
                borderColor: currentTheme.primary
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-professional px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm border"
              style={{ 
                backgroundColor: 'transparent',
                color: currentTheme.textSecondary,
                borderColor: `${currentTheme.primary}40`
              }}
            >
              مشاهده خدمات
            </motion.button>
          </motion.div>

          {/* Professional stats or features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '۱۰۰+', label: 'پرونده موفق' },
              { number: '۱۵+', label: 'سال تجربه' },
              { number: '۹۸٪', label: 'رضایت مشتری' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
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
          </motion.div>
        </div>
        
        {/* Professional decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-32 h-32 rounded-full border opacity-10"
            style={{ 
              borderColor: currentTheme.primary,
              left: '5%', 
              top: '15%' 
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute w-24 h-24 rounded-full border opacity-10"
            style={{ 
              borderColor: currentTheme.accent,
              right: '10%', 
              top: '25%' 
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute w-16 h-16 rounded-full"
            style={{ 
              backgroundColor: `${currentTheme.primary}08`,
              left: '15%', 
              bottom: '20%' 
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute w-12 h-12 rounded-full"
            style={{ 
              backgroundColor: `${currentTheme.accent}08`,
              right: '20%', 
              bottom: '30%' 
            }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      {/* Professional gradient overlay for smooth transition to Features */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{ 
          background: `linear-gradient(to bottom, transparent 0%, ${currentTheme.secondary} 30%, ${currentTheme.surfaceDark} 100%)` 
        }}
      />
      
      {/* Additional seamless transition layer */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 z-[2]"
        style={{ 
          background: `linear-gradient(to bottom, transparent 0%, ${currentTheme.surfaceDark} 100%)` 
        }}
      />
    </section>
  );
};

export default Hero; 