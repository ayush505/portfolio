import { Variants, motion } from "framer-motion";
import { useAppSettings } from '../context/AppSettingsContext';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiMongodb, SiRedux, SiJavascript, SiGraphql, SiPython } from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  const { isDarkMode } = useAppSettings();

  const technologies = [
    { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
    { Icon: TbBrandNextjs, color: isDarkMode ? "text-white" : "text-black", duration: 3 },
    { Icon: SiMongodb, color: "text-green-500", duration: 5 },
    { Icon: FaNodeJs, color: "text-green-500", duration: 6 },
    { Icon: BiLogoPostgresql, color: "text-cyan-400", duration: 2.4 },
    { Icon: SiRedux, color: "text-purple-500", duration: 3.5 },
    { Icon: TbBrandTypescript, color: "text-blue-500", duration: 4 },
    { Icon: SiJavascript, color: "text-yellow-400", duration: 3.2 },
    { Icon: SiGraphql, color: "text-pink-600", duration: 4.5 },
    { Icon: FaAws, color: "text-orange-500", duration: 3.8 },
    { Icon: SiPython, color: "text-blue-400", duration: 4.2 },
  ];

  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'} pb-24`}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              isDarkMode ? 'border-neutral-700' : 'border-neutral-300'
            } p-4`}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;