import { motion } from "motion/react";

/**
 * Aplica un fade in que sube desde abajo cuando el elemento entra al viewport.
 * Usa Motion (WAAPI) para mejor rendimiento y legibilidad que IntersectionObserver manual.
 *
 * @param {number} delay - Retraso en segundos antes de iniciar la animación.
 * @param {string} className - Clases CSS adicionales para el contenedor.
 */
export function FadeInUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}