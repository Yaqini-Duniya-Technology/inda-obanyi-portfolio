import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function WhatsAppButton() {
  const reduceMotion = useReducedMotion();
  const whatsappLink =
    "https://wa.me/2348053694199?text=Hello%20Inda%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%2FML%20opportunity%20with%20you.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Inda Obanyi on WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-cyan-400/20 bg-black/80 px-4 py-3 text-sm font-semibold text-gray-200 shadow-2xl backdrop-blur-xl transition hover:border-cyan-400/40 hover:text-cyan-400 sm:bottom-8 sm:right-8"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
        <MessageCircle size={20} />
      </span>

      <span className="hidden sm:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;
