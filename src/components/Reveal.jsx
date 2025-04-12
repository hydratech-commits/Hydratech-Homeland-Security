import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**
 * Reveal Animation Wrapper
 * @param {children} JSX content
 * @param {width} Width of the wrapper (default: 100%)
 * @param {direction} Animation direction (default: "up") — options: "up", "down", "left", "right"
 * @param {delay} Delay before animation starts (default: 0.2s)
 * @param {duration} Animation duration (default: 0.6s)
 * @param {overlayColor} Optional background color for sweep effect
 */
function Reveal({
  children,
  width = "100%",
  direction = "up",
  delay = 0.2,
  duration = 0.6,
  overlayColor = "#a7a4a3", // can pass false/null to disable sweep
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const overlayControls = useAnimation();

  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      overlayControls.start("sweep");
    }
  }, [isInView, mainControls, overlayControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      {/* Content animation */}
      <motion.div
        variants={variants[direction] || variants.up}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>

      {/* Optional overlay sweep */}
      {overlayColor && (
        <motion.div
          initial={{ x: 0 }}
          animate="sweep"
          variants={{
            sweep: { x: "100%" },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: delay - 0.1,
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: overlayColor,
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
}

export default Reveal;
