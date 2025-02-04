import { motion } from "framer-motion"
import { 
  Monitor, Users, Palette, 
  Zap, Map, Coins 
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Social Interactions",
    description: "Connect with friends, join guilds, and embark on epic quests together.",
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Create and customize your unique pixel avatar with thousands of options.",
  },
  {
    icon: Zap,
    title: "Real-time Events",
    description: "Participate in dynamic world events that shape the Pixelverse.",
  }
 
]

export function Features() {
  return (
    <section className="w-full py-2 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 pixel-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover the Pixelverse
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center 
              text-center p-6 bg-gradient-to-br 
              from-gray-800 to-gray-900 rounded-lg shadow-lg 
              hover:shadow-green-400/20 transition-all duration-300
            "
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="mb-4 bg-green-400 rounded-full p-3"
            >
              <feature.icon className="w-8 h-8 text-gray-900" />
            </motion.div>
            <h3 className="text-xl font-bold 
              mb-2 pixel-text 
              text-green-400"
            >{feature.title}</h3>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

