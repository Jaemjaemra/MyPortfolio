import { useState } from "react";
import { motion, type Transition } from "motion/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SPRING: Transition = {
  type: "spring",
  bounce: 0.55,
  duration: 1,
};

interface SplitButtonProps {
  mainButton?: string;
  buttons?: string[];
  onSelect: (category: string) => void;
}

export default function SplitButton({
  mainButton = "New Project",
  buttons = ["Web Development", "Game Development", "Other"],
  onSelect,
}: SplitButtonProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (category: string) => {
    setOpen(false);
    onSelect(category);
  };

  return (
    <div className="split-button-container">
      {/* MAIN BUTTON */}
      <motion.button
        layout
        type="button"
        transition={SPRING}
        onClick={() => setOpen(true)}
        className="split-main-button"
        initial={false}
        animate={{
          scaleX: open ? 1.5 : 1,
          scaleY: open ? 0.9 : 1,
          opacity: open ? 0 : 1,
          filter: open ? "blur(8px)" : "blur(0px)",
          pointerEvents: open ? "none" : "auto",
        }}
        whileTap={{ scale: 1.1 }}
      >
        + {mainButton}
      </motion.button>

      {/* SPLIT ROW */}
      <motion.div
        layout
        transition={SPRING}
        className="split-options"
        initial={false}
        animate={{
          scaleX: open ? 1 : 0.2,
          scaleY: open ? 1 : 0.9,
          opacity: open ? 1 : 0,
          filter: open ? "blur(0px)" : "blur(8px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* BACK BUTTON */}
        <motion.button
          type="button"
          onClick={() => setOpen(false)}
          className="split-back-button"
          whileTap={{ scale: 1.15 }}
          aria-label="Back"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} />
        </motion.button>

        {/* PROJECT CATEGORIES */}
        {buttons.map((name) => (
          <motion.button
            type="button"
            key={name}
            onClick={() => handleSelect(name)}
            className="split-option-button"
            whileTap={{ scale: 1.05 }}
          >
            {name}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}