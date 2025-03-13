import { Variants, motion } from "framer-motion";
import { useAppSettings } from '../context/AppSettingsContext';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiRedux, SiJavascript, SiVuedotjs, SiHtml5, SiCss3, SiSass, SiAntdesign, SiBootstrap, SiQuasar, SiSpringboot, SiExpress, SiWebpack } from "react-icons/si";
import { FaNodeJs, FaAws, FaJava } from "react-icons/fa";
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
    { Icon: SiHtml5, color: "text-orange-600", duration: 2.7 },
    { Icon: SiCss3, color: "text-blue-600", duration: 2.8 },
    // { Icon: SiSass, color: "text-pink-400", duration: 3.0 },
    
    { Icon: SiJavascript, color: "text-yellow-400", duration: 3.2 },
    { Icon: TbBrandTypescript, color: "text-blue-500", duration: 4 },
    
    { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
    { Icon: SiRedux, color: "text-purple-500", duration: 3.5 },
    // { Icon: SiVuedotjs, color: "text-green-500", duration: 3.1 },
    
    
    { Icon: SiAntdesign, color: "text-blue-400", duration: 2.6 },
    { Icon: SiBootstrap, color: "text-purple-600", duration: 2.9 },
    // { Icon: SiMaterialUi, color: "text-blue-500", duration: 3.4 },
    // { Icon: SiQuasar, color: "text-blue-400", duration: 3.3 },
    
    { Icon: TbBrandNextjs, color: isDarkMode ? "text-white" : "text-black", duration: 3 },
    // { Icon: FaNodeJs, color: "text-green-500", duration: 6 },
    // { Icon: SiExpress, color: "text-gray-500", duration: 3.7 },

    { Icon: FaJava, color: "text-red-600", duration: 4.1 },
    { Icon: SiSpringboot, color: "text-green-500", duration: 4.3 },
    
    { Icon: BiLogoPostgresql, color: "text-cyan-400", duration: 2.4 },
    { Icon: FaAws, color: "text-orange-500", duration: 3.8 },
    // { Icon: FaDocker, color: "text-blue-400", duration: 4.0 },
    // { Icon: SiCicd, color: "text-yellow-500", duration: 3.9 },
    // { Icon: SiMicrodotfrontdotend, color: "text-green-400", duration: 3.6 },
    { Icon: SiWebpack, color: "text-blue-500", duration: 3.2 },
    // { Icon: SiRestapi, color: "text-gray-600", duration: 3.5 },
    // { Icon: SiAgile, color: "text-purple-700", duration: 3.3 },
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
            // initial="initial"
            initial={{ scale: 0.9}}
            animate="animate"
            className={`rounded-2xl border-4 ${
              isDarkMode ? 'border-neutral-700' : 'border-neutral-300'
            } p-4`}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.2 }}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;