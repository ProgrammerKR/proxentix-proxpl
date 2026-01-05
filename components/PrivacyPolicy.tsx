import React from 'react';
import { Reveal } from './Reveal';

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050b1d] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <Reveal>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: December 27, 2025</p>
          
          <p>
            At ProXPL, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, playground, and tools.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            <strong>Interactive Playground:</strong> When you use the AI features in the playground, the code and prompts you submit are processed by third-party AI providers (Google Gemini) to generate responses. We do not permanently store your code submissions on our servers.
          </p>
          <p>
            <strong>Website Analytics:</strong> We may collect anonymous usage data to help us improve the documentation and user experience.
          </p>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>To provide and maintain the Service.</li>
            <li>To monitor the usage of the Service.</li>
            <li>To improve the performance and features of the ProXPL language.</li>
          </ul>

          <h2>3. Third-Party Services</h2>
          <p>
            We may use third-party service providers to monitor and analyze the use of our Service, such as Google Analytics or similar tools.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via GitHub Issues.
          </p>
        </Reveal>
      </div>
    </section>
  );
};