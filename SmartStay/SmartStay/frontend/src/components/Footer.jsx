import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-10 text-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              BookMy<span className="text-cyan-400">Haven</span>
            </h3>
            <p className="text-sm text-slate-300">
              Discover modern stays, curated packages, and seamless bookings all in one place.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-300 transition-colors hover:text-cyan-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-300 transition-colors hover:text-cyan-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-300 transition-colors hover:text-cyan-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-200 transition-colors hover:text-cyan-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-slate-200 transition-colors hover:text-cyan-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-slate-200 transition-colors hover:text-cyan-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} BookMyHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;