import { motion } from "framer-motion"

export function Hero() {
  return (
    <section 
      className="w-full flex flex-col 
        items-center justify-center min-h-[80vh] 
        relative overflow-hidden
      ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 100 
        }}
        className="mb-8 relative"
      >
        <h1 className="text-6xl sm:text-7xl 
          md:text-8xl font-bold text-center pixel-text
          relative z-10"
        >
          Pixel<span className="text-green-400">verse</span>
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl text-center max-w-2xl mb-8 px-4"
      >
        Dive into a vibrant 2D metaverse where pixels come to life. Create, explore, and connect in ways you never
        imagined!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-green-400 
          text-black font-bold rounded-lg pixel-button text-lg
        "
      >
        Enter Pixelverse
      </motion.button>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400"
        animate={{ 
          rotate: 360, 
          x: [0, 50, 0], 
          y: [0, -50, 0] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Number.POSITIVE_INFINITY, 
          ease: "linear" 
        }}
      />
      <motion.div
        className="absolute 
          bottom-1/4 right-1/4 w-12 h-12 
          bg-green-400
        "
        animate={{ 
          rotate: -360, 
          x: [0, -70, 0], 
          y: [0, 70, 0] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Number.POSITIVE_INFINITY, 
          ease: "linear" 
        }}
      />
      <motion.div
        className="absolute 
          top-3/4 left-1/3 w-6 
          h-6 bg-blue-400
        "
        animate={{ 
          rotate: 180, 
          x: [0, 30, 0], 
          y: [0, -30, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Number.POSITIVE_INFINITY, 
          ease: "linear" 
        }}
      />
    </section>
  )
}

