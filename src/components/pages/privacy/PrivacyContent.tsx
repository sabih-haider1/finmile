'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PrivacyContent = () => {
    return (
        <section className="relative w-full py-24 px-6 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-[1000px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-10"
                >
                    {/* Introduction Section */}
                    <div className="space-y-2">
                        <div>
                            <p className="text-[#6A27D4] font-semibold text-[14px] mb-4 uppercase tracking-widest">Last Updated: March 25, 2026</p>
                            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                                Introduction
                            </h2>
                        </div>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Finmile (&quot;we&quot; or &quot;us&quot;) holds personal data on its clients. This Client Data Privacy Notice details
                                the personal data Finmile may retain, process and share with third parties relating to your business
                                and any data associated with your deliveries. Finmile is committed to ensuring that your information
                                is secure, accurate and relevant. To prevent unauthorised access or disclosure, we have implemented
                                suitable physical, electronic, and managerial procedures to safeguard and secure personal data we hold.
                            </p>

                            <p>
                                We respect the privacy rights of individuals and are committed to handling personal information
                                responsibly and in accordance with applicable law. This Notice sets out the personal information
                                that we collect and process as a data processor, the purposes of the processing and the rights
                                connected with it. Finmile is also considered a Data Controller for some personal data, including
                                data we store in relation to the creation and access of user accounts, administration, the methods
                                of processing and service access.
                            </p>

                            <p>
                                We&apos;re confident that you&apos;ll find the information that you need in this policy but please don&apos;t
                                hesitate to get in touch if you have any questions or concerns.
                            </p>
                        </div>

                        {/* Company Details Card */}
                        <div className="pt-10 mt-10 border-t border-gray-100">
                            <h3 className="text-[#6A27D4] font-semibold text-[14px] uppercase tracking-[0.25em] mb-4">
                                Company Details
                            </h3>
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 space-y-2 inline-block">
                                <p className="font-semibold text-[#2D1B69] text-[18px] md:text-[20px]">Finmile AI LTD (the &quot;Company&quot;)</p>
                                <div className="text-[#4A5568] text-[14px] md:text-[15px]">
                                    <p className="font-medium text-[#2D1B69]">Registered Office</p>
                                    <p>New Derwent House, 69-73 Theobalds Road, London, WC1X 8TA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Types of personal information we collect Section */}
                    <div className="space-y-2">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Types of personal information we collect
                        </h2>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] font-normal leading-[1.7]">
                            <p>Finmile may collect personal information about you when:</p>
                            <ul className="space-y-4 pt-2">
                                {[
                                    "You use our services through our network of collection and delivery partners",
                                    "You use our website",
                                    "You contact us",
                                    "You are a recipient of our services"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                        <span className="text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="pt-4">
                                We will never collect any unnecessary personal data from you and do not process your information in any way, other than as specified in this notice.
                            </p>

                            <div className="space-y-4 pt-8">
                                <p className="font-bold text-[#2D1B69] text-[18px] md:text-[20px]">We may collect the following types of information:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Your Name",
                                        "Address",
                                        "Email Address",
                                        "You are a recipient of our services",
                                        "Landline Telephone Number",
                                        "Mobile Telephone Number",
                                        "Proof of delivery in the form of a signature or photo of left safe location",
                                        "Company IT information required to provide access to Finmile systems and networks such as IP addresses, log files and login information",
                                        "Information about current, past and prospective employees; customers (including any 3rd party information provided by them), suppliers and supporters. delivery in the form of a signature or photo of left safe location"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Purposes for processing personal information Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Purposes for processing personal information
                        </h2>

                        <div className="space-y-8 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it.
                            </p>
                            <p>
                                However, we will normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you (i.e. provision of services), or where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms. In some cases, we may also have a legal obligation to collect personal information from you or may otherwise need the personal information to protect your vital interests or those of another person.
                            </p>
                            <p>
                                Finmile have policies and controls in place to try to ensure that your data is not lost, accidentally destroyed, misused or disclosed, and is not accessed without authorisation and only accessed or used for specific legal purposes.
                            </p>
                        </div>
                    </div>

                    {/* Service-related purposes Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Service-related purposes
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Finmile collect and use this personal information for supporting and managing our delivery service for our clients&apos; customers &ndash; for example address, telephone and delivery instruction.
                            </p>
                            <p>
                                To collect and deliver goods that you have requested from third parties.
                            </p>
                            <p>
                                We primarily process this personal information through our proprietary online delivery portal (we call &apos;Flare&apos;), which is a tool that helps us to manage all of our deliveries. This portal has been built specifically for us by our ISO accredited partners.
                            </p>
                        </div>
                    </div>

                    {/* Contractual purposes Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Contractual purposes
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                We use this personal information when it is necessary for the provision of our services, in line with the purposes agreed upon between our client and Finmile.
                            </p>
                        </div>
                    </div>

                    {/* For advertising and marketing purposes Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            For advertising and marketing purposes
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                With your permission and/or where permitted by law, we may use your data for marketing purposes which may include contacting you with information, news and offers on our products and/or services. We will not, however, send you any unsolicited marketing or spam and will take all reasonable steps to ensure that we fully protect your rights and comply with our obligations under the GDPR and the Privacy and Electronic Communications (EC Directive) Regulations 2003.
                            </p>
                        </div>
                    </div>

                    {/* Legal purposes Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Legal purposes
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                In some cases, we will need to use your personal data to fulfil a legal obligation (for example, if we receive a legitimate request from law enforcement agencies), and in other cases (such as the detection of fraud or ensuring the security of the site) we will rely on our legitimate interests as a business to use your data in this way.
                            </p>
                        </div>
                    </div>

                    {/* Legitimate interest Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Legitimate interest
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                We may also collect and use personal information when it is necessary for other legitimate purposes, such as to help us conduct our business more effectively and efficiently &ndash; for example, for general IT security management when auditing access of our platforms. We may also process your personal information to investigate violations of law or breaches of our own internal policies.
                            </p>
                        </div>
                    </div>

                    {/* How do we collect personal information Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            How do we collect personal information
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] font-normal leading-[1.7]">
                            <p>Finmile collects personal information:</p>
                            <ul className="space-y-4 pt-2">
                                {[
                                    "From our delivery and collection partners. e.g. when you order goods from a third party, that party may pass your information on to Finmile in order to ship your consignment and for further processing.",
                                    "From consignments that pass through our sortation systems &ndash; we may collect information from the outside of parcels e.g. name and address information so that we can route them through our networks for delivery to the addressee.",
                                    "Directly from recipients. e.g. If you submit an enquiry through our website, or contact us directly via email or telephone.",
                                    "When our services are provided together with one of our licensees, the information is collected by them in order for us to provide you with the product or service.",
                                    "Directly from job applicants e.g. if you submit a job application to us directly or through our recruitment partners.",
                                    "If you connect your social media accounts via our website or any of our apps, certain personal data from your social media account will be shared with us which may include personal data that is part of your profile or your friends&apos; profiles;"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                        <span className="text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Via Cookies Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Via Cookies:
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Our site uses cookies to recognise you when you visit and use the site. This helps us to provide you with a good experience when you browse our site and also allows us to improve our site. If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to decline the use of cookies. To learn more about this procedure and cookies more generally please visit the page provided by the Information Commissioner&apos;s Office (ICO).
                            </p>
                            <p>
                                Third parties whose content appears on our Site may use third party Cookies, as detailed below. Please note that we do not control the activities of such third parties, nor the data they collect and use and advise you to check the privacy policies of any such third parties.
                            </p>
                        </div>
                    </div>

                    {/* Browser/Device/Server Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Through your browser or device or through our servers:
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Certain information is collected by most browsers or automatically through your device, and we also collect your IP address (this enables us to recognise your computer or device when you use the site) via our server log files.
                            </p>
                        </div>
                    </div>

                    {/* Sharing Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Who we share personal information with
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                We take care to allow access to personal information only to those who require such access to perform their tasks and duties in relation to the provision of our services, and to third parties who have a legitimate purpose for accessing it to support these purposes. Whenever we permit a third party to access personal information, we will implement appropriate measures to ensure the information is used in a manner consistent with this notice and that the security and confidentiality of the information is maintained.
                            </p>
                        </div>
                    </div>

                    {/* Third-party providers Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Transfers to third-party service providers
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                In addition, we make certain personal information available to third parties who provide services to us. We do so on a &ldquo;need to know&rdquo; basis with appropriate security measures in place &ndash; this is done in accordance with applicable data privacy law. A list of key service providers can be found in Annex A.
                            </p>
                        </div>
                    </div>

                    {/* Other third parties Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Transfers to other third parties
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] font-normal leading-[1.7]">
                            <p>We may also disclose personal information to third parties on other lawful grounds, including:</p>
                            <ul className="space-y-4 pt-2">
                                {[
                                    "To comply with our legal obligations, including where necessary to abide by law, regulation or contract, or to respond to a court order, administrative or judicial process, including, but not limited to, a subpoena, government audit or search warrant",
                                    "In response to lawful requests by public authorities (including for national security or law enforcement purposes)",
                                    "As necessary to establish, exercise or defend against potential, threatened or actual litigation",
                                    "Where necessary to protect the vital interests of our employees or another person",
                                    "In connection with the sale, assignment or other transfer of all or part of our business; or",
                                    "With your expressed consent"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                        <span className="text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* International transfer Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            International transfer of your data
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Some of the processes involved in our use of your personal data may require our data to be stored or processed in countries outside of Europe. For example, your data may be held in countries outside of Europe as a result of third party data hosting agreements. Whenever we send (or permit a third party to send) your personal data outside of Europe, we will make sure that we take steps necessary to protect your data as required by applicable laws. For example, we may implement specific contract terms or we may rely on service providers who adhere to certain compliance programmes overseas, or we may select service providers based in countries with strong local laws to protect your personal data.
                            </p>
                        </div>
                    </div>

                    {/* Data retention Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Data retention periods
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Personal information will be stored in accordance with applicable laws and kept for as long as needed to carry out the purposes described in this Notice or as otherwise. Our data retention policy details this.
                            </p>
                            <p>
                                The Finmile online portal automatically deletes the following personal data from the delivery record after 3 months:
                            </p>
                            <ul className="space-y-3 pt-1">
                                {[
                                    "Name and sender recipient",
                                    "Email",
                                    "Telephone Number",
                                    "Delivery Instruction"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                        <span className="text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-2">
                                Proof of Delivery (POD) data is kept for 96 months before being deleted.
                            </p>
                        </div>
                    </div>

                    {/* Data privacy rights Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Data privacy rights
                        </h2>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>The following rights are available under applicable data protection law:</p>
                            <ul className="space-y-4 pt-1">
                                {[
                                    "Access, correct, update or request deletion of personal information",
                                    "Object to processing of personal information, ask us to restrict processing of personal information or request portability of personal information.",
                                    "If we have collected and processed personal information using a person&apos;s consent, then this can be withdrawn at any time. Withdrawing consent will not affect the lawfulness of any processing we conducted prior to withdrawal, nor will it affect processing of personal information conducted in reliance on lawful processing grounds other than consent.",
                                    "You have the right to complain to a data protection authority about our collection and use of personal information. For more information, please contact your local data protection authority."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                        <span className="text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-4">
                                We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. You can read more about these rights at: <a href="https://ico.org.uk/for-the-public/is-my-information-being-handled-correctly/" target="_blank" rel="noopener noreferrer" className="text-[#6A27D4] hover:underline">https://ico.org.uk/for-the-public/is-my-information-being-handled-correctly/</a>
                            </p>
                        </div>
                    </div>

                    {/* Updates Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Updates to this Notice
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                This Notice may be updated periodically to reflect any necessary changes in our privacy practices.
                            </p>
                        </div>
                    </div>

                    {/* Contact details Section */}
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            Contact details
                        </h2>

                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                Please address any questions or requests relating to this Notice to Fin&apos;s Data Protection Officer at <a href="mailto:hello@Finmile.com" className="text-[#6A27D4] hover:underline">hello@Finmile.com</a> or by mail: New Derwent House, 69-73 Theobalds Road, London, WC1X 8TA
                            </p>
                        </div>
                    </div>

                    {/* ANNEX A Section */}
                    <div className="pt-16 border-t border-gray-100">
                        <h2 className="text-[36px] md:text-[44px] font-semibold text-[#2D1B69] tracking-tight leading-tight mb-8">
                            ANNEX A &ndash; THIRD-PARTY PROCESSORS
                        </h2>
                        <div className="space-y-4 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                This Notice may be updated periodically to reflect any necessary changes in our privacy practices.
                            </p>
                        </div>

                        <div className="mt-12 space-y-12">
                            {/* Key third-party processors */}
                            <div className="space-y-4">
                                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#2D1B69]">Key third-party processors</h3>
                                <p className="text-[#4A5568] text-[15px] md:text-[17px]">The following are Fin&apos;s key third-party processors in relation to client data.</p>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-6">
                                    <h4 className="font-semibold text-[#2D1B69] text-[18px] mb-2">Google</h4>
                                    <p className="text-[#4A5568] text-[15px] md:text-[16px] leading-[1.7]">
                                        Finmile uses Google tools for business for eg email and cloud-based storage. Please see Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6A27D4] hover:underline">Privacy Notice</a> for more information.
                                    </p>
                                </div>
                            </div>

                            {/* Additional third-party processors */}
                            <div className="space-y-6">
                                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#2D1B69]">Additional third-party processors</h3>
                                <p className="text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8]">
                                    Data may be shared with several third-party processors to meet legal requirements, where Finmile outsources aspects of its processes or when providing specific services relating to maintaining our services. These organisations may include, but are not limited to, the following:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Xero (Accounting & Payroll)",
                                        "HMRC",
                                        "AWS",
                                        "MapTier",
                                        "Next Billion",
                                        "Twilio"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 translate-y-1" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] pt-4 italic">
                                    Where the above third-party processors transfer data overseas outside of the European Economic Area (EEA), appropriate safeguards are in place to protect the data transferred
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for future sections */}
                    <div className="pb-10"></div>
                </motion.div>
            </div>
        </section>
    );
};
