// src/components/CandidateInterestModal.jsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { Briefcase, X } from "lucide-react";

export default function CandidateInterestModal({ isOpen, onClose }) {
  const [interests, setInterests] = useState([]);

  const toggleInterest = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const interestOptions = [
    "User Experience Designer",
    "Full Stack Engineer",
    "User Experience Engineer",
    "Frontend Developer",
    "Freelancer Projects",
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">
                  Manage Job Interests
                </Dialog.Title>
                <button onClick={onClose}>
                  <X className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Select roles you’re interested in. You’ll get daily updates via email & notifications.
              </p>

              <div className="space-y-2">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg border ${
                      interests.includes(interest)
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Briefcase className="w-5 h-5" />
                    {interest}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Done
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
