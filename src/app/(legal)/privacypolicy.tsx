import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="text-grey">Last updated: January 25th, 2025</p>

      <p className="mt-4">
        This Privacy Policy describes Our policies and procedures on the
        collection, use, and disclosure of your information when you use the
        Service and tells you about your privacy rights and how the law protects
        you.
      </p>

      <p className="mt-4">
        We use your Personal Data to provide and improve the Service. By using
        the Service, you agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Interpretation and Definitions
      </h2>
      <h3 className="text-lg font-semibold mt-4">Interpretation</h3>
      <p className="mt-2">
        Words with initial capital letters have meanings defined under the
        following conditions. The following definitions shall have the same
        meaning regardless of whether they appear in singular or plural.
      </p>

      <h3 className="text-lg font-semibold mt-4">Definitions</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Account:</strong> A unique account created for you to access
          our Service.
        </li>
        <li>
          <strong>Company:</strong> Refers to Made With Make.
        </li>
        <li>
          <strong>Cookies:</strong> Small files placed on your device that track
          browsing history and other data.
        </li>
        <li>
          <strong>Country:</strong> Refers to Kenya.
        </li>
        <li>
          <strong>Device:</strong> Any device that can access the Service, such
          as a computer, phone, or tablet.
        </li>
        <li>
          <strong>Personal Data:</strong> Any information that relates to an
          identified or identifiable individual.
        </li>
        <li>
          <strong>Service:</strong> Refers to the Website and associated
          automation, AI, and workflow optimization solutions provided by Made
          With Make.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        Collecting and Using Your Personal Data
      </h2>
      <h3 className="text-lg font-semibold mt-4">Types of Data Collected</h3>
      <p className="mt-2">
        <strong>Personal Data:</strong> We may collect personally identifiable
        information including email address, name, phone number, company
        details, and usage data.
      </p>
      <p className="mt-2">
        <strong>Usage Data:</strong> This may include IP address, browser type,
        pages visited, and time spent on our Service.
      </p>

      <h3 className="text-lg font-semibold mt-4">
        Tracking Technologies and Cookies
      </h3>
      <p className="mt-2">
        We use Cookies and similar tracking technologies to enhance user
        experience. You can disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6">Use of Your Personal Data</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Providing and maintaining our Service.</li>
        <li>Managing your Account.</li>
        <li>Communicating with you regarding updates or offers.</li>
        <li>Business transfers or corporate restructuring.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        Retention and Security of Your Data
      </h2>
      <p className="mt-2">
        We retain your Personal Data only for as long as necessary. While we use
        secure measures, no online data transmission is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Changes to this Privacy Policy
      </h2>
      <p className="mt-2">
        We may update this Privacy Policy periodically. You are advised to
        review it regularly.
      </p>

      <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
      <p className="mt-2">
        If you have any questions, contact us at{" "}
        <a href="mailto:privacy@madewithmake.com" className="text-blue-600">
          privacy@madewithmake.com
        </a>
        .
      </p>
    </div>
  );
}
