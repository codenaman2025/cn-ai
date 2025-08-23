import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  X,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface RegistrationModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onRegistered?: () => void;
  openLogin?: () => void;
}

type Errors = Partial<
  Record<
    "email" | "password",
    string
  >
>;

type WorkStatus = "experienced" | "fresher" | "";
import googleIcon from "../../assets/icons/ic-google.svg";
import linkedinIcon from "../../assets/icons/ic-linkedin.svg";

export default function RegistrationModal({
  isOpen,
  closeModal,
  onRegistered,
  openLogin = () => {},
}: RegistrationModalProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [workStatus, setWorkStatus] = useState<WorkStatus>("");
  const [role, setRole] = useState("Engineer");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();const mockLogin = (success = true) => {
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
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setWorkStatus("");
        setRole("Engineer");
        setFile(null);
        setErrors({});
        setScanning(false);
        setScanProgress(0);
        setSubmitting(false);
        setDone(false);
      }, 200);
    }
  }, [isOpen]);

  const validateFile = (f: File) => {
    const allowed = [".pdf", ".doc"];
    const lower = f.name.toLowerCase();
    const isValid = allowed.some((ext) => lower.endsWith(ext));
    if (!isValid) return "Only PDF or DOC files are allowed.";
    const maxSizeMB = 5;
    if (f.size > maxSizeMB * 1024 * 1024) {
      return `File too large. Max ${maxSizeMB}MB.`;
    }
    return "";
  };

  const handleFile = (f: File) => {
    const err = validateFile(f);
    if (err) {
      setErrors((e) => ({ ...e, file: err }));
      setFile(null);
      setScanning(false);
      setScanProgress(0);
      return;
    }
    setErrors((e) => ({ ...e, file: "" }));
    setFile(f);

    // simulate scanning
    setScanning(true);
    setScanProgress(0);
    const id = setInterval(() => {
      setScanProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(() => setScanning(false), 400);
          return 100;
        }
        return p + Math.floor(Math.random() * 12 + 6);
      });
    }, 220);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleBrowse = () => fileInputRef.current?.click();

  const cleanMobile = (val: string) => val.replace(/[^\d]/g, ""); // digits only

  const validateForm = () => {
    const next: Errors = {};
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      next.email = "Valid email is required.";
    if (!password || password.length < 6)
      next.password = "Password must be at least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // simulate submission
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTimeout(() => {
        onRegistered?.();
        closeModal();
      }, 1000);
    }, 1500);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl relative border border-gray-200/40 dark:border-white/10">
                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={20} />
                </button>

                {/* Title */}
                <Dialog.Title className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Create your account
                </Dialog.Title>
                <p className="text-center text-sm text-gray-500 mt-1">
                  Join Code Naman — Get connected faster.
                </p>

                {/* Form */}
                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  {/* Name / Email */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {/* <div>
                      <label className="text-sm text-gray-700 dark:text-gray-200">
                        Full name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-logo-mid"
                        placeholder="What is your name?"
                      />
                      <p className="text-[11px] text-gray-500 mt-1">
                        What is your name?
                      </p>
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.name}
                        </p>
                      )}
                    </div> */}

                    <div>
                      <label className="text-sm text-gray-700 dark:text-gray-200">
                        Email ID
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-logo-mid text-white"
                        placeholder="name@domain.com"
                      />
                      <p className="text-[11px] text-gray-500 mt-1">
                        We’ll send relevant jobs and updates to this email.
                      </p>
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols- gap-4">
                    

                    {/* <div>
                      <label className="text-sm text-gray-700 dark:text-gray-200">
                        Mobile number
                      </label>
                      <input
                        inputMode="numeric"
                        maxLength={14}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-logo-mid"
                        placeholder="Enter your mobile number"
                      />
                      <p className="text-[11px] text-gray-500 mt-1">
                        Recruiters will contact you on this number.
                      </p>
                      {errors.mobile && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.mobile}
                        </p>
                      )}
                    </div> */}
                    <div>
                      <label className="text-sm text-gray-700 dark:text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full rounded-md border text-white border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-logo-mid"
                        placeholder="Minimum 6 characters"
                      />
                      <p className="text-[11px] text-gray-500 mt-1">
                        This helps your account stay protected.
                      </p>
                      {errors.password && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.password}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Work Status */}
                  {/* <div>
                    <label className="text-sm text-gray-700 dark:text-gray-200">Work status <span className="text-red-500">*</span></label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setWorkStatus("experienced")}
                        className={`text-left rounded-2xl border p-4 transition-all ${
                          workStatus === "experienced"
                            ? "border-logo-mid bg-logo-mid/5 shadow-sm"
                            : "border-gray-300 dark:border-gray-700 hover:border-logo-mid/60"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Briefcase
                            size={22}
                            className={workStatus === "experienced" ? "text-logo-mid" : "text-gray-500"}
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">I’m experienced</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              I have work experience (excluding internships)
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setWorkStatus("fresher")}
                        className={`text-left rounded-2xl border p-4 transition-all ${
                          workStatus === "fresher"
                            ? "border-logo-mid bg-logo-mid/5 shadow-sm"
                            : "border-gray-300 dark:border-gray-700 hover:border-logo-mid/60"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <BookOpen
                            size={22}
                            className={workStatus === "fresher" ? "text-logo-mid" : "text-gray-500"}
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">I’m a fresher</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              I am a student/ Haven’t worked after graduation
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                    {errors.workStatus && (
                      <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.workStatus}
                      </p>
                    )}
                  </div> */}

                  {/* CV Upload */}
                  <div
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={`rounded-lg border-2 border-dashed p-5 transition-colors ${
                      dragActive ? "border-logo-mid bg-logo-mid/5" : "border-gray-300 dark:border-gray-700"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white flex items-center justify-center shadow">
                        <Upload size={20} />
                      </div>

                      {!file && (
                        <>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                            CV/Resume — 
                            Drag & drop your resume here, or{" "}
                            <button
                              type="button"
                              onClick={handleBrowse}
                              className="text-logo-mid underline"
                            >
                              browse
                            </button>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            <strong>PDF or DOC only</strong>, max 5MB.
                          </p>
                        </>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFile(f);
                        }}
                      />

                      {file && (
                        <div className="mt-3 w-full max-w-sm">
                          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 justify-center">
                            <FileText size={16} />
                            <span className="truncate">{file.name}</span>
                          </div>
                          {scanning ? (
                            <div className="mt-3">
                              <div className="scan-bar">
                                <div
                                  className="scan-bar-fill"
                                  style={{ width: `${Math.min(scanProgress, 100)}%` }}
                                />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 justify-center">
                                <Loader2 className="animate-spin" size={14} />
                                Scanning resume…
                              </div>
                            </div>
                          ) : (
                            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-green-500">
                              <CheckCircle2 size={16} />
                              Ready to upload
                            </div>
                          )}
                        </div>
                      )}

                      {errors.file && (
                        <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.file}
                        </p>
                      )}
                    </div>
                  </div>
  
                  {/* Submit */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting || scanning}
                    className="w-full mt-2 py-2 rounded-md text-white bg-gradient-to-r from-logo-start via-logo-mid to-logo-end shadow hover:opacity-95 disabled:opacity-60"
                  >
                    {submitting ? "Creating your account…" : "Create Account"}
                  </motion.button>

                  {done && (
                    <p className="text-center text-sm text-green-500 mt-2">
                      Account created! Redirecting…
                    </p>
                  )}
                  
                </form>
                <div className="mt-4 flex flex-col gap-2">
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleGoogleLogin} disabled={loading} className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90">
                    <img src={googleIcon} className="w-6" alt="Sign in with Google" /> Sign in with Google
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleLinkedInLogin} disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90">
                    <img src={linkedinIcon} className="w-6" alt="Sign in with LinkedIn" /> Sign in with LinkedIn
                  </motion.button>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        closeModal();
                        // slight delay avoids modal animation overlap (optional)
                        setTimeout(() => openLogin?.(), 50);
                      }}
                      className="text-logo-mid underline hover:text-logo-end"
                    >
                      Log in
                    </button>
                  </p>
                {/* Tiny CSS for the scan bar */}
                <style>{`
                  .scan-bar { height: 6px; width: 100%; background: rgba(0,0,0,.08); border-radius: 9999px; overflow: hidden; }
                  .dark .scan-bar { background: rgba(255,255,255,.08); }
                  .scan-bar-fill { height: 100%; background: linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to)); transition: width .2s ease; }
                `}</style>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
