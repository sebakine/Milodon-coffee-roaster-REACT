import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#FFF8F0",
      zIndex: 9999
    }}>
      <motion.div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #e0dcd5",
          borderTop: "5px solid #FF6B35",
          borderRadius: "50%"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
