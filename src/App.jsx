import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  
  // Variantes de animación
  const aparecerArriba = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const hijosEscalonados = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const animacionPulso = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* Modal para intento de compra */}
      <AnimatePresence>
        {modalAbierto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setModalAbierto(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-10 max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
              
              <motion.div 
                className="text-8xl mb-6 text-center"
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                😉
              </motion.div>
              
              <h3 className="text-3xl font-bold text-center mb-4">¡Ups! Casi lo logras</h3>
              <p className="text-xl text-center text-gray-700 mb-8">
                Charmy aún está en el taller de diseño italiano. 
                ¡Pero será la revolución en cuidado parental!
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-6 mb-8">
                <p className="text-center font-medium text-lg">
                  "¿Sin Charmy? Es como conducir de noche sin luces... 
                  <span className="block mt-2 text-amber-600 font-bold">¿Realmente ves todo lo que necesitas ver?</span>"
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalAbierto(false)}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white py-4 rounded-full text-lg font-bold shadow-lg hover:from-amber-500 hover:to-amber-700 transition-all"
              >
                Volver a soñar (y cuidar mejor)
              </motion.button>
              
              <p className="text-center text-gray-500 mt-6 text-sm">
                Próximo lanzamiento: Marzo 2026 • Edición limitada a 300 unidades
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cabecera */}
      <header className="py-6 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">
              Charmy
            </div>
            <span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded-full">NUEVO • Pulseby</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#caracteristicas" className="text-sm font-medium hover:text-amber-500 transition-colors relative group">
              Características
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-amber-500 transition-colors relative group">
              Funcionamiento
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#testimonios" className="text-sm font-medium hover:text-amber-500 transition-colors relative group">
              Testimonios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setModalAbierto(true)}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors relative overflow-hidden"
          >
            <span className="relative z-10">Comprar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.button>
        </div>
      </header>

      {/* Sección Hero */}
      <motion.section 
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        variants={aparecerArriba}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div>
          <motion.div 
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-50 to-blue-50 rounded-full mb-6 border border-amber-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs font-bold text-amber-700 flex items-center">
              <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-amber-400 mr-2"></span>
              NUEVA LÍNEA PULSEBY
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Cuida con <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">estilo</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-xl">
            Charmy no es solo una pulsera. Es tu declaración de que <span className="font-bold">cuidar bien</span> es lo más elegante que existe. 
            Conéctate con la salud de tu bebé sin sacrificar tu estilo. Porque los padres que <span className="italic">realmente</span> cuidan, eligen inteligencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalAbierto(true)}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors relative overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Descubrir Charmy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-500 opacity-20"></div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors relative overflow-hidden"
            >
              <span className="relative z-10">Ver Pulseby para bebés</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-amber-100 opacity-0 hover:opacity-30 transition-opacity"></div>
            </motion.button>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl border border-amber-100">
            <div className="flex items-start">
              <div className="text-3xl mr-4 mt-1">💡</div>
              <div>
                <p className="font-bold text-lg mb-1">¿Sin Charmy?</p>
                <p className="text-gray-700">
                  Es como tener airbags en el coche... pero no usarlos. 
                  <span className="block font-bold mt-2">El verdadero cuidado es proactivo.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-6 shadow-xl">
            <div className="bg-white rounded-xl overflow-hidden aspect-square flex items-center justify-center relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200 rounded-full opacity-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-10"></div>
              
              <div className="text-center p-8">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-blue-100 opacity-30"></div>
                  <div className="text-5xl">✨</div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                  <motion.div 
                    variants={animacionPulso}
                    animate="animate"
                    className="w-10 h-10 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center"
                  >
                    <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                  </motion.div>
                  <div className="w-10 h-10 bg-gray-100 border-2 border-gray-300 rounded-full"></div>
                  <div className="w-10 h-10 bg-blue-100 border-2 border-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl w-44 z-10 border-2 border-dashed border-amber-200"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center p-3">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-amber-100 rounded-full mx-auto flex items-center justify-center border-2 border-white shadow">
                  <div className="text-3xl">👶</div>
                </div>
                <motion.div 
                  className="mt-3 text-center w-4 h-4 bg-red-500 rounded-full mx-auto"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <p className="text-xs font-bold mt-2 text-amber-700">Pulseby bebé</p>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute -top-6 -left-6 bg-white rounded-full p-3 shadow-lg border-2 border-dashed border-blue-200 z-0">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-blue-500 text-xl font-bold">+</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sección Características - Espacio reducido */}
      <motion.section 
        id="caracteristicas"
        className="py-16 px-4 md:px-8 bg-gray-50"
        variants={hijosEscalonados}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cuidado que <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">se nota</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Diseñado para padres que entienden que el verdadero lujo es la tranquilidad
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              titulo: "Alertas que solo tú ves",
              descripcion: "Cuando Pulseby detecta algo en tu bebé, tu Charmy vibra suavemente o se ilumina. Sin alarmas, sin miradas. Solo tú y tu instinto conectados.",
              icono: "👀",
              color: "from-amber-100 to-yellow-50"
            },
            {
              titulo: "Diseño que habla de ti",
              descripcion: "Pulsera italiana con charms intercambiables. La pieza especial que conecta con tu bebé se integra perfectamente. Porque cuidar bien también es cuestión de estilo.",
              icono: "🇮🇹",
              color: "from-blue-100 to-cyan-50"
            },
            {
              titulo: "Tecnología invisible",
              descripcion: "Acero quirúrgico, cuero italiano y conexión Bluetooth de última generación. Todo el poder de Pulseby, disfrazado de elegancia.",
              icono: "🔋",
              color: "from-amber-100 to-orange-50"
            }
          ].map((caracteristica, indice) => (
            <motion.div 
              key={indice}
              variants={aparecerArriba}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">{caracteristica.icono}</div>
                <h3 className="text-2xl font-bold mb-3">{caracteristica.titulo}</h3>
                <p className="text-gray-700">{caracteristica.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl p-8 border border-amber-100 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-amber-600">❗</span>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">¿Aún confías solo en tus ojos?</h3>
              <p className="text-xl text-gray-700">
                Con Charmy + Pulseby, tu instinto parental tiene superpoderes. 
                <span className="block font-bold mt-2 text-amber-700">El cuidado moderno no es opcional, es esencial.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sección Funcionamiento */}
      <motion.section 
        id="como-funciona"
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        variants={aparecerArriba}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conexión <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">inteligente</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tres pasos para transformar tu forma de cuidar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((paso) => (
            <motion.div
              key={paso}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-blue-50 rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-10 h-full border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-8 mx-auto">
                  {paso}
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">
                  {paso === 1 && "Empareja con estilo"}
                  {paso === 2 && "Personaliza tu Charmy"}
                  {paso === 3 && "Cuida con confianza"}
                </h3>
                <p className="text-gray-700 text-center mb-8">
                  {paso === 1 && "Vincula tu Charmy con la pulsera Pulseby de tu bebé en segundos. Conexión segura y encriptada."}
                  {paso === 2 && "Elige tus charms favoritos. La pieza especial que conecta con tu bebé se integra discretamente."}
                  {paso === 3 && "Recibe alertas sutiles en tu muñeca. Vibración suave o luz tenue cuando tu bebé necesita atención."}
                </p>
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">
                      {paso === 1 && "📱"}
                      {paso === 2 && "🎨"}
                      {paso === 3 && "❤️"}
                    </div>
                    <p className="text-gray-500 text-sm font-medium">
                      {paso === 1 && "App intuitiva"}
                      {paso === 2 && "Diseño italiano"}
                      {paso === 3 && "Alerta discreta"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sección Testimonios */}
      <motion.section 
        id="testimonios"
        className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50"
        variants={aparecerArriba}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Padres que <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">eligen cuidar mejor</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            No son perfectos, pero eligen la mejor protección para sus hijos
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              cita: "Antes pensaba que con estar cerca era suficiente. Ahora entiendo que cuidar bien significa estar conectado. Charmy me da esa tranquilidad sin parecer un robot.",
              autor: "Carmen V., Mamá de Lucas (8 meses)",
              emoji: "🤯"
            },
            {
              cita: "Mi esposa me regaló Charmy después del nacimiento de nuestra hija. Al principio pensé que era 'otro gadget', pero hoy no salgo de casa sin él. Es discreto, elegante y me hace sentir más padre.",
              autor: "Alejandro M., Padre primerizo",
              emoji: "👨‍👧"
            }
          ].map((testimonio, indice) => (
            <motion.div 
              key={indice} 
              variants={aparecerArriba}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl relative border border-amber-100 shadow-md"
            >
              <div className="absolute -top-4 -right-4 text-6xl opacity-20">{testimonio.emoji}</div>
              <div className="text-5xl mb-4 text-amber-300">"</div>
              <p className="text-xl italic mb-6 text-gray-800">{testimonio.cita}</p>
              <div className="font-bold text-lg">{testimonio.autor}</div>
              <div className="mt-2 text-amber-600 font-medium flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Cliente Pulseby desde 2025
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="text-6xl mb-4">💡</div>
          <h3 className="text-2xl font-bold mb-2">¿Todavía piensas que con amor basta?</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            El amor es el inicio. La protección inteligente es lo que realmente mantiene a tu bebé a salvo. 
            <span className="block font-bold mt-3 text-xl">Charmy + Pulseby: porque cuidar bien es el verdadero lujo.</span>
          </p>
        </div>
      </motion.section>

      {/* Sección CTA */}
      <motion.section 
        className="py-24 px-4 md:px-8 bg-black text-white relative overflow-hidden"
        variants={aparecerArriba}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-blue-900/10"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg font-bold flex items-center justify-center">
              <span className="animate-pulse inline-block w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              ÚLTIMAS 300 UNIDADES • LANZAMIENTO EXCLUSIVO
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ¿Aceptas el <span className="text-amber-400">reto</span> de cuidar mejor?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a la revolución del cuidado parental. Charmy se entrega en caja de edición coleccionista con certificado de autenticidad y acceso a nuestra comunidad privada de padres exigentes.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setModalAbierto(true)}
            className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10">Reservar mi Charmy</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-500 opacity-20"></div>
          </motion.button>
          
          <p className="mt-8 text-amber-200 text-lg font-medium">
            "El que cuida bien, elige Charmy. El resto... solo espera."
          </p>
        </div>
      </motion.section>

      {/* Pie de página */}
      <footer className="py-12 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-600">
                Charmy
              </div>
              <span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded-full">Pulseby</span>
            </div>
            <p className="text-gray-700 mb-6">
              La revolución en cuidado parental. Diseñado en Milán, pensado para padres que exigen lo mejor.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-400 transition-colors cursor-pointer">
                <span className="text-gray-600 hover:text-white">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-400 transition-colors cursor-pointer">
                <span className="text-gray-600 hover:text-white">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-amber-400 transition-colors cursor-pointer">
                <span className="text-gray-600 hover:text-white">ig</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-700">Charmy</h3>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">La filosofía del cuidado</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Diseño italiano</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Tecnología invisible</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Ediciones limitadas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-700">Conexión</h3>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">App móvil exclusiva</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Pulseby para bebés</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Seguridad de datos</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Comunidad privada</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-700">Exclusividad</h3>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Lista de espera VIP</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Eventos para padres</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Personalización avanzada</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors font-medium">Atención 24/7</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p className="font-medium mb-2">Charmy: La nueva línea de Pulseby para padres que eligen cuidar con inteligencia</p>
          <p>© 2026 Charmy by Pulseby. Todos los derechos reservados. Producto patentado.</p>
          <p className="mt-2 font-medium text-amber-700">
            Nota: Charmy es un accesorio de lujo con funcionalidad de monitoreo complementaria. 
            No sustituye la supervisión médica profesional. 
            <span className="block mt-1">¿Sin Pulseby para tu bebé? Entonces Charmy no tiene sentido. Cuida completo.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
