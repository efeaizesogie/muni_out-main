"use client";

import Footerbar from "@/src/components/shared/Footerbar";
import Navbar from "@/src/components/shared/Navbar";

export default function TermsOfUse() {
  return (
    <div className="text-black bg-white min-h-screen">
      <Navbar showLinks={false} />

      {/* Header Section */}
      <div className="bg-[#EBEFE4] h-[308px] lg:h-[324px] flex justify-center">
        <h1 className="w-[80%] pt-[148px] lg:pt-[166px] text-center lg:text-left text-[34px] leading-[44px] md:text-[54px] md:leading-[64px] font-semibold text-[#1B312A]">
          Terms of Use
        </h1>
      </div>

      {/* Main Content */}
      <main className="lg:max-w-[80%] lg:mx-auto lg:pt-[79px] px-6 py-12 space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">MUNI Security Policy Terms of Use</h2>
          <p className="mb-4">
            <strong>IMPORTANT NOTICE:</strong> BY VISITING THE MUNI WEBSITE AND UTILIZING THE APPLICATION AND
            SOFTWARE, YOU AGREE TO BE BOUND BY THE FOLLOWING TERMS:
          </p>
        </section>

        {/* A. MUNI Terms of Use & Security Agreement */}
        <section>
          <h2 className="text-xl font-semibold mb-2">A. MUNI Terms of Use & Security Agreement</h2>
          <p className="mb-4">
            By accessing or otherwise using this site and its application, you agree to be bound contractually by
            these Terms of Use.
          </p>

          {/* 1. PARTIES */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">1. PARTIES</h3>
            <p>
              The parties to these Terms of Use and Security Policy are you, and the owner of the{" "}
              <a href="https://getmuni.co" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                https://getmuni.co
              </a>{" "}
              website business, MUNI applications, using the trade name MUNI. All references to “we”, “us”, “our”,
              this “website” or “this site” shall be construed to mean this website and application business.
            </p>
          </section>

          {/* 2. USE AND RESTRICTIONS */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">2. USE AND RESTRICTIONS</h3>
            <p className="mb-2">
              Subject to these Terms of Use and our Privacy Policy, you may use the public areas of this site, but only
              for your own internal purposes.
            </p>
            <ul className="list-disc ml-6">
              <li>
                You agree not to access (or attempt to access) this site by any means other than through the interface
                we provide unless you have been specifically allowed to do so in a separate agreement.
              </li>
              <li>
                You agree not to access (or attempt to access) this site through any automated means (including use of
                scripts or web crawlers), and you agree to comply with the instructions set out in any robots.txt file
                present on this site.
              </li>
              <li>
                You are not authorized to:
                <ul className="list-disc ml-6 mt-2">
                  <li>Resell, sublicense, transfer, assign, or distribute the site, its services or content;</li>
                  <li>Modify or make derivative works based on the site, its services or content;</li>
                  <li>
                    “Frame” or “mirror” the site, its services or content on any other server or Internet-enabled
                    device.
                  </li>
                </ul>
              </li>
              <li>
                All rights not expressly granted in this Agreement are reserved by us and our licensors.
              </li>
            </ul>
          </section>

          {/* 3. MODIFICATION */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">3. MODIFICATION</h3>
            <p>
              We reserve the right to modify these Terms of Use at any time, and without prior notice, by posting an
              amended Terms of Use that is always accessible through the Terms of Use link on this site’s home page.
              You should scroll to the bottom of this page periodically to review material modifications and their
              effective dates. YOUR CONTINUED USE OF THIS SITE FOLLOWING OUR POSTING OF A MODIFICATION NOTICE OR NEW TERMS
              OF USE ON THIS SITE WILL CONSTITUTE BINDING ACCEPTANCE OF THE MODIFICATION OR NEW TERMS OF USE.
            </p>
          </section>

          {/* 4. ACCESS CONTROL POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">4. ACCESS CONTROL POLICY</h3>
            <p>
              The purpose of this policy is to ensure that access to sensitive data is granted only to authorized
              personnel. Access will be granted based on the principle of least privilege, which means that employees
              will only be granted access to the data they need to perform their job duties.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>All employees will be required to use strong passwords and keep them confidential.</li>
              <li>
                Any access requests will be logged and reviewed periodically.
              </li>
            </ul>
          </section>

          {/* 5. SOFTWARE/HARDWARE ACQUISITION POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">5. SOFTWARE/HARDWARE ACQUISITION POLICY</h3>
            <p>
              The purpose of this policy is to ensure that all software and hardware acquisitions are properly vetted
              and approved.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Any software or hardware purchases must be approved by the designated employee before they are made.
              </li>
              <li>
                All software and hardware must be acquired from reputable vendors and must be licensed properly.
              </li>
              <li>
                Any employee-owned devices that are used for work purposes must be approved by the designated employee and
                must be compliant with the security policies of the agency.
              </li>
            </ul>
          </section>

          {/* 6. PASSWORD MANAGEMENT POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">6. PASSWORD MANAGEMENT POLICY</h3>
            <p>
              The purpose of this policy is to ensure that passwords are strong and kept confidential.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All employees will be required to create strong passwords that are at least eight characters long and
                contain a combination of uppercase and lowercase letters, numbers, and special characters.
              </li>
              <li>
                Passwords will be changed every 90 days, and employees will not be allowed to reuse the same password
                within a year.
              </li>
              <li>
                Passwords will be kept confidential and should not be shared with anyone.
              </li>
              <li>
                In case of a suspected password compromise, employees will be required to report it immediately.
              </li>
            </ul>
          </section>

          {/* 7. SEPARATION/SEGREGATION OF DUTIES POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">7. SEPARATION/SEGREGATION OF DUTIES POLICY</h3>
            <p>
              The purpose of this policy is to ensure that no single employee has complete control over any sensitive
              data or systems.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All job duties will be separated and segregated in such a way that no single employee has complete
                control over any sensitive data or systems.
              </li>
              <li>
                Any changes to job duties will be reviewed and approved by the designated employee.
              </li>
            </ul>
          </section>

          {/* 8. CHANGE MANAGEMENT POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">8. CHANGE MANAGEMENT POLICY</h3>
            <p>
              The purpose of this policy is to ensure that all changes made to the agency's systems and applications
              are properly documented and tested.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Any changes to the systems or applications must be approved by the designated employee before they
                are made.
              </li>
              <li>
                All changes must be documented and tested to ensure that they do not introduce any security vulnerabilities.
              </li>
              <li>
                Any changes that are found to be potentially harmful or are unsuccessful must be rolled back immediately.
              </li>
            </ul>
          </section>

          {/* 9. MONITORING */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">9. MONITORING</h3>
            <p>
              We reserve the right, but not the obligation, to monitor your access and use of this site without
              notification to you.
            </p>
            <p>
              We may record or log your use in a manner as set out in our Privacy Policy that is accessible through
              the Privacy Policy link on this site’s home page.
            </p>
          </section>

          {/* 10. ACCESS TO SITE SERVICES */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">10. ACCESS TO SITE SERVICES</h3>
            <p>
              Only one individual may access the Service at a time using the username, password, or account profile
              provided by MUNI, unless we agree otherwise.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                You agree not to use the Services for any unlawful purpose.
              </li>
              <li>
                We reserve the right to terminate or restrict your access to the Service if, in our opinion, your use
                of the Service may violate specific shipping carrier regulations, terms and/or agreements, any laws,
                regulations, or rulings, infringe upon another person's rights or violate the terms of the MUNI Terms and
                Conditions.
              </li>
              <li>
                We may refuse to grant you a username that impersonates someone else, is protected by trademark or other
                proprietary right law, or is vulgar or otherwise offensive.
              </li>
              <li>
                If there is evidence of fraud in relation to your account usage, MUNI reserves the right to void the label
                and/or have the package returned to sender. In such cases, MUNI has the right to send information
                concerning the fraud to concerned parties including but not limited to local authorities.
              </li>
            </ul>
          </section>

          {/* 11. REMOTE ACCESS POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">11. REMOTE ACCESS POLICY</h3>
            <p>
              The purpose of this policy is to ensure that remote access to the agency's systems is secure and
              protected.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All remote access will be granted only to authorized personnel and will be monitored and reviewed
                periodically.
              </li>
              <li>
                Remote access will be granted using a secure connection, such as a VPN, and employees will be
                required to use strong passwords and keep them confidential.
              </li>
            </ul>
          </section>

          {/* 12. DATA HANDLING POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">12. DATA HANDLING POLICY</h3>
            <p>
              The purpose of this policy is to ensure that all sensitive data is handled and stored in a secure manner.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All data will be classified based on its level of sensitivity, and appropriate security measures will
                be implemented based on the data classification.
              </li>
              <li>
                All data transmissions will be encrypted using industry-standard encryption protocols, such as SSL or
                TLS.
              </li>
              <li>
                All sensitive data will be stored in an encrypted format, and the encryption keys will be stored
                separately from the data.
              </li>
              <li>
                Access to sensitive data will be granted only to authorized personnel based on the principle of least
                privilege.
              </li>
              <li>
                Any data that is no longer needed will be securely deleted or destroyed.
              </li>
              <li>
                All data-handling activities will be logged and reviewed periodically to ensure compliance with the
                agency's data-handling policy.
              </li>
              <li>
                We store our client data domestically; therefore, our Canadian clients will have their data stored on
                servers in Canada and our U.S-based clients will have their data stored on servers within the U.S.
              </li>
            </ul>
          </section>

          {/* 13. ENCRYPTION POLICY STANDARDS */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">13. ENCRYPTION POLICY STANDARDS</h3>
            <p>
              The purpose of this policy is to ensure that all sensitive data is protected with encryption when it is in
              transit or at rest.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All data transmissions will be encrypted using industry-standard encryption protocols.
              </li>
              <li>
                All sensitive data will be stored in an encrypted format, and the encryption keys will be stored
                separately from the data.
              </li>
            </ul>
          </section>

          {/* 14. SECURITY INCIDENT RESPONSE/REPORTING/HANDLING POLICY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">14. SECURITY INCIDENT RESPONSE/REPORTING/HANDLING POLICY</h3>
            <p>
              The purpose of this policy is to ensure that any security incidents are properly identified, reported, and
              handled in a timely and effective manner.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                All employees will be required to report any security incidents or suspected security incidents
                immediately to the designated employee.
              </li>
              <li>
                The designated employee will investigate the incident and determine the appropriate response, which may
                include notifying affected parties and implementing remedial measures.
              </li>
              <li>
                All security incidents will be logged, and a report will be generated for each incident, documenting the
                date of the incident, the nature of the incident, and the response taken.
              </li>
            </ul>
          </section>

          {/* 15. INTERRUPTION OF SERVICE */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">15. INTERRUPTION OF SERVICE</h3>
            <p>
              MUNI shall not be held liable for any interruption of the MUNI services caused by actions beyond MUNI's
              control.
            </p>
          </section>

          {/* 16. DISASTER RECOVERY AND BUSINESS CONTINUITY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">16. DISASTER RECOVERY AND BUSINESS CONTINUITY</h3>
            <p>
              MUNI understands the importance of having a comprehensive disaster recovery and business continuity plan in
              place to ensure the continued operation of our business and the protection of our clients' and their
              customers' data in the event of a disaster or disruption. To that end, we have implemented the following
              measures:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Backup and Recovery:</strong> We regularly back up all critical data and systems to ensure that
                data can be restored in the event of a disaster or disruption.
              </li>
              <li>
                <strong>Alternative Site:</strong> We have identified an alternative site where we can relocate our
                operations in the event that our primary site becomes unavailable.
              </li>
              <li>
                <strong>Redundant Systems:</strong> We have implemented redundant systems to ensure that critical
                operations can continue in the event of a system failure or disruption.
              </li>
              <li>
                <strong>Testing:</strong> We regularly test our disaster recovery and business continuity plan to
                ensure that it is effective and up-to-date.
              </li>
            </ul>
            <p>
              By implementing these measures, we are committed to ensuring the continued operation of our business and
              the protection of our clients' and their customers' data in the event of a disaster or disruption.
            </p>
          </section>

          {/* 17. OWNERSHIP AND INTELLECTUAL PROPERTY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">17. OWNERSHIP AND INTELLECTUAL PROPERTY</h3>
            <p>
              The material provided on this site is protected by law, including, but not limited to, Canada and United
              States copyright law and international treaties. The copyrights and other intellectual property in the
              content of this site are owned by us and/or others. Except for the limited rights granted herein, all
              other rights are reserved.
            </p>
          </section>

          {/* 18. LIABILITY DISCLAIMER */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">18. LIABILITY DISCLAIMER</h3>
            <p>
              The information provided on this website is provided for business and commercial transactions purposes
              only. THESE DISCLAIMERS CONSTITUTE AN ESSENTIAL PART OF THIS AGREEMENT. NO PURCHASE OR USE OF THE ITEMS
              OFFERED BY THIS SITE IS AUTHORIZED HEREUNDER EXCEPT UNDER THESE DISCLAIMERS. IF IMPLIED WARRANTIES MAY NOT
              BE DISCLAIMED UNDER APPLICABLE LAW, THEN ANY IMPLIED WARRANTIES ARE LIMITED IN DURATION TO THE PERIOD
              REQUIRED BY APPLICABLE LAW.
            </p>
            <p>
              SOME PROVINCES AND/OR STATES OR JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY
              MAY LAST, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </section>

          {/* 19. LIMITATION OF LIABILITY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">19. LIMITATION OF LIABILITY</h3>
            <p>
              IN NO EVENT SHALL THIS SITE AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY DIRECT, INDIRECT, PUNITIVE,
              SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF
              DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH
              THIS SITE, ITS PRODUCTS, SERVICES, AND/OR CONTENT, ANY INTERRUPTION, INACCURACY, ERROR OR OMISSION,
              REGARDLESS OF CAUSE, EVEN IF THIS SITE OR OUR LICENSORS HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES.
            </p>
          </section>

          {/* 20. RATE INFORMATION */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">20. RATE INFORMATION</h3>
            <p>
              Rate information for the Services published on this website is subject to change without notice. MUNI has
              no control over such rate information, and you agree to bear all risks resulting from your reliance on
              any such information.
            </p>
            <p>
              MUNI may make improvements and/or changes to this website and/or information contained therein at any
              time without notice. Any references to non-MUNI products or services on this website are for informational
              purposes only and do not constitute a recommendation or endorsement of such products or services by MUNI
              or any other third party.
            </p>
            <p>
              Rates on the website for shipping services we do not ship with could either be retail or list rates for each
              shipping service.
            </p>
          </section>

          {/* 21. LINKS TO THIRD PARTY WEBSITES */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">21. LINKS TO THIRD PARTY WEBSITES</h3>
            <p>
              We do not review or control third-party websites that link to or from this site, and we are not responsible
              for their content, and do not represent that their content is accurate or appropriate.
            </p>
            <p>
              Your use of any third-party site is on your own initiative and at your own risk and may be subject to the
              other sites’ terms of use and privacy policy.
            </p>
          </section>

          {/* 22. ENFORCEMENT OF TERMS OR CONDITIONS */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">22. ENFORCEMENT OF TERMS OR CONDITIONS</h3>
            <p>
              Any failure by us to enforce or apply a term or condition of this Agreement does not constitute a waiver of
              that term or condition and does not otherwise prevent MUNI from relying on such term or condition.
            </p>
          </section>

          {/* 23. CONTROLLING LAW AND SEVERABILITY */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">23. CONTROLLING LAW AND SEVERABILITY</h3>
            <p>
              The Certificate and applicable License will be governed by and construed in accordance with the laws of
              Canada, and the province of Ontario excluding its conflict of law principles. This License shall not be
              governed by the United Nations Convention on Contracts for the International Sale of Goods, the application
              of which is expressly excluded.
            </p>
            <p>
              If you are a consumer based in the United Kingdom, this License will be governed by the laws of the
              jurisdiction of your residence.
            </p>
            <p>
              If for any reason a court of competent jurisdiction finds any provision, or portion thereof, to be
              unenforceable, the remainder of this License shall continue in full force and effect.
            </p>
          </section>

          {/* 24. ONWARD TRANSFER OF PERSONAL INFORMATION OUTSIDE YOUR COUNTRY OF RESIDENCE */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">24. ONWARD TRANSFER OF PERSONAL INFORMATION OUTSIDE YOUR COUNTRY OF RESIDENCE</h3>
            <p>
              Any personal information which we may collect on this site may be stored and processed in our servers
              located in Canada or in any other country in which we, or our affiliates, subsidiaries, or agents maintain
              facilities. Our policy is to host our servers in our clients' residing countries. You consent to any such
              transfer of personal information outside your country of residence to any such location.
            </p>
          </section>

          {/* 25. FORCE MAJEURE */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">25. FORCE MAJEURE</h3>
            <p>
              We shall not be liable for damages for any delay or failure of delivery arising out of causes beyond our
              reasonable control and without our fault or negligence, including, but not limited to, Acts of God, acts of
              civil or military authority, fires, riots, wars, embargoes, Internet disruptions, hacker attacks, or
              communications failures.
            </p>
          </section>

          {/* 26. COMPLETE AGREEMENT; GOVERNING LANGUAGE */}
          <section className="ml-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">26. COMPLETE AGREEMENT; GOVERNING LANGUAGE</h3>
            <p>
              The access to create a corporate profile on the Application is a limited non-universal use of License and
              constitutes the entire agreement between you and MUNI relating to the Software Application and supersedes
              all prior or contemporaneous understandings regarding such subject matter.
            </p>
            <p>
              No amendment to or modification of this Agreement will be binding unless in writing and signed by MUNI.
              Any translation of this Agreement is done for local requirements and in the event of a dispute between the
              English and any non-English versions, the English version of this License shall govern, to the extent not
              prohibited by local law in your jurisdiction, including the Province of Quebec.
            </p>
            <p className="font-semibold">
              OUR WEBSITE IS HOSTED IN ONTARIO, CANADA AND OPERATED UNDER THE FEDERAL RULES OF CANADA.
            </p>
          </section>
        </section>
      </main>

      <Footerbar height="h-fit" />
    </div>
  );
}


