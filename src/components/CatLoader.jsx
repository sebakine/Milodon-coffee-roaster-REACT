import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// 1. IMPORTAR AMBAS ANIMACIONES
import catAnimation from "../assets/cat-running.json"; // El gato negro (Salem)
import bwCatAnimation from "../assets/cat-running-bw.json"; // El nuevo gato (asegúrate del nombre del archivo)

const CatLoader = () => {
  // 2. LÓGICA ALEATORIA (Se ejecuta una sola vez al cargar)
  const [selectedCat] = useState(() => {
    // Math.random() da un número entre 0 y 1.
    // Si es menor a 0.5 (50%), mostramos el gato negro. Si no, el otro.
    const isBlackCat = Math.random() < 0.5;
    return isBlackCat ? catAnimation : bwCatAnimation;
  });

  // 3. ESTILOS SEGUROS (Objeto JS en lugar de <style jsx>)
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FFF8F0', // Tu color beige de fondo
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // AUMENTADO: Antes 300px. Lo subimos para que el gato tenga espacio al crecer.
      width: '500px', 
    },
    lottieWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      // AJUSTADO: Antes -15px. Al ser más grande el gato, hay que subirlo un poco más o menos
      // para que sus patas toquen la barra. Ajusta este número si "vuela" o se hunde.
      marginBottom: '-25px', 
    },
    barBackground: {
      width: '100%',
      height: '6px',
      backgroundColor: '#e0dcd5',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      backgroundColor: '#FF6B35', // Tu color naranja
      borderRadius: '10px',
    },
    text: {
      marginTop: '20px',
      fontFamily: "'Poppins', sans-serif",
      color: '#3f2f24',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '1.1rem', // AUMENTADO: Un poco más grande el texto también
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Contenedor de la Animación Lottie */}
        <div style={styles.lottieWrapper}>
          <Lottie 
            animationData={selectedCat} 
            loop={true} 
            // AUMENTADO: Aquí es donde controlas el tamaño real de la imagen del gato.
            // Prueba con 250, 300, 350 según tu gusto.
            style={{ height: 280 }} 
          />
        </div>

        {/* La Barra de Carga */}
        <div style={styles.barBackground}>
          <motion.div
            style={styles.barFill}
            animate={{ width: ["0%", "100%"] }}
            transition={{ 
              duration: 3.0, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Texto con animación de pulso usando Framer Motion */}
        <motion.p 
            style={styles.text}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        >
            {/* Texto dinámico según qué gato salió */}
            {selectedCat === catAnimation 
                ? "Salem está preparando la molienda..." 
                : "Miauricio El Gato Goldo está calentando el agua...o puede estar comiendo"}
        </motion.p>
      </div>
    </div>
  );
};

export default CatLoader;