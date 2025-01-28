"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    setSubscriptionStatus("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="responsive mt-8 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-lg bg-gray-900/50 flex flex-col items-center p-8">
          <div className="pb-12">
            <Link href="#">
              <Image src="/H Logo.svg" alt="Logo" width={200} height={200} />
            </Link>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-grey">
              Stay updated with our latest news and updates
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky sm:w-96"
                required
              />
              <button
                type="submit"
                className="flex items-center rounded-lg bg-sky px-6 py-2 font-medium text-black transition-colors hover:bg-sky/70 focus:outline-none focus:ring-2 focus:ring-sky"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
            {subscriptionStatus && (
              <p className="mt-4 text-green-400">{subscriptionStatus}</p>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h4 className="mb-4 font-bold">General</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-grey hover:text-white text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  className="text-grey hover:text-white text-sm"
                >
                  How we work
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-grey hover:text-white text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-grey hover:text-white text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-grey hover:text-white text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-grey hover:text-white text-sm">
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacypolicy"
                  className="text-grey hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/termsandconditions"
                  className="text-grey hover:text-white text-sm"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-8 text-center text-gre text-sm text-grey">
          <p>© Copyright 2025. All rights reserved by Made With Make</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
