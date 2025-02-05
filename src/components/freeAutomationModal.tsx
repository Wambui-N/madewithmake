import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface FreeAutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeAutomationModal: React.FC<FreeAutomationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const supabase = createClientComponentClient();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: submitError } = await supabase
        .from("users")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
          },
        ])
        .select();

      if (submitError) throw submitError;

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    try {
      const { data, error: downloadError } = await supabase
        .storage
        .from('automations')
        .download('email-automation.zip');

      if (downloadError) throw downloadError;

      // Create a download link for the file
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email-automation.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error downloading file:", err);
      setError("Failed to download file");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsSuccess(false);
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md rounded-lg bg-gray-900 p-8"
          >
            <button
              onClick={resetForm}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="mb-4 rounded-full bg-green-500/20 p-3">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Thank You!</h3>
                  <p className="mb-6 text-center text-gray-300">
                    Your automation is ready to download.
                  </p>
                  <Button
                    onClick={handleDownload}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky to-[#7DCFE6] px-6 py-2 font-semibold text-gray-900"
                  >
                    <Download className="h-4 w-4" />
                    Download Automation
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="mb-4 text-2xl font-bold text-sky">
                    Get Your Free Automation
                  </h3>
                  <p className="mb-6 text-gray-300">
                    Enter your details below to receive the free email attachment
                    automation.
                  </p>
                  {error && (
                    <p className="mb-4 text-sm text-red-400">
                      {error}
                    </p>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-medium text-gray-300"
                        >
                          First Name
                        </label>
                        <Input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="w-full bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-sm font-medium text-gray-300"
                        >
                          Last Name
                        </label>
                        <Input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          className="w-full bg-gray-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-gray-700 text-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-gradient-to-r from-sky to-[#7DCFE6] px-6 py-2 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Get Automation"}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FreeAutomationModal;