import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const socialIcons = [
  { icon: <FaFacebook size={18} />, label: "Facebook" },
  { icon: <FaInstagram size={18} />, label: "Instagram" },
  { icon: <FaXTwitter size={18} />, label: "X" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn" },
  { icon: <FaTiktok size={18} />, label: "TikTok" },
  { icon: <FaYoutube size={18} />, label: "YouTube" },
];

const sitemapLinks1 = ["Regala", "Registro Chef", "Ofertas de trabajo", "Preguntas frecuentes"];
const sitemapLinks2 = ["Chef a domicilio", "Términos legales", "Política de privacidad", "Contáctanos"];
const internationalLinks = ["Australia", "Canadá", "España", "Estados Unidos", "Francia", "Ver todos los países"];

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 w-full">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 px-6 md:px-16 py-10">

        {/* Izquierda */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">Síguenos</h4>
            <div className="flex gap-2">
              {socialIcons.map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white hover:text-orange-500 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">¿Hablamos?</h4>
            <p className="text-sm text-gray-500">Teléfono: +54-xxxx-xxxx</p>
            <p className="text-sm text-gray-500">infofood@takeachef.com</p>
          </div>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col sm:flex-row gap-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">Sitemap</h4>
          <div className="flex gap-12">
            <ul className="flex flex-col gap-3">
              {sitemapLinks1.map((link) => (
                <li key={link}><a href="#" className="text-sm text-gray-500 hover:text-orange-500">{link}</a></li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {sitemapLinks2.map((link) => (
                <li key={link}><a href="#" className="text-sm text-gray-500 hover:text-orange-500">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internacional */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">Take a chef international</h4>
          <ul className="flex flex-col gap-3">
            {internationalLinks.map((link) => (
              <li key={link}><a href="#" className="text-sm text-gray-500 hover:text-orange-500">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <span className="text-xl font-bold text-gray-900">takeachef</span>
        <p className="text-xs text-gray-400">
          Copyright © 2026 Take a Chef. Todos los derechos reservados.{" "}
          <a href="#" className="hover:text-orange-500">Nuestros Chefs</a> · <a href="#" className="hover:text-orange-500">Configurar cookies</a>
        </p>
      </div>
    </footer>
  );
}; 

export default Footer;