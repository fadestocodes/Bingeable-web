import React from 'react'

const PrivacyPage = () => {
  return (
    <div
      style={{
        
        lineHeight: 1.6,
        paddingTop: 100,
        maxWidth: 800,
        margin: "auto",
        color: "white",
      }}
    >
      <h1 style={{ color: "white" }}>Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong> April 16, 2025
      </p>

      <p>
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our app <strong>Bingeable</strong>.
      </p>

      <h2 style={{ color: "white" }}>1. Information We Collect</h2>
      <p>We may collect certain information from you when you use the app, including:</p>
      <ul>
        <li>Account details (e.g., email address, username)</li>
        <li>Usage data and preferences</li>
        <li>Device information (e.g., device type, OS version)</li>
      </ul>

      <h2 style={{ color: "white" }}>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and maintain the app</li>
        <li>Improve user experience</li>
        <li>Send relevant notifications and updates</li>
      </ul>

      <h2 style={{ color: "white" }}>3. Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information. We may share data with
        third-party services we use to run the app, but only as necessary.
      </p>

      <h2 style={{ color: "white" }}>4. Data Retention</h2>
      <p>
        We retain your data only for as long as necessary to fulfill the purposes
        outlined in this policy.
      </p>

      <h2 style={{ color: "white" }}>5. Your Choices</h2>
      <p>
        You can choose to delete your account or data at any time. Please contact us
        using the information below.
      </p>

      <h2 style={{ color: "white" }}>6. Contact Us</h2>
      <p>If you have any questions or concerns, feel free to reach out:</p>
      <p>
        Email:{" "}
        <a
          href="mailto:fadestocodes@gmail.com"
          style={{ color: "#007AFF", textDecoration: "none" }}
        >
          fadestocodes@gmail.com
        </a>
      </p>

      <p>Thank you for using Bingeable!</p>
    </div>
  )
}

export default PrivacyPage