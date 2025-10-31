"use client";

import Navbar from "@/Components/Navbar";
import Footerbar from "@/Components/Footerbar";

export default function PrivacyPolicy() {
  return (
    <div className="text-black bg-white min-h-screen">
      <Navbar showLinks={false} />

      {/* Header Section */}
      <div className="bg-[#EBEFE4] h-[308px] lg:h-[324px] flex justify-center">
        <h1 className="w-[80%] pt-[148px] lg:pt-[166px] text-center lg:text-left text-[34px] leading-[44px] md:text-[54px] md:leading-[64px] font-semibold text-[#1B312A]">
          Privacy Policy
        </h1>
      </div>

      {/* Main Content */}
      <main className="lg:max-w-[80%] lg:mx-auto lg:pt-[79px] px-6 py-12 space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">MUNI Privacy Policy</h2>
          <p>
            We take your privacy very seriously and are committed to being
            transparent with how we use your information. This website and any
            of our services and sites directing you to this Privacy Policy are
            controlled by August Digital Inc. (“MUNI”). (collectively “we” or
            “us”).
          </p>
          <p>Our Privacy Policy explains:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>What information we collect and why we collect it.</li>
            <li>How we use that information.</li>
            <li>
              The choices we offer, including how to access and update
              information.
            </li>
          </ul>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:support@getmuni.co"
              className="text-blue-600 underline"
            >
              support@getmuni.co
            </a>
          </p>
        </section>

        {/* Notices from MUNI */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notices from MUNI</h2>
          <ol className="list-decimal ml-6">
            <li>
              MUNI will, from time to time, generate and send electronic
              communications (such as e-mails) to you containing information
              about MUNI's new and current services and products. By entering
              into this Agreement, you are consenting to receive such electronic
              communications from MUNI at any electronic address that you
              provide. Please review this site’s Privacy Policy which also
              governs your visit to this site and webstore. Our Privacy Policy
              is always accessible on our site’s home page.
            </li>
            <li>
              If MUNI needs to contact you about your product or account, you
              consent to receive such notices by email. You agree that any such
              notices that we send you electronically will satisfy any legal
              communication requirements.
            </li>
            <li>
              You understand and agree to MUNI authorizing targeted
              advertisements with credible third parties and to provide better
              service and enjoyment of the website and App (if applicable) and
              related functions.
            </li>
            <li>
              You understand and agree that MUNI may send you notices on the
              website and/or by email or through App (if applicable) and
              Software from time to time that are in line with business and
              product development at its sole discretion.
            </li>
          </ol>
        </section>

        {/* What Information Do We Collect? */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What Information Do We Collect?
          </h2>
          <p>
            We collect information from you when you register on our site,
            interact with our AI tools and chatbot feature, subscribe to our
            services, respond to a survey, or fill out a form. This may include:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Your name, email address, mailing address, phone number, or credit
              card information.
            </li>
            <li>
              Automatic data like IP address, browser type, operating system,
              and browsing actions. This includes information collected through
              automatic data collection technologies such as Google Analytics.
            </li>
          </ul>
          <p>
            As you navigate through our Website, we may use automatic data
            collection technologies to collect certain information about your
            equipment, browsing actions, and patterns. This will generally
            include information about your location, your tracking pattern
            through our website, and any communications between your computer
            and our Website. Among other things, we will collect data about the
            type of computer you use, your Internet connection, your IP address,
            your operating system, and your browser type.
          </p>
          <p>
            We may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant, or other lawful request for information we receive, or to
            otherwise protect our rights.
          </p>
        </section>

        {/* What Do We Use Your Information For? */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What Do We Use Your Information For?
          </h2>
          <p>
            We use the information we collect from you for the following
            purposes:
          </p>
          <ul className="list-disc ml-6">
            <li>
              To personalize your experience and improve customer service.
            </li>
            <li>To improve our website offerings based on feedback.</li>
            <li>To process transactions securely and efficiently.</li>
            <li>
              To communicate with clients about services, logistics, and manage
              accounts with MUNI.
            </li>
            <li>
              To develop analytics tools and manage relationships with
              customers.
            </li>
            <li>
              To provide customers with timely and reliable services, including
              the coordination and scheduling of services through other city
              and/or community personnel, the performance of logistics services,
              and communication with our clients about the status of their
              services.
            </li>
            <li>
              To bill our customers for the products and services we provide
              them, authenticate their identities, and produce detailed invoices
              that help them verify the charges billed to them.
            </li>
            <li>
              To establish, maintain, and develop relationships with our
              customers, including the management of their accounts with MUNI.
            </li>
            <li>
              To develop, promote, and manage our products and services,
              including the completion of market studies and the communication
              of new products and services, special offers, promotions, and
              service tips.
            </li>
            <li>
              To develop robust data to be used for the analytics tools offered
              by MUNI.
            </li>
            <li>
              To assist law enforcement agencies, collect debts owed to MUNI,
              protect MUNI’s business interests (including enforcing MUNI’s
              Terms and Conditions of Service), and generally meet requirements
              imposed by law.
            </li>
            <li>
              To send periodic emails containing information and updates
              pertaining to your order or service, as well as occasional company
              news, updates, related product or service information, etc.
            </li>
          </ul>
          <p>
            Note: If at any time you would like to unsubscribe from receiving
            future emails, we include detailed unsubscribe instructions at the
            bottom of each email.
          </p>
        </section>

        {/* Do We Disclose Information to Third Parties? */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Do We Disclose Information to Third Parties?
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. This does not include trusted
            third parties who assist us in operating our website, conducting our
            business, or servicing you, so long as those parties agree to keep
            this information confidential. We may also release your information
            when we believe release is appropriate to comply with the law,
            enforce our site policies, or protect ours or others’ rights,
            property, or safety. However, non-personally identifiable visitor
            information may be provided to other parties for marketing,
            advertising, or other uses.
          </p>
        </section>

        {/* How Do We Protect Your Information? */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How Do We Protect Your Information?
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you place an order or enter,
            submit, or access your personal information. We offer the use of a
            secure server. All supplied sensitive/credit information is
            transmitted via Secure Socket Layer (SSL) technology and then
            encrypted into our payment gateway provider's database, only to be
            accessible by those authorized with special access rights to such
            systems and are required to keep the information confidential.
          </p>
          <p>
            For customers opting to save their credit card for future
            transactions, the information is encrypted and securely stored via
            our payment processing partner, Stripe. Except for this, we do not
            retain sensitive financial details, such as credit card numbers or
            social security numbers, beyond 30 days post-transaction.
          </p>
        </section>

        {/* Retention of Personal Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Retention of Personal Information
          </h2>
          <p>
            We retain your Personal Information for as long as necessary to
            fulfill its purpose and comply with legal requirements. We do not
            store sensitive financial information for more than 30 days.
          </p>
          <p>
            We will also retain Usage Data for internal analysis purposes. Usage
            Data is generally retained for a shorter period, except when this
            data is used to strengthen the security or to improve the
            functionality of our services, or we are legally obligated to retain
            this data for longer time periods.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access and receive a copy of your Personal Data.</li>
            <li>Rectify inaccurate or incomplete data.</li>
            <li>Request deletion or stop processing your data.</li>
            <li>
              Transfer your data to another entity in a commonly used format.
            </li>
          </ul>
          <p>
            Additionally, if you have provided us with consent to process your
            Personal Data, you can deny or withdraw your consent at any time
            upon reasonable notice, subject to any legal or contractual
            requirements. However, if consent is denied or withdrawn, we may not
            be able to provide you with portions of the Service.
          </p>
          <p>
            To exercise these rights, contact us at:{" "}
            <a
              href="mailto:support@getmuni.co"
              className="text-blue-600 underline"
            >
              support@getmuni.co
            </a>
          </p>
          <p>
            Please note that you may be asked to verify your identity before
            responding to such requests.
          </p>
        </section>

        {/* GDPR and FIPPA Compliance */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            GDPR and FIPPA Compliance
          </h2>
          <p>
            As a digital agency, we are committed to protecting the personal
            data of our clients and website visitors. We are compliant with the
            General Data Protection Regulation (GDPR), which is a comprehensive
            data privacy regulation that governs the collection, use, and
            storage of personal data for individuals located in the European
            Union. Additionally, as a digital agency based in Ontario, we are
            subject to Ontario's Freedom of Information and Protection of
            Privacy Act (FIPPA). FIPPA sets out rules for the collection, use,
            and disclosure of personal information by public institutions in
            Ontario. We will comply with both GDPR and FIPPA in our handling of
            personal information.
          </p>
        </section>

        {/* Third-Party Use of Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Third-Party Use of Cookies
          </h2>
          <p>
            We may contract with third-party service providers to assist us in
            better understanding our site visitors. The information they collect
            may be associated with your personal information or they may collect
            information, including personal information, about your online
            activities over time and across different websites and other online
            services. They may use this information to provide you with
            interest-based (behavioral) advertising or other targeted content.
            These service providers are not permitted to use the information
            collected on our behalf except to help us conduct and improve our
            business.
          </p>
          <p>
            Third-party service providers may use cookies and similar tracking
            technologies to collect information about your online activities
            across different websites and online services. This information is
            used to provide you with personalized advertising and content that
            may be of interest to you.
          </p>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p>
            Our website may offer links to other websites. Please be aware that
            we are not responsible for the privacy practices of such other
            sites. We encourage our users to be aware when they leave our site
            and to read the privacy statements of each and every website that
            collects personally identifiable information.
          </p>
        </section>

        {/* Email Policies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Email Policies</h2>
          <p>
            All emails sent from our organization will clearly state who the
            email is from and provide clear information on how to contact the
            sender. Additionally, all email messages will contain concise
            information on how to remove yourself from our mailing list so that
            you receive no further email communication from us.
          </p>
        </section>

        {/* Online Privacy Policy Only */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Online Privacy Policy Only
          </h2>
          <p>
            This online privacy policy applies only to information collected
            through our website and not to information collected offline. Please
            be sure to read our offline privacy policy as well.
          </p>
        </section>

        {/* Your Consent */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
          <p>By using our website, you consent to our privacy policy.</p>
        </section>

        {/* Withdrawing Consent */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Withdrawing Consent</h2>
          <p>
            Anyone may withdraw their consent to MUNI’s further use, retention,
            or disclosure of their Personal Information at any time, subject to
            legal or contractual restrictions and reasonable notice. Consent may
            be withdrawn by contacting MUNI at{" "}
            <a
              href="mailto:support@getmuni.co"
              className="text-blue-600 underline"
            >
              support@getmuni.co
            </a>
            . We will inform the person who is withdrawing their consent of the
            implications of doing so.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time
            without notice. The Privacy Policy posted at any time or from time
            to time via this website shall be deemed to be the Privacy Policy
            then in effect.
          </p>
        </section>

        {/* Contacting Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacting Us</h2>
          <p>
            Any questions about this Privacy Policy or concerns about our
            compliance with this Privacy Policy should be directed as follows:
          </p>
          <p>
            <strong>General Enquiries:</strong>{" "}
            <a
              href="mailto:support@getmuni.co"
              className="text-blue-600 underline"
            >
              support@getmuni.co
            </a>
          </p>
        </section>

        {/* Terms of Use */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p>
            This website grants you a limited, personal, non-exclusive,
            non-transferable license to use our resources provided (in exchange
            for an email address) for your own personal or internal business
            use. You have no right to modify, edit, copy, reproduce, create
            derivative works of, alter, enhance or in any way exploit any of
            this content in any manner. It also may not be sold or redistributed
            without the express written consent of the Company. If you would
            like to share (or link to) our content, please be sure to give
            credit where credit is due. If you share our content, include our
            company name MUNI.
          </p>
        </section>

        {/* Information Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Security</h2>
          <p>
            We work hard to protect our users from unauthorized access to or
            unauthorized alteration, disclosure, or destruction of information
            we hold. However, no website is entirely secure. You should protect
            the account information in your possession as well.
          </p>
        </section>

        {/* Enforcement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
          <p>
            We regularly review our compliance with our Privacy Policy. When we
            receive formal written complaints, we will contact the person who
            made the complaint to follow up.
          </p>
          <p>
            <strong>
              OUR WEBSITE IS HOSTED IN ONTARIO, CANADA AND OPERATED UNDER THE
              FEDERAL RULES OF CANADA.
            </strong>
          </p>
        </section>
        {/* End of New Sections */}
      </main>

      <Footerbar height="h-fit" />
    </div>
  );
}


