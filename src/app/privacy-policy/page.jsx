import Navbar from "@/components/Navbar";
import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-primary">
            <Navbar />
            <main className="max-w-[1280px] leading-[24px] tracking-wide pt-26 mx-auto px-4 py-10 text-white rounded-lg shadow-lg">
                <p className="text-3xl font-bold mb-2 text-center">Privacy Policy</p>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Last updated: Aug 8, 2025
                </p>
                <section className="space-y-4">
                    <p>
                        This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                        <br />
                        We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>

                    <p className="text-xl font-semibold mt-8">Interpretation and Definitions</p>
                    <p className="font-semibold mt-4">Interpretation</p>
                    <p>
                        Words with capitalized initial letters have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                    </p>
                    <p className="font-semibold mt-4">Definitions</p>
                    <ul className="list-disc ml-8 space-y-2">
                        <li><strong>Account</strong>: a unique account created for you to access our Service or parts of our Service.</li>
                        <li><strong>Affiliate</strong>: an entity that controls, is controlled by or is under common control with a party.</li>
                        <li><strong>Company</strong>: (referred to as "the Company", "We", "Us" or "Our") refers to Tiny Wisdom Cards Pvt. Ltd., Tinkune, Subidhanagar 44600, Kathmandu, Nepal.</li>
                        <li><strong>Cookies</strong>: small files placed on your device by a website, containing details of your browsing history.</li>
                        <li><strong>Country</strong>: Nepal</li>
                        <li><strong>Device</strong>: any device that can access the Service.</li>
                        <li><strong>Personal Data</strong>: any information relating to an identified or identifiable individual.</li>
                        <li><strong>Service</strong>: the Website.</li>
                        <li><strong>Service Provider</strong>: any person or entity who processes data on behalf of the Company.</li>
                        <li><strong>Third-party Social Media Service</strong>: any social network site that a user can use to log in or create an account.</li>
                        <li><strong>Usage Data</strong>: data collected automatically when using the Service (e.g., your IP address, browser type, time spent on pages).</li>
                        <li><strong>Website</strong>: Tiny Wisdom Cards, accessible from tinywisdomcards.com</li>
                        <li><strong>You</strong>: the individual accessing or using the Service, or the company/legal entity on behalf of which that individual is accessing or using the Service.</li>
                    </ul>

                    {/* Collecting and Using Data */}
                    <p className="text-xl font-semibold mt-8">Collecting and Using Your Personal Data</p>
                    <p className="font-semibold mt-4">Types of Data Collected</p>
                    <p><strong>Personal Data</strong></p>
                    <p>
                        While using Our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Such information may include, but is not limited to:
                    </p>
                    <ul className="list-disc ml-8">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Usage Data</li>
                    </ul>
                    <p><strong>Usage Data</strong></p>
                    <p>
                        Usage Data is collected automatically when using the Service. This may include information such as your device's IP address, browser type, browser version, the pages you visit, the time and date of your visit, time spent on pages, unique device identifiers and other diagnostic data.<br />
                        If you access the Service via a mobile device, we may collect certain information automatically, such as your device type, unique ID, IP address, operating system, browser type, and more.
                    </p>

                    {/* Tracking Technologies */}
                    <p className="text-xl font-semibold mt-8">Tracking Technologies and Cookies</p>
                    <p>
                        We use Cookies and similar tracking technologies to track the activity on our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                    </p>
                    <ul className="list-disc ml-8">
                        <li><strong>Cookies or Browser Cookies:</strong> instructions can be set in your browser to refuse cookies or indicate when a cookie is being sent. If you do not accept Cookies, some parts of the Service may not function.</li>
                        <li><strong>Web Beacons:</strong> emails or certain sections of the Service may contain electronic files known as web beacons or pixel tags.</li>
                    </ul>
                    <p>Cookies can be "persistent" (remain when offline) or "session" (deleted after browser close).</p>

                    <p className="font-semibold mt-4">We use Cookies for:</p>
                    <ul className="list-disc ml-8">
                        <li><strong>Necessary / Essential Cookies</strong>: to provide essential Service features, authenticate users.</li>
                        <li><strong>Cookies Policy / Notice Acceptance Cookies</strong>: to identify if users have accepted the cookies policy.</li>
                        <li><strong>Functionality Cookies</strong>: to remember your choices and preferences for a personalized experience.</li>
                    </ul>
                    <p>For more information, see our Cookies Policy.</p>

                    {/* Use of Data */}
                    <p className="text-xl font-semibold mt-8">Use of Your Personal Data</p>
                    <p>
                        The Company may use Personal Data to:
                    </p>
                    <ul className="list-disc ml-8">
                        <li>Provide and maintain our Service</li>
                        <li>Manage your Account</li>
                        <li>Perform contracts for products/services</li>
                        <li>Contact you for operational reasons or updates</li>
                        <li>Provide you with news, offers, and information about similar services unless you opt out</li>
                        <li>Manage your requests</li>
                        <li>Business transfers (merger, acquisition, sale)</li>
                        <li>Analysis and improvement of Service</li>
                    </ul>
                    <p>
                        We may share your information in the following situations: with service providers, affiliates, business partners, in case of business transfers, with other users (when you share publicly or via third-party social logins), and with your consent.
                    </p>

                    {/* Retention */}
                    <p className="text-xl font-semibold mt-8">Retention of Your Personal Data</p>
                    <p>
                        We retain Your Personal Data only as long as necessary for the purposes set out in this Privacy Policy, to comply with legal obligations, resolve disputes, and enforce policies.
                    </p>

                    {/* Transfer */}
                    <p className="text-xl font-semibold mt-8">Transfer of Your Personal Data</p>
                    <p>
                        Your information may be transferred to—and maintained on—computers located outside of your country. By providing your data, you consent to such transfers, as long as there are adequate controls in place.
                    </p>

                    {/* Deletion */}
                    <p className="text-xl font-semibold mt-8">Delete Your Personal Data</p>
                    <p>
                        You can request deletion of your personal data. You may also update or delete your information from within your account, or by contacting us. We may retain certain information as required by law.
                    </p>

                    {/* Disclosure */}
                    <p className="text-xl font-semibold mt-8">Disclosure of Your Personal Data</p>
                    <ul className="list-disc ml-8">
                        <li><strong>Business Transactions:</strong> in case of merger, acquisition, or asset sale, info may be transferred.</li>
                        <li><strong>Law enforcement:</strong> info may be disclosed as required by law.</li>
                        <li><strong>Other legal requirements:</strong> to comply with obligations, defend rights, investigate wrongdoings, protect users.</li>
                    </ul>

                    {/* Security */}
                    <p className="text-xl font-semibold mt-8">Security of Your Personal Data</p>
                    <p>
                        We strive to use acceptable means to protect your Personal Data, but cannot guarantee absolute security.
                    </p>

                    {/* Children's Privacy */}
                    <p className="text-xl font-semibold mt-8">Children's Privacy</p>
                    <p>
                        Our Service is not directed to anyone under 13. We do not knowingly collect data from children under 13. If you are a parent/guardian and are aware your child has provided data, please contact us.
                    </p>

                    {/* Links */}
                    <p className="text-xl font-semibold mt-8">Links to Other Websites</p>
                    <p>
                        Our Service may contain links to external sites. We have no control over, and assume no responsibility for, their content, policies, or practices.
                    </p>

                    {/* Changes */}
                    <p className="text-xl font-semibold mt-8">Changes to this Privacy Policy</p>
                    <p>
                        We may update our Privacy Policy at any time. We will post updates to this page, and notify you of changes by email or prominent updates on our Service.
                    </p>

                    {/* Contact */}
                    <p className="text-xl font-semibold mt-8">Contact Us</p>
                    <p>
                        If you have any questions about this Privacy Policy, you can contact us:
                    </p>
                    <ul className="list-none ml-4">
                        <li><strong>Email:</strong> <a href="mailto:tinywisdomcards@gmail.com" className="text-blue-700 underline">tinywisdomcards@gmail.com</a></li>
                        <li><strong>Phone:</strong> <a href="tel:+9779705812368" className="text-blue-700 underline">977-970-5812368</a></li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
