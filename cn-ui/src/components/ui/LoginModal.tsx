import { Dialog, Transition } from "@headlessui/react";
import { Fragment,useState  } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/ic-google.svg";
import linkedinIcon from "../../assets/icons/ic-linkedin.svg";

interface LoginModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openRegister: () => void;
}

export default function LoginModal({ isOpen, closeModal,openRegister = () => {}, }: LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const mockLogin = (success = true) => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      if (success) {
        closeModal();
        navigate("/profile");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }, 1500);
  };
  const handleGoogleLogin = () => mockLogin(true);
  const handleLinkedInLogin = () => mockLogin(true);
  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mockLogin(true); // change to false to simulate failure
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Overlay */}
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl relative">
                {/* Close button */}
                <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <X size={20} />
                </button>

                {/* Heading */}
                <Dialog.Title className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Welcome Back!
                </Dialog.Title>
                <p className="text-center text-sm text-gray-500 mt-1">
                  Login to access India's First AI-Powered Tech Social Network.
                </p>

                {/* Email form */}
                <form onSubmit={handleEmailLogin} className="mt-6 space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-logo-mid" required />
                  <input type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-logo-mid" required />

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <motion.button whileTap={{ scale: 0.97 }} type="submit" disabled={loading} className="w-full bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white py-2 rounded-md shadow hover:opacity-90">
                    {loading ? "Signing in..." : "Login"}
                  </motion.button>
                </form>

                {/* Social logins */}
                <div className="mt-4 flex flex-col gap-2">
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleGoogleLogin} disabled={loading} className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90">
                    <img src={googleIcon} className="w-6" alt="Sign in with Google" /> Sign in with Google
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleLinkedInLogin} disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90">
                    <img src={linkedinIcon} className="w-6" alt="Sign in with LinkedIn" /> Sign in with LinkedIn
                  </motion.button>
                </div>

                {/* Register link */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                  New to Code Naman?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      closeModal();
                      openRegister();
                    }}
                    className="text-logo-mid underline hover:text-logo-end"
                  >
                    Register here
                  </button>
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
