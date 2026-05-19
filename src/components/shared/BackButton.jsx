import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{
        x: -5,
        scale: 1.03,
        backgroundColor: "#6366F1",
        color: "#ffffff",
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition"
    >
      <ArrowLeft size={18} />
      Back
    </motion.button>
  );
};

export default BackButton;
