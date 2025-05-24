import Head from "next/head";
import Link from "components/molecules/Link";
import { motion } from "framer-motion";

const Custom404 = () => {
  const glitchAnimation = {
    hidden: { skew: 0 },
    visible: {
      skew: [0, -5, 5, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3
      }
    }
  };

  const letterAnimation = {
    hidden: { y: 400 },
    visible: i => ({
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: i * 0.1
      }
    })
  };

  return (
    <div className="min-h-screen relative bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>Trang không tồn tại</title>
      </Head>

      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(0,0,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(128,0,255,0.1) 0%, transparent 50%)"
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Main 404 Text */}
        <motion.div
          className="relative mb-8"
          initial="hidden"
          animate="visible"
          variants={glitchAnimation}
        >
          <div className="flex justify-center items-center space-x-4">
            {["4", "0", "4"].map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="text-[8rem] md:text-[12rem] font-black text-white relative"
                style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.3)"
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6 px-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white/90">
            Oops! Trang không tồn tại
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto">
            Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-medium text-white 
                bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 
                hover:from-blue-700 hover:via-blue-800 hover:to-indigo-900
                border border-white/10 backdrop-blur-sm
                shadow-[0_0_30px_rgba(59,130,246,0.5)]
                transition-all duration-300 ease-out
                hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Về Trang chủ
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
};

export default Custom404;
