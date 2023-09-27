import classNames from 'classnames';
import { useEffect, useRef } from 'react';

const TermsOfService = () => {
  const termsOfServiceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (termsOfServiceRef.current) {
      termsOfServiceRef.current.scrollIntoView({
        behavior: "smooth",
        block:'nearest'
      });
    }
  }, []);
  return (
      <div
        ref={termsOfServiceRef}
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] font-sans',
        )}
      >
        <header className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-center w-full">
          <h1 className="text-4xl font-bold">TERMS OF SERVICE</h1>
          <h6 className="text-sm"> Last updated: September 10, 2023.</h6>
        </header>
        <h2 className="text-xl font-bold mb-4">Consent to Our Legal Terms</h2>
        <p className="mb-4">
          We are Chatfly, a company registered at … Da Nang, Viet Nam. Our
          operations encompass the website chatfly.co and any other associated
          products and services that are connected to or linked with these legal
          terms. Chatfly enables you to either upload one or multiple files
          (pdf, .doc, .docx, .txt, .csv, .xlsx) or provide a website link for
          scraping. You can reach out to us via email at contact@chatfly.co.
        </p>
        <p className="mb-4">
          These Legal Terms constitute a legally binding agreement between you
          and ChatFly (whether an individual or a business entity) concerning
          your access to and use of the Service. By accessing the Service, you
          agree that you have read, understood, and fully consented to abide by
          all of these Legal Terms. If you do not agree or comply with these
          legal terms, you will not be entitled to continue using Chatfly.
        </p>
        <p className="mb-4" id="head">
          Additional terms and conditions or documents are always updated
          regularly. Any change or modification of these Legal Terms is our
          right. We will notify you of any changes by updating the "Last
          Updated" date of these Legal Terms. It is your responsibility to
          periodically review these Legal Terms for updates. You will comply
          with and will be deemed to have known and accepted the changes in any
          revised Legal Terms by continuing to use the Services after the date
          such revised Legal Terms are posted.
        </p>
        <p className="mb-4">
          All users who are not of age in the territory in which they reside
          (usually under the age of 18) must have permission and must be
          directly supervised by a parent or guardian to use Chatfly. If you are
          an underage person, you must have your parent or guardian read and
          agree to these Legal Terms before you use the Service.
        </p>
        <h2 className="text-xl font-bold mb-4">Index of Contents</h2>
        <ul className="list-decimal list-inside"  id="our_service">
          <li className="mb-2"><a href="#our_service">Our Services.</a></li>
          <li className="mb-2"><a href="#intellectual">Intellectual Property Rights</a></li>
          <li className="mb-2"><a href="#free_trial">Free Trial</a></li>
          <li className="mb-2"><a href="#user_registration">User Registration</a></li>
          <li className="mb-2"><a href="#use_representations">Use Representations</a></li>
          <li className="mb-2"><a href="#purchases_payment">Purchases and Payment</a></li>
          <li className="mb-2"><a href="#cancellation">Cancellation</a></li>
          <li className="mb-2"><a href="#prohibited_activities">Prohibited Activities</a></li>
          <li className="mb-2"><a href="#user_generated">User Generated Contributions</a></li>
          <li className="mb-2"><a href="#privacy_policy">Privacy Policy</a></li>
          <li className="mb-2"><a href="#services_management">Services Management</a></li>
          <li className="mb-2"><a href="#term_and_termination">Term and Termination</a></li>
          <li className="mb-2"><a href="#contact_us">User Data</a></li>
          <li className="mb-2"><a href="#contact_us">Modifications and Interruptions</a></li>
          <li className="mb-2">
          <a href="#contact_us">Electronic Communications, Transaction and Signatures</a>
          </li>
          <li className="mb-2"><a href="#contact_us">Contact us</a></li>
        </ul>
        <section id="our_service">
        <h2 className="text-xl font-bold mb-4" id="intellectual">1. OUR SERVICES</h2>
        <p className="mb-4">
          The information provided when using the Service is not intended for
          distribution to or use by any person or entity in any region or
          country without the permission of Chatfly. Such distribution or use
          would violate laws or regulations or would be subject to a
          registration request from us within that region or country. Therefore,
          those who choose to access the Service from other locations must do so
          on their own and are solely responsible for compliance with local
          laws, if and when local laws apply.
        </p>
          </section>
        <h2 className="text-xl font-bold mb-4">
          2. INTELLECTUAL PROPERTY RIGHTS
        </h2>
        <p className="mb-2 font-bold">Chatfly’s intellectual property</p>
        <p className="mb-4">
          We are the owner or are granted the right to use all intellectual
          property rights in our Service, including all source code, databases,
          functions, software, website design, audio, video, text, images and
          graphics belonging to Chatfly for personal use, not to trade or your
          internal business purposes.
        </p>
        <p className="mb-2 font-bold">Utilizing our Services</p>
        <p className="mb-4">
          Subject to your compliance with these Legal Terms, we grant you a
          non-exclusive, non-transferable, revocable license to: access the
          service, download or print a copy of any portion of the Content that
          you have properly accessed solely for your personal, non-commercial
          use. Except as set forth in this section or anywhere else in the
          Chatfly Legal Terms, no part of the service may be copied, reproduced,
          aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed or
          exploited for any commercial purpose, unless previously agreed in
          writing by Chatfly.
        </p>
        <p className="mb-4">
          If you want to use any part of the Service or anywhere else in our
          Legal Terms, please send your request to: contact@chatnode.ai. If
          approved by Chatfly, you are entitled to use those parts. Any
          violation of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use the Service
          will terminate immediately.
        </p>
        <p className="mb-2 font-bold">Customer’s submissions</p>
        <p className="mb-4">
          Please review this section and the{' '}
          <a href="#">"PROHIBITED ACTIVITIES"</a> section carefully before using
          our Services to understand what rights you grant us and what tasks you
          must perform when you post or upload any content through Chatfly's
          Services.{' '}
        </p>
        <p className="mb-4">
          <strong>Submissions:</strong> By sending us directly any questions,
          comments, suggestions, opinions, feedback or other information about
          the Services, you agree to assign to us all intellectual property
          rights in such Submissions. You agree that we will own these
          Submissions and reserve the right to use and disseminate them in an
          unrestricted manner for any lawful purpose, commercial or
          non-commercial, without acknowledgment or compensation to you.
        </p>
        <p className="mb-4" id="free_trial">
          <strong>You are responsible for what you post or upload:</strong> By
          submitting Submissions to us via any part of Chatfly, you confirm that
          you have read and agree to their "PROHIBITED ACTIVITIES" section and
          will post, send, publish, upload or transmit through the Services any
          Content that includes: unlawful, harassing, hateful, harmful,
          defamatory, obscene, malicious, discriminates against, threatens any
          person or group, is sexual, false, inaccurate, fraudulent or
          deceptive.
        </p>
        <p className="mb-4">
          To the extent permitted by applicable law, you are allowed in cases
          where you have the necessary rights and licenses to submit such
          Submissions and you have full authority to assign to us the rights
          mentioned above related to your Submissions and ensure that your
          Submissions do not include confidential information.
        </p>

        <h2 className="text-xl font-bold mb-4" id="user_registration" >3. FREE TRIAL</h2>
        <p className="mb-4">
          We offer a 14 days free trial to new users who register Chatfly
          accounts. The accounts will be deleted after 14 days of trial if users
          do not upgrade to higher plans.
        </p>

        <h2 className="text-xl font-bold mb-4" id="use_representations">4. USER REGISTRATION</h2>
        <p className="mb-4">
          You must create an account to use the Service. You agree to keep your
          password confidential and will be responsible for all use of your
          account and password. We have the right to remove, revoke or change
          your username in case we determine that username does not comply with
          the regulations.
        </p>

        <h2 className="text-xl font-bold mb-4" id="purchases_payment">5. USER REPRESENTATIONS</h2>
        <p className="mb-4">
          When using Chatfly, you represent the following: (1) all registration
          information you submit will be accurate, current and complete; (2) you
          will maintain the accuracy of such information and promptly update
          registration information as necessary; (3) you have legal capacity and
          agree to comply with these Legal Terms; (4) you are not under age in
          the jurisdiction in which you reside or, if under age, you have
          received parental permission to use the Services; (5) you will not
          access the Service through automated or non-human means, whether
          through a bot, script or any other means; (6) you will not use the
          Services for any illegal or unauthorized purpose; and (7) your use of
          the Service will not violate any applicable law or regulation.
        </p>
        <p className="mb-4">
          If you provide any information that is untrue, inaccurate, not current
          or incomplete, we have the right to suspend or terminate your account
          and refuse any current or future use of your account for Chatfly.
        </p>

        <h2 className="text-xl font-bold mb-4" id="cancellation">6. PURCHASES AND PAYMENT</h2>
        <p className="mb-4">We accept the following forms of payment:</p>
        <ul className="list-disc list-inside">
          <li className="mb-1">Electronic wallets</li>
          <li className="mb-1">ATM - iBanking</li>
          <li className="mb-1">Visa</li>
          <li className="mb-1">Master</li>
        </ul>
        <p className="mb-4">You agree to provide current, complete and accurate purchase and account information for all purchases made through Chatfly. You also agree to update your account and payment information, including email address, payment method, and card expiration date, and to pay immediately so we can complete your transaction and contact you. with you when needed. Sales tax will be added to the price of purchases upon our request. We may change prices at any time. All payments will be made in VND.</p>
        <p className="mb-4">You agree to pay all charges at the then current prices for your purchases and any applicable shipping charges. You authorize us to charge your chosen payment provider for any amounts after you place your order. If your order is subject to recurring payments, you agree to allow us to deduct funds from your payment method on a recurring basis without requiring prior approval for each recurring payment. , until you cancel the respective order. </p>
        <p className="mb-4">We reserve the right to correct any errors or omissions in pricing, even if we have previously requested or received payment.</p>

        <h2 className="text-xl font-bold mb-4" id="prohibited_activities">7. CANCELLATION</h2>
        <p className="mb-4">All purchases are non-refundable. You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term.</p>
        <p className="mb-4">If you are unsatisfied with our Services, please email us at contact@chatfly.co.</p>

        <h2 className="text-xl font-bold mb-4" id="user_generated">8. PROHIBITED ACTIVITIES</h2>
        <p className="mb-4">You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
        <p className="mb-4">As a user of the Services, you agree not to:</p>
        <ul className="list-disc list-inside">
          <li className="mb-1">Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li className="mb-1">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li className="mb-1">Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
          <li className="mb-1">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
          <li className="mb-1">Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
          <li className="mb-1">Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li className="mb-1">Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          <li className="mb-1">Engage in unauthorized framing of or linking to the Services.</li>
          <li className="mb-1">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
          <li className="mb-1">Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li className="mb-1">Delete the copyright or other proprietary rights notice from any Content.</li>
          <li className="mb-1">Attempt to impersonate another user or person or use the username of another user.</li>
          <li className="mb-1">Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
          <li className="mb-1">Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
          <li className="mb-1">Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
          <li className="mb-1">Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
          <li className="mb-1">Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li className="mb-1">Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
          <li className="mb-1">Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
        </ul>

        <h2 className="text-xl font-bold mb-4"  id="privacy_policy">9. USER GENERATED CONTRIBUTIONS</h2>
        <p className="mb-4">The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</p>
        <ul className="list-disc list-inside">
          <li className="mb-1">The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
          <li className="mb-1">You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
          <li className="mb-1">You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
          <li className="mb-1">Your Contributions do not violate the privacy or publicity rights of any third party.</li>
          <li className="mb-1">Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
          <li className="mb-1">Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
          <li className="mb-1">Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
        </ul>

        <h2 className="text-xl font-bold mb-4"  id="services_management">10. PRIVACY POLICY</h2>
        <p className="mb-4">We care about data privacy and security. Please review our Privacy Policy: chatfly.co#privacy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. </p>

        <h2 className="text-xl font-bold mb-4"  id="term_and_termination">11. SERVICES MANAGEMENT</h2>
        <p className="mb-4">We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>

        <h2 className="text-xl font-bold mb-4"  id="contact_us">12. TERM AND TERMINATION</h2>
        <p className="mb-4">These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

        <h2 className="text-xl font-bold mb-4"  id="contact_us">13. USER DATA</h2>
        <p className="mb-4">We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

        <h2 className="text-xl font-bold mb-4"  id="contact_us">14. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p className="mb-4">We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services. We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>

        <h2 className="text-xl font-bold mb-4"  id="contact_us">15. ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES</h2>
        <p className="mb-4">Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

        <h2 className="text-xl font-bold mb-4">16. CONTACT US</h2>
        <p className="mb-4">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: contact@chatfly.co.</p>

        <footer className="bg-gray-200 p-4 text-center">
          &copy; 2023 ChatFly. All rights reserved.
        </footer>
      </div>
  );
};

export default TermsOfService;
