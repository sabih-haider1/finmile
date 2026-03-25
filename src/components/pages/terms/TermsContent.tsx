'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const TermsContent = () => {
    return (
        <section className="relative w-full py-12 px-6 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-[1000px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-5"
                >
                    {/* Introduction Section */}
                    <div className="space-y-2">
                        <div>
                            <p className="text-[#6A27D4] font-semibold text-[14px] mb-4 uppercase tracking-widest">Last Updated: October 2025</p>
                            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#2D1B69] tracking-tight leading-tight uppercase">
                                Company Details
                            </h2>
                        </div>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p className="font-medium text-[#2D1B69]">
                                Finmile AI LTD (the &quot;Company&quot;)
                            </p>
                            <div className="pt-4">
                                <p className="font-semibold text-[#2D1B69] text-[16px] mb-1">Registered Office</p>
                                <p>New Derwent House, 69-73 Theobalds Road, London, England, WC1X 8TA</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#2D1B69] tracking-tight leading-tight uppercase">
                            Overview
                        </h2>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                This document sets out Company&apos;s Terms and Conditions which apply to the Services. These Terms and Conditions, together with each Statement of Work entered into between Company and Customer form a legally binding agreement (the &quot;Agreement&quot;). The Statement of Work prevails over these Terms and Conditions where inconsistent (for example regarding delivery times and process).
                            </p>
                            <p>
                                By using the Services, Customer agrees to be legally bound by this Agreement. These Terms and Conditions apply to the exclusion of any other terms that the Customer seeks to impose or incorporate.
                            </p>
                        </div>
                    </div>

                    {/* Terms & Conditions Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#2D1B69] tracking-tight leading-tight uppercase">
                            Terms & Conditions
                        </h2>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                This Notice may be updated periodically to reflect any necessary changes in our privacy practices.
                            </p>
                        </div>
                    </div>

                    {/* Definitions Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            1. Definitions
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                1.1 Defined terms used in this Agreement are set out in the Schedule, which also includes some rules as to how the Agreement should be interpreted.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            2. Services
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                2.1 The Company will perform the Services as set out in the Statement of Work. This will include the receipt at the Company Location or the collection by the Company from the Customer Location, of Parcels and/or Pallets, the processing and storage of Parcels and Pallets at the Company Location, and the subsequent delivery of Parcels to the Delivery Addresses and Collection Locations.
                            </p>
                            <p>
                                2.2 The Company is not a common carrier, and may refuse to accept a Parcel or Pallet at its total discretion. The Company only accepts goods for carriage and/or storage in accordance with this Agreement.
                            </p>
                            <p>
                                2.3 The Customer shall be responsible for obtaining, at its own expense, all necessary licences, permits and consents (including import and/or export licences, permits and customs and other consents) required to enable the transportation and delivery of Parcels in accordance with this Agreement. The Customer shall be responsible for all Parcels and Pallets including where it is not the owner of the Parcels and Pallets, and will indemnify the Company against any losses incurred as a result of any third party claim(s) brought against the Company by any person alleging to own the Parcels or Pallets.
                            </p>
                            <p>
                                2.4 Delivery Addresses cannot include PO Boxes or BFPO numbers.
                            </p>
                            <p>
                                2.5 The Company may impose additional restrictions or require additional documentation or information for certain deliveries, and the Customer acknowledges that regulatory and customs clearances may be required for certain goods, which may extend the transit time and may delay delivery. Company shall not be liable for any delays in performing the Services as a result of such requirements.
                            </p>
                            <p>
                                2.6 When receiving or collecting Parcels or Pallets the Company may scan them to evidence receipt or collection. The Company shall, if so required, sign a document prepared by the Customer acknowledging receipt or collection but neither the Company&apos;s scan nor the Customer document shall be evidence of the condition or correctness of a declared nature, quantity or weight of the goods at the time received by the Company.
                            </p>
                        </div>
                    </div>

                    {/* Excluded Goods Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            3. Excluded Goods
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                3.1 The Company is not obliged to accept, collect, store, carry or deliver any Excluded Goods. Where the Company collects or is provided any such goods it will return them to the Customer at the Customer&apos;s cost, without liability.
                            </p>
                        </div>
                    </div>

                    {/* Age verification Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            4. Age verification
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                4.1 The Company will not carry out any age verification upon delivery of any Parcel save where expressly stated in the Statement of Work, and it is the Customer&apos;s responsibility to ensure sufficient age verification checks are undertaken for each delivery.
                            </p>
                        </div>
                    </div>

                    {/* Customer obligations Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            5. Customer obligations
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>5.1 The Customer will ensure that:</p>
                            
                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) all Parcels will be appropriately and safely packaged and labelled for the intended delivery and/or storage to ensure that the Parcels will not be lost or damaged whilst being transported, or cause injury or damage to any person or any property or other goods;
                                </p>
                                <p>
                                    (b) where Parcels and/or Pallets are to be collected by the Company, the Customer will make them available at the Customer Location at the specified time separate from all other goods held by the Customer and mark them so that they remain readily identifiable as the goods to be collected by the Company, and will provide any plant power or labour required by the Company in connection with their collection, and where Parcels are to be delivered to the Company, the Customer shall do so at the specified time;
                                </p>
                                <p>
                                    (c) all Parcels include full address details (including postcode) of the Delivery Address and name of Recipient, as well as the sender of the Parcel;
                                </p>
                                <p>
                                    (d) it pays in full all Duties and Taxes and all goods included in Parcels comply with all applicable laws including export and import control regulations (such as regards dual-use goods);
                                </p>
                                <p>
                                    (e) it has taken all steps necessary to ensure that it is able to share with the Company any Personal Data included in delivery details and that the Company&apos;s processing of such Personal Data in order to perform the Services will comply with section 16 below, and not contravene any Data Laws;
                                </p>
                                <p>
                                    (f) the Customer is either solely beneficially entitled to the goods included in all Parcels or has the authority of all those interested in the goods to enter into and perform this Agreement;
                                </p>
                                <p>
                                    (g) it is either the exporter of the goods, or the duly authorised agent of the exporter of the goods, included in all Parcels and will ensure the accuracy and completeness of all information supplied to the Company; and
                                </p>
                                <p>
                                    (h) it accurately provides to the Company the weight and dimensions of each Parcel and all other information and data reasonably required by the Company in relation to each Parcel.
                                </p>
                            </div>

                            <p>
                                5.2 The Company shall not be liable for any failure or delay in the Services to the extent caused by any failure on the part of the Customer to comply with the above obligations or any other terms of this Agreement, and the Company may (at its option) apply additional charges and hold the goods pending payment, or return them to the Customer.
                            </p>
                            <p>
                                5.3 The Company may impose additional charges at the rates set out in the Statement of Work for any wasted journeys made in attempting to deliver the goods as a result of any failure on the part of the Customer to comply with the above obligations or any other terms of this Agreement.
                            </p>
                        </div>
                    </div>

                    {/* Delivery and returns process Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            6. Delivery and returns process
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                6.1 The Company shall commence performing the Services for each Parcel when it is collected by or delivered to the Company. For deliveries, the Services will be complete in relation to each Parcel when it is delivered to the Delivery Address (including being left in a safe place or delivered to a concierge), or to a Neighbour, or as set out in section 6.2. For returns, the Services will be complete in relation to each Parcel when it is collected from the Delivery Address, Neighbour or Collection Location and made available for the Customer to collect from the Company Location.
                            </p>
                            <p>
                                6.2 In respect of deliveries, when the Parcel is not delivered in accordance with section 6.1:
                            </p>
                            
                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) the Company may hold the Parcel at a depot for collection following attempted delivery, and the Services will be complete once a person authorised on the Recipient&apos;s behalf collects the Parcel from the depot; or
                                </p>
                                <p>
                                    (b) the Company may deliver the Parcel to a Collection Location for collection following attempted delivery, and the Services will be complete once a person authorised on the Recipient&apos;s behalf collects the Parcel from the Collection Location, and the Services shall also be deemed to have completed if the Parcel is not collected within a reasonable time, after which it shall be held solely at the Customer&apos;s risk and subject to disposal at the Company&apos;s discretion (and the same shall apply in respect of returns when the Customer does not collect the Parcel within a reasonable time).
                                </p>
                            </div>

                            <p>
                                6.3 Where the Company is unable to deliver to the Parcel in accordance with section 6.1, the Company will endeavour to contact the Customer and request a new Delivery Address.
                            </p>
                            <p>
                                6.4 Effective delivery may be evidenced by a photograph or scan of the Parcel at a Delivery Address or a signature confirming delivery from the Recipient or a person authorised on their behalf, a resident at the Delivery Address or a Neighbour.
                            </p>
                            <p>
                                6.5 For the avoidance of doubt the above process applies subject to the Statement of Work which takes priority (e.g. as to number of delivery attempts, and time periods).
                            </p>
                        </div>
                    </div>

                    {/* Termination Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            7. Termination
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                7.1 The Agreement runs for an initial period of 12 months from signature of the Statement of Work, and then automatically renews save where either party gives at least 30 days written notice to terminate prior to the end of the relevant 12 month period. During each 12 month period, either party may terminate this Agreement by giving the other written notice if:
                            </p>

                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) the other materially breaches any term of this Agreement and it is not possible to remedy that breach;
                                </p>
                                <p>
                                    (b) the other materially breaches any term of this Agreement and it is possible to remedy that breach, but the other fails to do so within 30 days of being requested in writing to do so;
                                </p>
                                <p>
                                    (c) the other becomes insolvent, makes composition with its creditors, has a receiver or administrator of its undertaking or the whole or a substantial part of its assets appointed, or an order is made, or an effective resolution is passed, for its administration, receivership, liquidation, winding-up or other similar process, or has any distress, execution or other process levied or enforced against the whole or a substantial part of its assets (which is not discharged, paid out, withdrawn or removed within 28 days), applies to court for, or obtains, a moratorium under Part A1 of the Insolvency Act 1986, or is subject to any proceedings which are equivalent or substantially similar to any of the foregoing under any applicable jurisdiction, or ceases to trade or threatens to do so; or
                                </p>
                                <p>
                                    (d) the other is delayed in performing its obligations under this Agreement under section 15 for a period of 60 days or more.
                                </p>
                            </div>

                            <p>
                                7.2 The Company may terminate this Agreement by giving the Customer written notice if the Customer:
                            </p>

                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) materially fails to use the Services for any volume of deliveries and/or returns set out in the Statement of Work; or
                                </p>
                                <p>
                                    (b) fails to make any payment when due after having been given written notice it is due, or persistently fails to make payment when due; or
                                </p>
                                <p>
                                    (c) is in persistent or repeated breach of any of its obligations under this Agreement (whether or not it is the same obligation that is breached and whether or not such breaches are remedied).
                                </p>
                            </div>

                            <p>
                                7.3 Without prejudice to its other rights and remedies under this Agreement, where the Company has a right to terminate this Agreement it may suspend performance of its obligations instead.
                            </p>
                            <p>
                                7.4 When this Agreement is terminated the Company may make available for collection or return all undelivered Parcels to the Customer at the Customer&apos;s cost (and will dispose of them if not collected within a reasonable time).
                            </p>
                            <p>
                                7.5 Termination of this Agreement for any reason will not affect any accrued rights or liabilities which either party may have by the time termination takes effect, or the coming into force or the continuation in force of any of its provisions that expressly or by implication are intended to come into force or continue in force on or after termination.
                            </p>
                        </div>
                    </div>

                    {/* Charges Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            8. Charges
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                8.1 The Customer shall pay the Charges as set out in the Statement of Work. The Charges may be based on a specific projected volume of deliveries and/or returns which will be set out in the Statement of Work, and the Company reserves the right to adjust the level of the Charges where any such volumes are not hit.
                            </p>
                            <p>
                                8.2 The Company may require payment from the Recipient for additional services such as switching address or timing.
                            </p>
                            <p>
                                8.3 The Company reserves the right to re-weigh and/or re-measure Parcels and charge accordingly based on the actual weight and/or dimensions.
                            </p>
                            <p>
                                8.4 Where the Charges are paid by a credit or debit card the Company may impose a processing charge of 2% in addition.
                            </p>
                            <p>
                                8.5 The Company may increase the Charges by giving to the Customer not less than 30 days&apos; prior written notice.
                            </p>
                            <p>
                                8.6 Where the Company pays any third party any Duties and Taxes in respect of any Parcel it shall do so on the sole basis that in doing so it is acting as the Customer&apos;s fully authorised agent, the Customer shall repay to the Company such costs in full (whether or not delivery is made).
                            </p>
                            <p>
                                8.7 Unless otherwise expressly provided in this Agreement, all amounts referred to in this Agreement are exclusive of value added tax (&quot;VAT&quot;) or other applicable sales tax which, where chargeable by the Company, shall be payable by the Customer at the rate and in the manner prescribed by law.
                            </p>
                            <p>
                                8.8 The Company shall invoice the Customer for the Charges due in accordance with this Agreement. The Customer must pay each invoice within 14 days of the invoice date. The Customer must pay each invoice, in full, by the due date for payment, without deduction, set off or withholding of any kind.
                            </p>
                        </div>
                    </div>

                    {/* Liability Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            9. Liability
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                9.1 Subject to this section 9 the Company shall be liable for any loss of or damage to goods during transit and storage by the Company save to the extent that such loss or damage has arisen from:
                            </p>
                            
                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) any breach of this Agreement by, or any other act or omission of, the Customer or anyone acting on its behalf;
                                </p>
                                <p>
                                    (b) the Recipient not taking or accepting delivery, or collecting the goods, within a reasonable time;
                                </p>
                                <p>
                                    (c) the Company carrying Excluded Goods;
                                </p>
                                <p>
                                    (d) any special handling requirements in respect of the goods which have not been notified to the Company;
                                </p>
                                <p>
                                    (e) inherent liability to wastage, latent or inherent defect, vice or natural deterioration of the goods, wear and tear, depreciation, moths, vermin, or the effect of any process of cleaning, dyeing or restoring any article;
                                </p>
                                <p>
                                    (f) any delay in providing the Company with safe and adequate access and/or collection or delivery instructions;
                                </p>
                                <p>
                                    (g) seizure under legal process, any other acts or omissions of any customs office, governmental bodies or other regulatory agencies, and any observance by the Company of rules and regulations and decisions and orders issued by customs, governmental bodies and regulatory agencies; or
                                </p>
                                <p>
                                    (h) defect of any equipment supplied by the Customer;
                                </p>
                            </div>

                            <p>
                                9.2 Any specific timescales for delivery and/or collection which the Company gives are on a best efforts basis only. Where the Company delivers any Parcel after the time specified in the Statement of Work, the Customer&apos;s sole and exclusive remedy for any losses (whether in contract, tort, negligence or otherwise and howsoever arising) shall be a reduction in the Charges payable to the Company so as to reflect the Service actually received. Also, timely performance of the Services is dependent on the Customer complying with its obligations in respect of injection of Parcels into the Company&apos;s infrastructure.
                            </p>
                            <p>
                                9.3 Subject to this section 9 the Company&apos;s liability (whether in contract, tort, conversion, negligence or otherwise and howsoever arising) for the loss of or damage to any goods or any delay or failure to deliver or return a Parcel and/or for any other matter (howsoever arising) arising in connection with a Parcel shall be limited to the production costs of the relevant goods (where Company is the producer) or the purchase costs of the goods by the Company otherwise, always limited to €100 per Parcel or € 1000 per Pallet.
                            </p>
                            <p>
                                9.4 Subject to the terms set out in this section 9, the Company&apos;s total liability (whether in contract, tort, conversion, negligence or otherwise and howsoever arising) for any loss or damage arising in connection with this Agreement shall be limited to the lesser of €10,000 or 100% of the total charges paid by the Customer in connection with Services performed in the 6 month period immediately preceding the act or omission giving rise to the liability.
                            </p>
                            <p>
                                9.5 The Company shall not be liable (whether in contract, tort, conversion, negligence or otherwise and howsoever arising), for any loss of profit, revenue or sales, or for any indirect or consequential loss.
                            </p>
                            <p>
                                9.6 Nothing in this Agreement shall limit or exclude the Company&apos;s liability for death or personal injury caused by its negligence, or the negligence of its employees, agents or subcontractors, or for fraud or fraudulent misrepresentation or for any other matter for which it is unlawful to exclude or limit liability.
                            </p>
                            <p>
                                9.7 The Customer must notify the Company of any loss or damage giving rise to a claim within 14 days of the required date of the relevant delivery, providing all evidence supporting such claim within 28 days, and if the Customer fails to do so, the Company shall not be liable for any loss or damage.
                            </p>
                            <p>
                                9.8 For claims for damage to goods the Customer must ensure that the goods and their packaging are held for inspection at the Delivery Address, and must provide photographic evidence.
                            </p>
                            <p>
                                9.9 In the event of a claim for loss the Customer must complete, or procure that the Recipient completes, a denial of receipt letter upon the Company&apos;s request.
                            </p>
                            <p>
                                9.10 In any event, any claim made by the Customer must be made within one year from the date of despatch.
                            </p>
                            <p>
                                9.11 In the event that an allegation or determination is made that there has been a transfer of any employment or engagement of any Customer Personnel or any liability relating to any Customer Personnel to the Company or any of its affiliates, whether pursuant to any Transfers Legislation or otherwise, the Customer shall indemnify, defend and hold harmless the Company and its affiliates against all losses that it and they suffers or becomes liable for however arising as a result of or in connection with the employment or engagement of such Customer Personnel, the termination of such employment or engagement by the Company or any of its affiliates , and/or any claim by any individual, trade union, works council, staff association or other representative person or body (whether or not elected) in respect of any obligation under any Transfers Legislation. The Company or its relevant affiliate shall have the right to defend, conduct and/or settle any claim for which it is indemnified by the Customer under this section 9.11. provided that, prior to any settlement, it shall first seek the consent of the Customer, which consent shall not be unreasonably withheld or delayed.
                            </p>
                        </div>
                    </div>

                    {/* Indemnity Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            10. Indemnity
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                10.1 The Customer shall indemnify the Company fully for Duties and Taxes and any other costs, expenses or customs fees (including any surcharges, additional fees for customs clearance, administrative or storage costs) incurred by the Company in conveying goods on behalf of the Customer including without limit, those in the importing country or for any failure to export goods which have been zero-rated for the purposes of VAT (or similar tax or duty) or to comply with any conditions relating to importing or exporting zero-rated goods. For the avoidance of doubt, Company is not obliged to incur any such costs and Customer&apos;s failure to pay them itself in advance as required may impact performance of the Services (for which the Company will not be liable).
                            </p>
                            <p>
                                10.2 The Customer shall indemnify the Company against all liabilities, costs, expenses, damages and losses (including any direct, indirect or consequential losses, loss of profit, loss of reputation and all interest, penalties and legal costs (calculated on a full indemnity basis) and all other reasonable professional costs and expenses) suffered or incurred by the Company arising out of or in connection with:
                            </p>
                            
                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) any negligent act or omission of the Customer;
                                </p>
                                <p>
                                    (b) the carriage of Excluded Goods;
                                </p>
                                <p>
                                    (c) third party claims in respect of loss of or damage to goods carried by the Company under this Agreement;
                                </p>
                                <p>
                                    (d) any duties or taxes payable on goods carried for the Customer (including Duties and Taxes), and any claims made or penalties imposed by local and/or foreign Tax & Customs Authorities;
                                </p>
                                <p>
                                    (e) any inaccurate or false information supplied to the Company by the Customer which relates to the Customer and/or the goods comprised in any Parcel or Pallet; and
                                </p>
                                <p>
                                    (f) any liability incurred by the Company in connection with the Company acting as an agent on the Customer&apos;s behalf in accordance with this Agreement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* No reliance Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            11. No reliance
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                11.1 The Customer acknowledges that it has not relied on any statement, promise or representation made or given by or on behalf of the Company which is not set out in this Agreement.
                            </p>
                        </div>
                    </div>

                    {/* Subcontracting Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            12. Subcontracting
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                12.1 The Company may subcontract any of its duties and/or obligations under this Agreement providing it remains liable for them.
                            </p>
                        </div>
                    </div>

                    {/* Anti-bribery and sanctions Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            13. Anti-bribery and sanctions
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                13.1 It is a condition of this Agreement that, in pre-contract negotiations and in the exercise of its rights or the performance of its obligations under this Agreement, each party shall at all times ensure that it complies with all applicable laws, statutes, regulations and codes relating to anti-bribery and anti-corruption, including the Bribery Act 2010 (&quot;Anti-bribery Laws&quot;) and that it does not commit (or procure the commission of) any breach of any Anti-bribery Laws or do anything which would cause any other party to commit an offence under any Anti-bribery Laws.
                            </p>
                        </div>
                    </div>

                    {/* Force Majeure Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            14. Force Majeure
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                14.1 Neither party will be liable to the other for any failure or delay in performing its obligations under this Agreement which arises because of any circumstances which it cannot reasonably be expected to control (which shall include act of God, explosion, flood, tempest, fire or accident, war or threat of war, sabotage, insurrection, civil disturbance or requisition, acts, restrictions, regulations, bye-laws, prohibitions or measures of any kind on the part of any governmental, parliamentary or local authority, import or export regulations or embargoes, strikes, lock-outs or other industrial actions or trade disputes (whether involving personnel of the Company or a third party), difficulties in obtaining raw materials, labour, fuel, parts or machinery or breakdown in machinery, or interruption or failure of the Internet or of any network, telecommunications, power supply or infrastructure, or any provider of any of the foregoing, but shall not include shortage or lack of available funds on the part of the Customer), provided that it:
                            </p>
                            
                            <div className="space-y-4 pl-4 md:pl-8">
                                <p>
                                    (a) notifies the other in writing as soon as reasonably practicable about the nature and extent of the circumstances and likely effects;
                                </p>
                                <p>
                                    (b) uses reasonable efforts to mitigate the effects of the circumstances so as to minimise or avoid any adverse impact on the other; and
                                </p>
                                <p>
                                    (c) uses reasonable efforts to resume performance as soon as reasonably practicable.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Customer data Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            15. Customer data
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                15.1 The Customer provides Personal Data of Recipients and other individuals to the Company in order for the Company to provide the Services. The Company shall be a Data Controller and the Customer shall be a separate Data Controller. Each party shall comply with its obligations under Data Laws.
                            </p>
                            <p>
                                15.2 The Company may share the Personal Data with its third party sub-processors for the purpose of providing or improving the Services.
                            </p>
                        </div>
                    </div>

                    {/* Updates to these Service Terms Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            16. Updates to these Service Terms
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                16.1 From time to time, Company may update these Terms and Conditions by giving Customer at least 14 days&apos; written notice.
                            </p>
                        </div>
                    </div>

                    {/* Intellectual Property Rights Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            17. Intellectual Property Rights
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                17.1 All Intellectual Property Rights in any materials (including software) supplied by the Company to the Customer and in any methods of work and processes used by the Company in connection with this Agreement are and shall remain the exclusive property of the Company. Nothing in these Terms and Conditions shall imply any licence or other permission to use or reproduce any such materials, methods and processes save as expressly agreed in writing.
                            </p>
                            <p>
                                17.2 The Customer grants the Company and its subcontractors a fully paid-up, worldwide, royalty-free licence to use the Customer&apos;s Intellectual Property Rights, including any relevant trade mark or logo, for the purpose of providing the Services.
                            </p>
                            <p>
                                17.3 The Customer undertakes that it shall not at any time disclose to any person any confidential information concerning the business (including, without limitation, its pricing, policies and procedures), affairs, customers, clients or suppliers of the Company or of any member of the group of companies to which the Company belongs. The Customer shall not use the Company&apos;s confidential information for any purpose other than to the extent necessary to receive the benefit of the Services.
                            </p>
                        </div>
                    </div>

                    {/* General Section */}
                    <div className="space-y-4 pt-10 border-t border-gray-100">
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                            18. General
                        </h3>

                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                            <p>
                                18.1 All notices and consents relating to this Agreement must be in writing. Notices must be sent to the address of the recipient set out in this Agreement or otherwise notified by the relevant party in accordance with this Agreement. Notices shall be sent by hand or by first class recorded delivery or registered post or other form of certified or registered mail (and sent by air mail if posted to or from a place outside the United Kingdom) or by email.
                            </p>
                            <p>
                                18.2 Unless the parties expressly agree otherwise in writing, if a party fails to exercise or delays exercising or only exercises partially any right or remedy provided under this Agreement or by law, or agrees not to exercise or to delay exercising any right or remedy provided under this Agreement or by law, then that party shall not be deemed to have waived and shall not be precluded or restricted from further exercising that or any other right or remedy.
                            </p>
                            <p>
                                18.3 Subject to section 16, all variations to this Agreement must be agreed, set out in writing and signed on behalf of both parties before they take effect.
                            </p>
                            <p>
                                18.4 Except to the extent that this Agreement expressly provides otherwise, nothing in this Agreement shall or is intended to create a partnership or joint venture between the parties, constitute one party as agent of the other or give either party authority to make or enter into commitments, assume liabilities or pledge credit on behalf of the other party. Neither party may act as if it were, or represent (expressly or by implying it) that it is, an agent of the other or has such authority.
                            </p>
                            <p>
                                18.5 A person who is not a party to this Agreement shall not have any rights under or in connection with it, whether under the Contracts (Rights of Third Parties) Act 1999 or otherwise.
                            </p>
                            <p>
                                18.6 This Agreement sets out all of the terms that have been agreed between the parties in relation to the subjects covered by it and supersedes all previous agreements between the parties relating to such subjects. Provided always that nothing in this section 18.6 will operate to limit or exclude any liability for fraud or fraudulent misrepresentation, no other representations or terms shall apply or form part of this Agreement. Each party acknowledges that it has not been influenced to enter this Agreement by, and shall have no right or remedy (other than for breach of contract) in respect of, anything the other party has said or done or committed to do, except as expressly recorded in this Agreement.
                            </p>
                            <p>
                                18.7 Any dispute or difference between the parties arising out of or in connection with this Agreement, its interpretation or subject-matter (&quot;Dispute&quot;) shall be referred to the Chief Executive Officer (or equivalent officer) of each party and then, if still not resolved, to the Chairman (or equivalent officer) of each party. If any such Dispute remains unresolved for a period in excess of 14 days from the date it was referred to the latter representatives (or such other period as the parties may agree), it will be resolved in accordance with clause 18.8.
                            </p>
                            <p>
                                18.8 This agreement is governed by English law. Subject to clause 18.7, the parties submit to the exclusive jurisdiction of the English courts in relation to any Dispute. Nothing in this Agreement shall prevent any party, in cases in which interim, injunctive or declaratory relief is required, or where the right to issue proceedings would be prejudiced by the impending expiration of any applicable limitation period, from commencing proceedings and pursuing claims before a court of competent jurisdiction.
                            </p>
                        </div>
                    </div>

                    {/* Schedule Section */}
                    <div className="space-y-8 pt-16 border-t border-gray-100">
                        <div className="space-y-4">
                            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#2D1B69] tracking-tight leading-tight uppercase">
                                SCHEDULE – DEFINED TERMS
                            </h2>
                            <p className="text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                                This Notice may be updated periodically to reflect any necessary changes in our privacy practices.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                                1. Definitions
                            </h3>
                            
                            <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Charges&quot;</span> means the charges or prices set out in the Statement of Work.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Collection Location&quot;</span> means a third party location, such as a local shop, which is close to the original Delivery Address or where the Company elects to deliver the Parcel to such a third party location in accordance with sections 8(c)(ii) and 8(f).</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Company Location&quot;</span> means one of the Company warehouses specified by the Company for each delivery or collection.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Customer&quot;</span> means the person, firm or company that enters into a contract of carriage or a contract for other services with the Company.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Customer Personnel&quot;</span> means the Customer&apos;s and its affiliates&apos; officers, employees, workers, contractors and agents and/or those of its sub-contractors and suppliers and pervious suppliers (but not the Supplier).</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Customer Location&quot;</span> means on of the Customer warehouses specified in the Statement of Work.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Dangerous Goods&quot;</span> means goods classified as dangerous goods by UNECE from time to time or by the IATA Dangerous Goods Regulations (DGR) or goods which present a comparable hazard. Dangerous Goods are also goods which can cause direct physical damage, are capable of causing injury to people or to their health or are physically dangerous to other goods.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Data Controller&quot;</span> is defined under Data Laws.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Data Laws&quot;</span> means, to the extent applicable to this Agreement, (i) the United Kingdom General Data Protection Regulation (&quot;UK GDPR&quot;), the Data Protection Act 2018, the Privacy and Electronic Communications (EC Directive) Regulations 2003, and the Security of Network &amp; Information Systems Regulations 2018, all as amended and/or replaced, and in force from time to time, (ii) the General Data Protection Regulation 2016 (EU) 2016/679 and all other applicable laws and regulations relating to data protection and privacy, and (iii) all related statutory codes of practice and guidance issued by any relevant data protection authority.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Delivery Address&quot;</span> means the address printed on the Parcel to which the Parcel is to be delivered.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Duties and Taxes&quot;</span> means any duties, taxes, tariffs, levies, customs assessments, charges, penalties, interest and any other costs and expenses imposed by any domestic or international import or export authority in respect of a Parcel.</p>
                                
                                <div className="space-y-4">
                                    <p><span className="font-semibold text-[#2D1B69]">&quot;Excluded Goods&quot;</span> means:</p>
                                    <div className="space-y-2 pl-4 md:pl-8 italic">
                                        <p>Dangerous Goods;</p>
                                        <p>Hazardous or flammable goods;</p>
                                        <p>firearms (including imitation firearms or firearm components), bladed products or articles, cash, documents which can be exchanged for cash or goods or services (for example cheques, credit/debit cards, vouchers with a face value, event tickets), personally identifiable data (including prescriptions), personal effects, precious metals (including gold or silver items) with a value exceeding € 250, furs or any other valuables, body parts or human remains, living or dead animals, fish or birds, or any living organism of any type (including trees, or flowers shipped in liquid);</p>
                                        <p>any goods prohibited by the law or regulation of any government or public or local authority of any country where the goods are carried or goods that are destined for any country, company, organisation or individual that is subject to any applicable national or international export or import control or regulation, including any restrictive measure or embargo imposed in the framework of the programs of the United Nations or any other national or international program, any applicable national and international regulation against terrorism and money laundering, or comparable activities;</p>
                                        <p>any goods which require a licence or permit in order to transport or store and/or which are subject to import, export, or transportation restrictions imposed by the laws applicable in the country of expedition, dispatch, transit, destination, or otherwise;</p>
                                        <p>goods that require a declaration of value pursuant to Art. 24 CMR or the declaration of special interest in delivery pursuant to Art. 26 Paragraph 1 CMR or goods that require a declaration of value or a declaration of a special interest in delivery pursuant to Art. 22 Warsaw Convention/Art. 22 Montreal Convention;</p>
                                        <p>any goods which require temperature-controlled transport; or</p>
                                        <p>any other goods which are prohibited by the Company from time to time.</p>
                                    </div>
                                </div>

                                <p><span className="font-semibold text-[#2D1B69]">&quot;Intellectual Property Rights&quot;</span> means patents, rights to inventions, utility models, copyright and related rights, trade marks, service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to sue for passing off, unfair competition rights, rights in designs, rights in computer software, database right, topography rights, moral rights, rights in confidential information (including know-how and trade secrets) and any other intellectual property rights, in each case whether registered or unregistered and including all applications for and renewals or extensions of such rights, and all similar or equivalent rights or forms of protection in any part of the world.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Neighbour&quot;</span> means a person who lives or works in a property within 50 metres walking distance of the Delivery Address.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Pallet&quot;</span> means a pallet of multiple Parcels.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Parcel&quot;</span> means an item which (i) weighs [no more than 5 kgs, (ii) where the longest side (defined as the length, width or height) is no longer than 50 cm, and (iii) where the volume does not exceed 0,0196 m³. Parcel exceeding one or more of these restrictions shall be defined as &quot;Oversize&quot; parcels and may be refused or incur additional charges.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Personal Data&quot;</span> is defined under Data Laws.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Recipient&quot;</span> means addressee printed on the Parcel to whom the Parcel is to be delivered.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Services&quot;</span> means the delivery, returns and storage services offered by the Company as set out in the Statement of Work.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Statement of Work&quot;</span> means the statement of work entered into between the Company and the Customer.</p>
                                <p><span className="font-semibold text-[#2D1B69]">&quot;Transfers Legislation&quot;</span> means any applicable regulations or legislation that require or operate to transfer the employment or engagement of any Customer Personnel to the Company or its affiliates at any time after the Effective Date, any rules or regulations implementing Council Regulation 2001/23/EC, and any other laws or regulations (in any jurisdiction and whether inside the European Union or not) analogous to any of the foregoing or relating to the automatic transfer of employment or employment-related liabilities (including the Transfer of Undertakings (Protection of Employment) Regulations 2006).</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-10 border-t border-gray-100">
                            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#2D1B69] tracking-tight leading-tight">
                                Interpretation
                            </h3>
                            
                            <div className="text-[#4A5568] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                                <p>
                                    In this Agreement (including the introduction and schedules) unless the context otherwise requires, reference to a person includes a legal person (such as a limited company) as well as a natural person, references to clauses or schedules shall be to those in this Agreement, clause headings are for convenience only and shall not affect the construction of this Agreement, reference to &quot;including&quot; or any similar terms in this Agreement shall be treated as being by way of example and shall not limit the general applicability of any preceding words, and reference to any legislation shall be to that legislation as amended, extended or re-enacted from time to time and to any subordinate provision made under that legislation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Spacing for future content */}
                    <div className="pb-10"></div>
                </motion.div>
            </div>
        </section>
    );
};
