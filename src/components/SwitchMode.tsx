
import { motion } from 'motion/react'
import {
  IoMoon,
  IoMoonOutline,
  IoSunny,
} from 'react-icons/io5'

type SwitchModeProps = {
  isDark: boolean
  onToggle: () => void
}

export default function SwitchMode({
  isDark,
  onToggle,
}: SwitchModeProps) {
  return (
    <motion.button
      type="button"
      className={`switch-mode ${isDark ? 'dark' : 'light'}`}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        className="switch-knob"
        animate={{ x: isDark ? 52 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 22,
        }}
      />

      <span className="switch-icon sun-icon">
        <IoSunny />
      </span>

      <span className="switch-icon moon-icon">
        {isDark ? <IoMoon /> : <IoMoonOutline />}
      </span>
    </motion.button>
  )
}
