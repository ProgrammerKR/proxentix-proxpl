import React from 'react';
import { Reveal } from './Reveal';

export const CookiePolicy: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050b1d] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <Reveal>
          <h1>Cookie Policy</h1>
          <p className="lead">Last updated: December 27, 2025</p>

          <p>
            This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
          </p>

          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
          </p>

          <h2>2. How ProXPL Uses Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul>
            <li><strong>Preferences:</strong> We use cookies to remember your preferences, such as your preferred theme (Dark/Light mode).</li>
            <li><strong>Analytics:</strong> We may use cookies to help us understand how you use our website.</li>
          </ul>

          <h2>3. Your Choices</h2>
          <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          </p>
        </Reveal>
      </div>
    </section>
  );
};