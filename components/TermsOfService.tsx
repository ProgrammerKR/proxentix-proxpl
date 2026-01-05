import React from 'react';
import { Reveal } from './Reveal';

export const TermsOfService: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050b1d] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <Reveal>
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: December 27, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the ProXPL website and tools, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h2>2. Use License</h2>
          <p>
            ProXPL is an open-source programming language. The source code is licensed under the MIT License. The content on this website is for informational purposes.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on ProXPL's website are provided on an 'as is' basis. ProXPL makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall ProXPL or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ProXPL's website.
          </p>
        </Reveal>
      </div>
    </section>
  );
};