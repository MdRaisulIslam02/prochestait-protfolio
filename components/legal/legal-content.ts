export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: Block[];
};

export type LegalPageData = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export type PageKey = 'terms' | 'returnPolicy' | 'supportPolicy' | 'privacyPolicy';
export type LegalLocale = 'en' | 'bn';

export const legalContent: Record<PageKey, Record<LegalLocale, LegalPageData>> = {
  terms: {
    en: {
      eyebrow: 'Legal',
      title: 'Terms & Conditions',
      description:
        "Please read these terms carefully before engaging our services. By using Prochesta IT's services, you agree to be bound by the conditions outlined here.",
      updated: 'Last updated: June 10, 2026',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptance of Terms',
          blocks: [
            {
              type: 'p',
              text: 'By accessing our website, requesting a quote, or engaging Prochesta IT ("we", "us", "our") for any service, you confirm that you have read, understood, and agree to these Terms and Conditions. If you are entering into this agreement on behalf of a company, you represent that you have authority to bind that company.',
            },
          ],
        },
        {
          id: 'services',
          title: '2. Services',
          blocks: [
            {
              type: 'p',
              text: 'Prochesta IT provides custom software development, e-commerce solutions, web applications, mobile applications, ERP systems, POS solutions, digital marketing, and related IT services. All services are delivered as agreed in the project proposal and service agreement signed prior to project commencement.',
            },
          ],
        },
        {
          id: 'obligations',
          title: '3. Client Obligations',
          blocks: [
            {
              type: 'p',
              text: 'Clients are responsible for providing accurate, complete, and timely information required for project delivery. Delays caused by late content submission, unresponsiveness, or scope changes initiated by the client may extend the delivery timeline.',
            },
            {
              type: 'ul',
              items: [
                'Designate a single point of contact for project coordination.',
                'Review and approve deliverables promptly within agreed review windows.',
                'Ensure that any third-party materials (images, content, data) provided to us are licensed for use.',
              ],
            },
          ],
        },
        {
          id: 'payment',
          title: '4. Payment Terms',
          blocks: [
            {
              type: 'p',
              text: 'Projects require a non-refundable advance payment before work commences. The remaining balance is due upon project completion before final handover. Milestone-based projects follow the schedule specified in the project proposal.',
            },
            {
              type: 'table',
              headers: ['Payment Stage', 'Amount Due', 'When'],
              rows: [
                ['Advance / Kickoff', '50%', 'Before project starts'],
                ['Final Payment', '50%', 'On completion, before handover'],
              ],
            },
            {
              type: 'p',
              text: 'Invoices unpaid for more than 15 calendar days may attract a 2% monthly late fee. We reserve the right to suspend work on accounts with overdue balances.',
            },
          ],
        },
        {
          id: 'ip',
          title: '5. Intellectual Property',
          blocks: [
            {
              type: 'p',
              text: "Upon receipt of full payment, the client receives ownership of the final deliverables as specified in the project agreement. Prochesta IT retains the right to use general methodologies, reusable frameworks, and non-client-specific code in future projects. Client-specific data, branding, and business logic remain exclusively the client's property.",
            },
          ],
        },
        {
          id: 'warranty',
          title: '6. Warranty & Disclaimer',
          blocks: [
            {
              type: 'p',
              text: 'We provide a 30-day post-delivery bug-fix warranty covering defects in the agreed deliverables. This warranty does not cover changes to requirements, new feature requests, or issues arising from third-party services outside our scope of work.',
            },
            {
              type: 'p',
              text: "Beyond the warranty period, services are provided \"as-is\" unless the client has an active support package. We do not guarantee uninterrupted access to third-party platforms (payment gateways, hosting, etc.).",
            },
          ],
        },
        {
          id: 'liability',
          title: '7. Limitation of Liability',
          blocks: [
            {
              type: 'p',
              text: "Prochesta IT's total liability for any claim arising from our services is limited to the amount paid by the client for the specific service in dispute. We are not liable for indirect, incidental, or consequential damages — including loss of revenue, data, or business opportunities — even if we were advised of the possibility of such damages.",
            },
          ],
        },
        {
          id: 'confidentiality',
          title: '8. Confidentiality',
          blocks: [
            {
              type: 'p',
              text: 'Both parties agree to keep project details, technical specifications, and business information confidential during and after the engagement. We will not share your information with third parties without your written consent, except where required by applicable law.',
            },
          ],
        },
        {
          id: 'governing-law',
          title: '9. Governing Law',
          blocks: [
            {
              type: 'p',
              text: "These Terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in Dhaka, Bangladesh.",
            },
          ],
        },
        {
          id: 'changes',
          title: '10. Changes to These Terms',
          blocks: [
            {
              type: 'p',
              text: 'We reserve the right to update these Terms at any time. We will notify active clients of material changes. Continued use of our services following any revision constitutes your acceptance of the updated Terms.',
            },
          ],
        },
        {
          id: 'contact',
          title: '11. Contact',
          blocks: [
            {
              type: 'p',
              text: 'For questions or concerns about these Terms, please contact us:',
            },
            {
              type: 'ul',
              items: [
                'Email: legal@prochestait.com',
                'Phone: 01726-724300',
                'Address: House 23, Road 13, Sector-10, Uttara, Dhaka-1230',
              ],
            },
          ],
        },
      ],
    },
    bn: {
      eyebrow: 'আইনি তথ্য',
      title: 'শর্তাবলী',
      description:
        'আমাদের সেবা গ্রহণের আগে এই শর্তাবলী মনোযোগ দিয়ে পড়ুন। প্রচেষ্টা আইটিের সেবা ব্যবহার করলে আপনি এই শর্তগুলো মানতে সম্মত হচ্ছেন।',
      updated: 'সর্বশেষ আপডেট: ১০ জুন ২০২৬',
      sections: [
        {
          id: 'acceptance',
          title: '১. শর্ত গ্রহণ',
          blocks: [
            {
              type: 'p',
              text: 'আমাদের ওয়েবসাইট ভিজিট করে, কোট অনুরোধ করে বা প্রচেষ্টা আইটিের ("আমরা") সেবা গ্রহণ করে আপনি নিশ্চিত করছেন যে আপনি এই শর্তাবলী পড়েছেন, বুঝেছেন এবং মানতে সম্মত। কোনো কোম্পানির পক্ষে চুক্তি করলে, আপনি নিশ্চিত করছেন যে আপনার সেই কর্তৃত্ব আছে।',
            },
          ],
        },
        {
          id: 'services',
          title: '২. সেবাসমূহ',
          blocks: [
            {
              type: 'p',
              text: 'প্রচেষ্টা আইটি কাস্টম সফটওয়্যার ডেভেলপমেন্ট, ই-কমার্স সলিউশন, ওয়েব অ্যাপ্লিকেশন, মোবাইল অ্যাপ, ইআরপি সিস্টেম, পিওএস সলিউশন, ডিজিটাল মার্কেটিং এবং সংশ্লিষ্ট আইটি সেবা প্রদান করে। সমস্ত সেবা প্রজেক্ট শুরুর আগে সম্পাদিত চুক্তি অনুযায়ী সরবরাহ করা হয়।',
            },
          ],
        },
        {
          id: 'obligations',
          title: '৩. ক্লায়েন্টের দায়িত্ব',
          blocks: [
            {
              type: 'p',
              text: 'ক্লায়েন্টকে প্রজেক্ট ডেলিভারির জন্য সঠিক, সম্পূর্ণ এবং সময়মতো তথ্য প্রদান করতে হবে। ক্লায়েন্টের দেরিতে কন্টেন্ট জমা দেওয়া বা সাড়া না দেওয়ার কারণে ডেলিভারি টাইমলাইন বাড়তে পারে।',
            },
            {
              type: 'ul',
              items: [
                'প্রজেক্ট সমন্বয়ের জন্য একজন নির্দিষ্ট যোগাযোগ ব্যক্তি মনোনীত করুন।',
                'সম্মত সময়ের মধ্যে ডেলিভারেবল রিভিউ এবং অনুমোদন দিন।',
                'প্রদত্ত তৃতীয় পক্ষের উপকরণ (ছবি, কন্টেন্ট) ব্যবহারের লাইসেন্সপ্রাপ্ত নিশ্চিত করুন।',
              ],
            },
          ],
        },
        {
          id: 'payment',
          title: '৪. পেমেন্ট শর্তাবলী',
          blocks: [
            {
              type: 'p',
              text: 'প্রজেক্ট শুরুর আগে অফেরতযোগ্য অগ্রিম পেমেন্ট প্রয়োজন। বাকি অর্থ প্রজেক্ট সম্পন্ন হলে এবং চূড়ান্ত হস্তান্তরের আগে পরিশোধ করতে হবে।',
            },
            {
              type: 'table',
              headers: ['পেমেন্ট ধাপ', 'পরিমাণ', 'সময়'],
              rows: [
                ['অগ্রিম / কিকঅফ', '৫০%', 'প্রজেক্ট শুরুর আগে'],
                ['চূড়ান্ত পেমেন্ট', '৫০%', 'সম্পন্ন হওয়ার পর, হস্তান্তরের আগে'],
              ],
            },
            {
              type: 'p',
              text: '১৫ ক্যালেন্ডার দিনের বেশি বকেয়া ইনভয়েসে মাসিক ২% বিলম্ব ফি যুক্ত হতে পারে।',
            },
          ],
        },
        {
          id: 'ip',
          title: '৫. মেধা সম্পত্তি',
          blocks: [
            {
              type: 'p',
              text: 'সম্পূর্ণ পেমেন্ট পাওয়ার পর ক্লায়েন্ট চুক্তিতে নির্দিষ্ট চূড়ান্ত ডেলিভারেবলের মালিকানা পান। প্রচেষ্টা আইটি ভবিষ্যতের প্রজেক্টে সাধারণ পদ্ধতি, পুনর্ব্যবহারযোগ্য ফ্রেমওয়ার্ক ব্যবহারের অধিকার রাখে। ক্লায়েন্ট-নির্দিষ্ট ডেটা, ব্র্যান্ডিং এবং ব্যবসায়িক লজিক সম্পূর্ণভাবে ক্লায়েন্টের মালিকানায় থাকে।',
            },
          ],
        },
        {
          id: 'warranty',
          title: '৬. ওয়ারেন্টি ও দায়মুক্তি',
          blocks: [
            {
              type: 'p',
              text: 'ডেলিভারির পর ৩০ দিনের বাগ-ফিক্স ওয়ারেন্টি প্রদান করা হয়। এটি সম্মত ডেলিভারেবলের ত্রুটি কভার করে। নতুন ফিচার অনুরোধ বা তৃতীয় পক্ষের সেবা থেকে উদ্ভূত সমস্যা এর আওতায় পড়ে না।',
            },
          ],
        },
        {
          id: 'liability',
          title: '৭. দায়বদ্ধতার সীমা',
          blocks: [
            {
              type: 'p',
              text: 'যেকোনো দাবির জন্য প্রচেষ্টা আইটিের মোট দায় বিতর্কিত সেবার জন্য ক্লায়েন্টের প্রদত্ত অর্থের মধ্যে সীমাবদ্ধ। রাজস্ব, ডেটা বা ব্যবসায়িক সুযোগ হারানোসহ পরোক্ষ বা আনুষঙ্গিক ক্ষতির জন্য আমরা দায়ী নই।',
            },
          ],
        },
        {
          id: 'confidentiality',
          title: '৮. গোপনীয়তা',
          blocks: [
            {
              type: 'p',
              text: 'উভয় পক্ষ প্রজেক্টের বিবরণ, প্রযুক্তিগত স্পেসিফিকেশন এবং ব্যবসায়িক তথ্য গোপন রাখতে সম্মত। আইনগত প্রয়োজন ছাড়া লিখিত অনুমতি ছাড়া আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হবে না।',
            },
          ],
        },
        {
          id: 'governing-law',
          title: '৯. প্রযোজ্য আইন',
          blocks: [
            {
              type: 'p',
              text: 'এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের আইন দ্বারা পরিচালিত। এর অধীনে উদ্ভূত যেকোনো বিরোধ ঢাকার উপযুক্ত আদালতের এখতিয়ারে নিষ্পত্তি হবে।',
            },
          ],
        },
        {
          id: 'changes',
          title: '১০. শর্তাবলী পরিবর্তন',
          blocks: [
            {
              type: 'p',
              text: 'আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার রাখি। পরিবর্তনের পরও আমাদের সেবা ব্যবহার করা মানে আপনি আপডেটেড শর্তাবলী মেনে নিচ্ছেন।',
            },
          ],
        },
        {
          id: 'contact',
          title: '১১. যোগাযোগ',
          blocks: [
            {
              type: 'p',
              text: 'এই শর্তাবলী সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:',
            },
            {
              type: 'ul',
              items: [
                'ইমেইল: legal@prochestait.com',
                'ফোন: ০১৭২৬-৭২৪৩০০',
                'ঠিকানা: বাড়ি ২৩, রোড ১৩, সেক্টর-১০, উত্তরা, ঢাকা-১২৩০',
              ],
            },
          ],
        },
      ],
    },
  },

  returnPolicy: {
    en: {
      eyebrow: 'Legal',
      title: 'Return Policy',
      description:
        "Because we build custom software, traditional returns do not apply — but we are fully committed to your satisfaction. Here's exactly how we handle refunds.",
      updated: 'Last updated: June 10, 2026',
      sections: [
        {
          id: 'overview',
          title: '1. Overview',
          blocks: [
            {
              type: 'p',
              text: 'Prochesta IT specialises in bespoke software development. Unlike physical goods, custom software cannot be "returned" in the traditional sense once work has begun. However, we handle all refund requests fairly, transparently, and on a case-by-case basis.',
            },
          ],
        },
        {
          id: 'eligible-refunds',
          title: '2. Eligible Refund Scenarios',
          blocks: [
            {
              type: 'p',
              text: 'A full or partial refund may be approved in the following situations:',
            },
            {
              type: 'ul',
              items: [
                'Prochesta IT fails to deliver the agreed project within the stipulated timeline without a valid reason, and cannot rectify the delay within a mutually agreed extension.',
                'The delivered work substantially fails to meet the agreed specifications and we are unable to fix the issues within our 30-day warranty period.',
                'A project is cancelled before work has commenced — in this case the advance payment will be fully refunded.',
                'Duplicate payments made in error.',
              ],
            },
          ],
        },
        {
          id: 'non-refundable',
          title: '3. Non-Refundable Cases',
          blocks: [
            {
              type: 'p',
              text: 'Refunds will not be issued in the following circumstances:',
            },
            {
              type: 'ul',
              items: [
                'Change of mind after development work has commenced.',
                'Delays caused by the client — late content, unresponsiveness, or scope changes.',
                'Dissatisfaction with aesthetic choices that align with the agreed design brief.',
                "Third-party fees (domain registration, hosting, API licences, SMS credits) paid on the client's behalf.",
                'Projects where the final deliverable has been accepted by the client and the handover is complete.',
                'Services fully rendered (e.g. digital marketing campaigns that have run).',
              ],
            },
          ],
        },
        {
          id: 'process',
          title: '4. How to Request a Refund',
          blocks: [
            {
              type: 'p',
              text: 'To initiate a refund request, please follow these steps:',
            },
            {
              type: 'ul',
              items: [
                'Email support@prochestait.com with the subject line "Refund Request — [Your Project Name]".',
                'Include your project reference number, the amount paid, and a clear explanation of the reason.',
                'Attach any supporting documentation (invoices, communication records, screenshots).',
              ],
            },
            {
              type: 'p',
              text: 'We will acknowledge your request within 2 business days and provide a written resolution within 10 business days.',
            },
          ],
        },
        {
          id: 'timeline',
          title: '5. Refund Timeline',
          blocks: [
            {
              type: 'p',
              text: 'Approved refunds are processed within 7–14 business days via the original payment method (bank transfer or mobile banking). Processing times may vary depending on your bank or mobile banking provider.',
            },
          ],
        },
        {
          id: 'contact',
          title: '6. Contact',
          blocks: [
            {
              type: 'ul',
              items: [
                'Email: support@prochestait.com',
                'Phone / WhatsApp: 01726-724300',
                'Business hours: Saturday–Thursday, 9:00 AM – 7:00 PM BST',
              ],
            },
          ],
        },
      ],
    },
    bn: {
      eyebrow: 'আইনি তথ্য',
      title: 'রিটার্ন পলিসি',
      description:
        'আমরা কাস্টম সফটওয়্যার তৈরি করি — তাই ঐতিহ্যগত রিটার্ন প্রযোজ্য নয়। তবে আপনার সন্তুষ্টির প্রতি আমরা সম্পূর্ণ প্রতিশ্রুতিবদ্ধ।',
      updated: 'সর্বশেষ আপডেট: ১০ জুন ২০২৬',
      sections: [
        {
          id: 'overview',
          title: '১. সংক্ষিপ্ত বিবরণ',
          blocks: [
            {
              type: 'p',
              text: 'প্রচেষ্টা আইটি কাস্টম সফটওয়্যার ডেভেলপমেন্টে বিশেষজ্ঞ। শারীরিক পণ্যের মতো কাস্টম সফটওয়্যার একবার কাজ শুরু হলে ফেরত দেওয়া সম্ভব নয়। তবে আমরা সমস্ত রিফান্ড অনুরোধ ন্যায্য ও স্বচ্ছভাবে প্রতিটি ক্ষেত্রে বিবেচনা করি।',
            },
          ],
        },
        {
          id: 'eligible-refunds',
          title: '২. রিফান্ডযোগ্য পরিস্থিতি',
          blocks: [
            {
              type: 'p',
              text: 'নিচের পরিস্থিতিতে সম্পূর্ণ বা আংশিক রিফান্ড অনুমোদন পেতে পারে:',
            },
            {
              type: 'ul',
              items: [
                'প্রচেষ্টা আইটি কোনো বৈধ কারণ ছাড়াই নির্ধারিত সময়ে প্রজেক্ট ডেলিভার করতে ব্যর্থ হলে।',
                'ডেলিভার করা কাজ সম্মত স্পেসিফিকেশন পূরণ করতে ব্যর্থ হলে এবং ৩০ দিনের ওয়ারেন্টিতে সংশোধন করা না গেলে।',
                'কাজ শুরুর আগে প্রজেক্ট বাতিল করলে — অগ্রিম পেমেন্ট সম্পূর্ণ ফেরত দেওয়া হবে।',
                'ভুলবশত ডুপ্লিকেট পেমেন্ট করলে।',
              ],
            },
          ],
        },
        {
          id: 'non-refundable',
          title: '৩. অফেরতযোগ্য ক্ষেত্র',
          blocks: [
            {
              type: 'p',
              text: 'নিচের পরিস্থিতিতে রিফান্ড দেওয়া হবে না:',
            },
            {
              type: 'ul',
              items: [
                'কাজ শুরু হওয়ার পর মত পরিবর্তন।',
                'ক্লায়েন্টের কারণে বিলম্ব — দেরিতে কন্টেন্ট জমা, অসাড়তা বা স্কোপ পরিবর্তন।',
                'সম্মত ডিজাইন ব্রিফের সাথে সামঞ্জস্যপূর্ণ নান্দনিক পছন্দে অসন্তুষ্টি।',
                'ক্লায়েন্টের পক্ষে পরিশোধিত তৃতীয় পক্ষের ফি (ডোমেইন, হোস্টিং, এপিআই লাইসেন্স)।',
                'ক্লায়েন্ট চূড়ান্ত ডেলিভারেবল গ্রহণ করেছেন এমন প্রজেক্ট।',
              ],
            },
          ],
        },
        {
          id: 'process',
          title: '৪. রিফান্ড অনুরোধ প্রক্রিয়া',
          blocks: [
            {
              type: 'p',
              text: 'রিফান্ড অনুরোধ করতে নিচের ধাপ অনুসরণ করুন:',
            },
            {
              type: 'ul',
              items: [
                '"রিফান্ড অনুরোধ — [প্রজেক্টের নাম]" বিষয় লিখে support@prochestait.com এ ইমেইল করুন।',
                'প্রজেক্ট রেফারেন্স নম্বর, পরিশোধিত পরিমাণ এবং কারণ উল্লেখ করুন।',
                'সহায়ক ডকুমেন্টেশন (ইনভয়েস, যোগাযোগের রেকর্ড, স্ক্রিনশট) সংযুক্ত করুন।',
              ],
            },
            {
              type: 'p',
              text: 'আমরা ২ কার্যদিবসের মধ্যে আপনার অনুরোধ স্বীকার করব এবং ১০ কার্যদিবসের মধ্যে লিখিত সমাধান প্রদান করব।',
            },
          ],
        },
        {
          id: 'timeline',
          title: '৫. রিফান্ড টাইমলাইন',
          blocks: [
            {
              type: 'p',
              text: 'অনুমোদিত রিফান্ড মূল পেমেন্ট পদ্ধতিতে (ব্যাংক ট্রান্সফার বা মোবাইল ব্যাংকিং) ৭–১৪ কার্যদিবসের মধ্যে প্রক্রিয়া করা হয়।',
            },
          ],
        },
        {
          id: 'contact',
          title: '৬. যোগাযোগ',
          blocks: [
            {
              type: 'ul',
              items: [
                'ইমেইল: support@prochestait.com',
                'ফোন / হোয়াটসঅ্যাপ: ০১৭২৬-৭২৪৩০০',
                'অফিস সময়: শনিবার–বৃহস্পতিবার, সকাল ৯টা – সন্ধ্যা ৭টা',
              ],
            },
          ],
        },
      ],
    },
  },

  supportPolicy: {
    en: {
      eyebrow: 'Legal',
      title: 'Support Policy',
      description:
        "We stand behind every project we ship. Here's what you can expect from our post-delivery support — response times, coverage, and how to reach us.",
      updated: 'Last updated: June 10, 2026',
      sections: [
        {
          id: 'included',
          title: "1. What's Included with Every Project",
          blocks: [
            {
              type: 'p',
              text: 'Every project delivered by Prochesta IT includes a complimentary 30-day post-launch bug-fix period. During this window, we resolve defects in the delivered functionality at no extra charge. A "defect" is defined as behaviour that contradicts the agreed specifications.',
            },
          ],
        },
        {
          id: 'tiers',
          title: '2. Support Tiers',
          blocks: [
            {
              type: 'table',
              headers: ['Tier', 'Included', 'Development Hours', 'Response SLA'],
              rows: [
                ['Free Bug-Fix (30 days)', 'All deliveries', '—', 'Next business day'],
                ['Basic', 'Monthly subscription', 'Up to 2 hrs/mo', '1 business day'],
                ['Standard', 'Monthly subscription', 'Up to 5 hrs/mo', '8 business hours'],
                ['Premium', 'Monthly subscription', 'Unlimited minor changes', '4 hours'],
              ],
            },
            {
              type: 'p',
              text: 'Premium support also includes a dedicated account manager, weekly status calls, and SLA-backed uptime monitoring. Contact us for current pricing on support packages.',
            },
          ],
        },
        {
          id: 'response-times',
          title: '3. Response Time Commitments',
          blocks: [
            {
              type: 'table',
              headers: ['Severity', 'Definition', 'First Response', 'Resolution Target'],
              rows: [
                ['Critical', 'Site down / payment failure', '2 hours', '8 hours'],
                ['Major', 'Key feature broken, data loss risk', '4 hours', '24 hours'],
                ['Minor', 'Feature misbehaving, cosmetic issue', '1 business day', '3 business days'],
                ['Change Request', 'New feature or content update', '1 business day', 'Scoped separately'],
              ],
            },
            {
              type: 'p',
              text: 'Response times are measured during business hours: Saturday–Thursday, 9:00 AM – 7:00 PM Bangladesh Standard Time (BST).',
            },
          ],
        },
        {
          id: 'out-of-scope',
          title: '4. Out-of-Scope Work',
          blocks: [
            {
              type: 'p',
              text: 'Support packages — including the free bug-fix period — do not cover the following:',
            },
            {
              type: 'ul',
              items: [
                'New features or modules not included in the original project scope.',
                'Content updates that require significant restructuring (e.g. redesigning a page layout).',
                'Third-party platform updates (payment gateways, hosting provider migrations, API version changes).',
                'Data migration from one platform or database to another.',
                'Training or documentation for new staff members.',
                'Issues arising from client-side code modifications after handover.',
              ],
            },
            {
              type: 'p',
              text: 'Out-of-scope work will be quoted and billed separately at our standard hourly rate.',
            },
          ],
        },
        {
          id: 'escalation',
          title: '5. Escalation Process',
          blocks: [
            {
              type: 'p',
              text: 'If your issue is not resolved within the committed timeframe, please escalate immediately:',
            },
            {
              type: 'ul',
              items: [
                'Email escalations@prochestait.com with your ticket number and a brief description of the issue.',
                'Our management team will personally follow up within 4 business hours.',
              ],
            },
          ],
        },
        {
          id: 'contact',
          title: '6. How to Reach Us',
          blocks: [
            {
              type: 'table',
              headers: ['Channel', 'Contact', 'Best For'],
              rows: [
                ['WhatsApp', '+880 1726-724300', 'Urgent issues & quick queries'],
                ['Email', 'support@prochestait.com', 'Bug reports & change requests'],
                ['Phone', '01726-724300', 'Critical escalations'],
              ],
            },
          ],
        },
      ],
    },
    bn: {
      eyebrow: 'আইনি তথ্য',
      title: 'সাপোর্ট পলিসি',
      description:
        'আমরা প্রতিটি প্রজেক্টের পেছনে থাকি। ডেলিভারি পরবর্তী সাপোর্ট — রেসপন্স টাইম, কভারেজ এবং যোগাযোগের তথ্য এখানে দেওয়া আছে।',
      updated: 'সর্বশেষ আপডেট: ১০ জুন ২০২৬',
      sections: [
        {
          id: 'included',
          title: '১. প্রতিটি প্রজেক্টে যা অন্তর্ভুক্ত',
          blocks: [
            {
              type: 'p',
              text: 'প্রচেষ্টা আইটিের প্রতিটি ডেলিভারির সাথে বিনামূল্যে ৩০ দিনের পোস্ট-লঞ্চ বাগ-ফিক্স সময়কাল অন্তর্ভুক্ত। এই সময়ে সম্মত স্পেসিফিকেশনের বিপরীতে কার্যক্ষমতার ত্রুটিগুলো বিনা চার্জে সমাধান করা হয়।',
            },
          ],
        },
        {
          id: 'tiers',
          title: '২. সাপোর্ট স্তর',
          blocks: [
            {
              type: 'table',
              headers: ['স্তর', 'অন্তর্ভুক্ত', 'ডেভেলপমেন্ট ঘণ্টা', 'রেসপন্স এসএলএ'],
              rows: [
                ['বিনামূল্যে বাগ-ফিক্স (৩০ দিন)', 'সব ডেলিভারি', '—', 'পরবর্তী কার্যদিবস'],
                ['বেসিক', 'মাসিক সাবস্ক্রিপশন', 'মাসে ২ ঘণ্টা পর্যন্ত', '১ কার্যদিবস'],
                ['স্ট্যান্ডার্ড', 'মাসিক সাবস্ক্রিপশন', 'মাসে ৫ ঘণ্টা পর্যন্ত', '৮ কার্যঘণ্টা'],
                ['প্রিমিয়াম', 'মাসিক সাবস্ক্রিপশন', 'সীমাহীন ছোট পরিবর্তন', '৪ ঘণ্টা'],
              ],
            },
            {
              type: 'p',
              text: 'প্রিমিয়াম সাপোর্টে ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার, সাপ্তাহিক স্ট্যাটাস কল এবং আপটাইম মনিটরিং অন্তর্ভুক্ত। বর্তমান মূল্যের জন্য আমাদের সাথে যোগাযোগ করুন।',
            },
          ],
        },
        {
          id: 'response-times',
          title: '৩. রেসপন্স টাইম প্রতিশ্রুতি',
          blocks: [
            {
              type: 'table',
              headers: ['গুরুত্ব', 'সংজ্ঞা', 'প্রথম রেসপন্স', 'সমাধানের লক্ষ্য'],
              rows: [
                ['ক্রিটিকাল', 'সাইট ডাউন / পেমেন্ট ব্যর্থতা', '২ ঘণ্টা', '৮ ঘণ্টা'],
                ['মেজর', 'মূল ফিচার বিকল, ডেটা ক্ষতির ঝুঁকি', '৪ ঘণ্টা', '২৪ ঘণ্টা'],
                ['মাইনর', 'ফিচার অসুবিধা, ভিজ্যুয়াল সমস্যা', '১ কার্যদিবস', '৩ কার্যদিবস'],
                ['পরিবর্তন অনুরোধ', 'নতুন ফিচার বা কন্টেন্ট আপডেট', '১ কার্যদিবস', 'আলাদাভাবে স্কোপ করা হবে'],
              ],
            },
            {
              type: 'p',
              text: 'রেসপন্স টাইম অফিস সময়ে গণনা করা হয়: শনিবার–বৃহস্পতিবার, সকাল ৯টা – সন্ধ্যা ৭টা।',
            },
          ],
        },
        {
          id: 'out-of-scope',
          title: '৪. স্কোপের বাইরের কাজ',
          blocks: [
            {
              type: 'p',
              text: 'সাপোর্ট প্যাকেজ — বিনামূল্যে বাগ-ফিক্স সহ — নিচের বিষয়গুলো কভার করে না:',
            },
            {
              type: 'ul',
              items: [
                'মূল প্রজেক্ট স্কোপে না থাকা নতুন ফিচার বা মডিউল।',
                'উল্লেখযোগ্য পুনর্গঠন প্রয়োজন এমন কন্টেন্ট আপডেট।',
                'তৃতীয় পক্ষের প্ল্যাটফর্ম আপডেট (পেমেন্ট গেটওয়ে, হোস্টিং মাইগ্রেশন)।',
                'এক প্ল্যাটফর্ম থেকে অন্যত্র ডেটা মাইগ্রেশন।',
                'নতুন কর্মীদের জন্য প্রশিক্ষণ বা ডকুমেন্টেশন।',
                'হ্যান্ডওভারের পর ক্লায়েন্ট-সাইড কোড পরিবর্তন থেকে উদ্ভূত সমস্যা।',
              ],
            },
          ],
        },
        {
          id: 'escalation',
          title: '৫. এস্কেলেশন প্রক্রিয়া',
          blocks: [
            {
              type: 'p',
              text: 'নির্ধারিত সময়ের মধ্যে সমস্যা সমাধান না হলে:',
            },
            {
              type: 'ul',
              items: [
                'আপনার টিকিট নম্বর এবং সমস্যার বিবরণ সহ escalations@prochestait.com এ ইমেইল করুন।',
                'আমাদের ম্যানেজমেন্ট টিম ৪ কার্যঘণ্টার মধ্যে ব্যক্তিগতভাবে ফলো-আপ করবে।',
              ],
            },
          ],
        },
        {
          id: 'contact',
          title: '৬. যোগাযোগের মাধ্যম',
          blocks: [
            {
              type: 'table',
              headers: ['মাধ্যম', 'যোগাযোগ', 'সবচেয়ে ভালো ব্যবহার'],
              rows: [
                ['হোয়াটসঅ্যাপ', '+৮৮০ ১৭২৬-৭২৪৩০০', 'জরুরি সমস্যা ও দ্রুত প্রশ্ন'],
                ['ইমেইল', 'support@prochestait.com', 'বাগ রিপোর্ট ও পরিবর্তন অনুরোধ'],
                ['ফোন', '০১৭২৬-৭২৪৩০০', 'ক্রিটিকাল এস্কেলেশন'],
              ],
            },
          ],
        },
      ],
    },
  },

  privacyPolicy: {
    en: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      description:
        'We take your privacy seriously. This policy explains what data we collect, how we use it, and your rights — in plain language.',
      updated: 'Last updated: June 10, 2026',
      sections: [
        {
          id: 'data-collected',
          title: '1. Information We Collect',
          blocks: [
            {
              type: 'p',
              text: 'We collect information in three ways:',
            },
            {
              type: 'ul',
              items: [
                'Directly from you: name, email address, phone number, and company details submitted via our contact forms, quote requests, or project agreements.',
                'Automatically: IP address, browser type, device information, pages visited, and time spent on our website — collected via analytics tools.',
                'From communications: emails, WhatsApp messages, and call notes related to your project or enquiry.',
              ],
            },
          ],
        },
        {
          id: 'data-use',
          title: '2. How We Use Your Data',
          blocks: [
            {
              type: 'p',
              text: 'We use your information to:',
            },
            {
              type: 'ul',
              items: [
                'Respond to your enquiries and deliver our services.',
                'Send project updates, invoices, and support communications.',
                'Send occasional promotional content about our services (you can unsubscribe at any time).',
                'Improve our website and services using aggregated analytics data.',
                'Comply with legal and regulatory obligations.',
              ],
            },
          ],
        },
        {
          id: 'data-sharing',
          title: '3. Data Sharing & Third Parties',
          blocks: [
            {
              type: 'p',
              text: 'We do not sell, rent, or trade your personal data. We may share information with:',
            },
            {
              type: 'ul',
              items: [
                'Trusted service providers (hosting, email delivery, analytics) who are contractually bound to confidentiality.',
                'Legal authorities if required by law or to protect our rights and the safety of others.',
              ],
            },
            {
              type: 'p',
              text: "We use Google Analytics for website analytics. Data collected by Google is subject to Google's Privacy Policy.",
            },
          ],
        },
        {
          id: 'security',
          title: '4. Data Security',
          blocks: [
            {
              type: 'p',
              text: 'We implement industry-standard security measures including SSL/TLS encryption for all data in transit, access controls limiting data to authorised personnel, and regular security reviews. No method of electronic transmission or storage is 100% secure; we cannot guarantee absolute security but commit to taking all reasonable precautions.',
            },
          ],
        },
        {
          id: 'cookies',
          title: '5. Cookies & Tracking',
          blocks: [
            {
              type: 'p',
              text: 'Our website uses:',
            },
            {
              type: 'ul',
              items: [
                'Essential cookies: required for the website to function correctly.',
                'Analytical cookies (Google Analytics): help us understand how visitors use our site.',
              ],
            },
            {
              type: 'p',
              text: 'You can disable cookies via your browser settings. Disabling analytical cookies will not affect core website functionality.',
            },
          ],
        },
        {
          id: 'retention',
          title: '6. Data Retention',
          blocks: [
            {
              type: 'p',
              text: 'We retain data for as long as necessary to provide our services and comply with legal obligations:',
            },
            {
              type: 'table',
              headers: ['Data Type', 'Retention Period'],
              rows: [
                ['Client project data', '5 years post project completion'],
                ['Contact / enquiry records', '2 years'],
                ['Invoice & payment records', '7 years (tax compliance)'],
                ['Website analytics', '26 months (Google Analytics default)'],
              ],
            },
          ],
        },
        {
          id: 'rights',
          title: '7. Your Rights',
          blocks: [
            {
              type: 'p',
              text: 'You have the right to:',
            },
            {
              type: 'ul',
              items: [
                'Access: request a copy of the personal data we hold about you.',
                'Correction: ask us to fix inaccurate or incomplete data.',
                'Deletion: request that we delete your personal data (subject to legal obligations).',
                'Objection: opt out of marketing communications at any time.',
              ],
            },
            {
              type: 'p',
              text: 'To exercise any of these rights, email privacy@prochestait.com. We will respond within 10 business days.',
            },
          ],
        },
        {
          id: 'changes',
          title: '8. Changes to This Policy',
          blocks: [
            {
              type: 'p',
              text: 'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will reflect the most recent revision. For significant changes, we will notify active clients directly.',
            },
          ],
        },
        {
          id: 'contact',
          title: '9. Contact Us',
          blocks: [
            {
              type: 'ul',
              items: [
                'Email: privacy@prochestait.com',
                'Address: House 23, Road 13, Sector-10, Uttara, Dhaka-1230',
                'Phone: 01726-724300',
              ],
            },
          ],
        },
      ],
    },
    bn: {
      eyebrow: 'আইনি তথ্য',
      title: 'প্রাইভেসি পলিসি',
      description:
        'আমরা আপনার গোপনীয়তাকে গুরুত্বের সাথে নিই। এই পলিসি ব্যাখ্যা করে আমরা কী ডেটা সংগ্রহ করি, কীভাবে ব্যবহার করি এবং আপনার অধিকার কী।',
      updated: 'সর্বশেষ আপডেট: ১০ জুন ২০২৬',
      sections: [
        {
          id: 'data-collected',
          title: '১. আমরা যে তথ্য সংগ্রহ করি',
          blocks: [
            {
              type: 'p',
              text: 'আমরা তিনটি উপায়ে তথ্য সংগ্রহ করি:',
            },
            {
              type: 'ul',
              items: [
                'সরাসরি আপনার কাছ থেকে: কন্টাক্ট ফর্ম, কোট অনুরোধ বা চুক্তির মাধ্যমে জমা দেওয়া নাম, ইমেইল, ফোন ও কোম্পানির তথ্য।',
                'স্বয়ংক্রিয়ভাবে: আইপি অ্যাড্রেস, ব্রাউজারের ধরন, ডিভাইস তথ্য এবং ওয়েবসাইট ভিজিটের তথ্য — অ্যানালিটিক্স টুলের মাধ্যমে।',
                'যোগাযোগ থেকে: আপনার প্রজেক্ট বা অনুসন্ধান সংক্রান্ত ইমেইল, হোয়াটসঅ্যাপ এবং কলের নোট।',
              ],
            },
          ],
        },
        {
          id: 'data-use',
          title: '২. ডেটা ব্যবহারের উদ্দেশ্য',
          blocks: [
            {
              type: 'p',
              text: 'আমরা আপনার তথ্য নিচের কাজে ব্যবহার করি:',
            },
            {
              type: 'ul',
              items: [
                'আপনার অনুসন্ধানের জবাব এবং সেবা প্রদান।',
                'প্রজেক্ট আপডেট, ইনভয়েস এবং সাপোর্ট যোগাযোগ পাঠানো।',
                'আমাদের সেবার প্রচারমূলক কন্টেন্ট পাঠানো (যেকোনো সময় আনসাবস্ক্রাইব করা যাবে)।',
                'একত্রিত অ্যানালিটিক্স ডেটা ব্যবহার করে ওয়েবসাইট ও সেবা উন্নত করা।',
                'আইনি ও নিয়ন্ত্রক বাধ্যবাধকতা পালন করা।',
              ],
            },
          ],
        },
        {
          id: 'data-sharing',
          title: '৩. ডেটা শেয়ারিং',
          blocks: [
            {
              type: 'p',
              text: 'আমরা আপনার ব্যক্তিগত তথ্য বিক্রি বা ভাড়া দিই না। শুধুমাত্র নিচের ক্ষেত্রে তথ্য শেয়ার হতে পারে:',
            },
            {
              type: 'ul',
              items: [
                'বিশ্বস্ত সেবা প্রদানকারী (হোস্টিং, ইমেইল, অ্যানালিটিক্স) যারা গোপনীয়তা চুক্তিতে আবদ্ধ।',
                'আইনি কর্তৃপক্ষের কাছে, যদি আইন দ্বারা প্রয়োজন হয়।',
              ],
            },
          ],
        },
        {
          id: 'security',
          title: '৪. ডেটা সুরক্ষা',
          blocks: [
            {
              type: 'p',
              text: 'আমরা ট্রানজিটের সমস্ত ডেটার জন্য SSL/TLS এনক্রিপশন, অ্যাক্সেস নিয়ন্ত্রণ এবং নিয়মিত নিরাপত্তা পর্যালোচনাসহ শিল্প-মানের নিরাপত্তা ব্যবস্থা ব্যবহার করি। কোনো ইলেকট্রনিক পদ্ধতি ১০০% নিরাপদ নয়, তবে আমরা যুক্তিসঙ্গত সমস্ত সতর্কতা নেওয়ার প্রতিশ্রুতি দিই।',
            },
          ],
        },
        {
          id: 'cookies',
          title: '৫. কুকি ও ট্র্যাকিং',
          blocks: [
            {
              type: 'p',
              text: 'আমাদের ওয়েবসাইট ব্যবহার করে:',
            },
            {
              type: 'ul',
              items: [
                'অপরিহার্য কুকি: ওয়েবসাইটের সঠিক কার্যক্ষমতার জন্য প্রয়োজন।',
                'বিশ্লেষণমূলক কুকি (Google Analytics): দর্শকরা কীভাবে সাইট ব্যবহার করেন তা বুঝতে সাহায্য করে।',
              ],
            },
            {
              type: 'p',
              text: 'ব্রাউজার সেটিংসে কুকি অক্ষম করা যাবে। বিশ্লেষণমূলক কুকি অক্ষম করলে মূল ওয়েবসাইটের কার্যক্ষমতা প্রভাবিত হবে না।',
            },
          ],
        },
        {
          id: 'retention',
          title: '৬. ডেটা সংরক্ষণ',
          blocks: [
            {
              type: 'table',
              headers: ['ডেটার ধরন', 'সংরক্ষণ সময়কাল'],
              rows: [
                ['ক্লায়েন্ট প্রজেক্ট ডেটা', 'প্রজেক্ট সম্পন্নের ৫ বছর পর'],
                ['যোগাযোগ / অনুসন্ধান রেকর্ড', '২ বছর'],
                ['ইনভয়েস ও পেমেন্ট রেকর্ড', '৭ বছর (কর আইন মেনে)'],
                ['ওয়েবসাইট অ্যানালিটিক্স', '২৬ মাস'],
              ],
            },
          ],
        },
        {
          id: 'rights',
          title: '৭. আপনার অধিকার',
          blocks: [
            {
              type: 'p',
              text: 'আপনার অধিকার আছে:',
            },
            {
              type: 'ul',
              items: [
                'অ্যাক্সেস: আমরা আপনার সম্পর্কে যে ডেটা রাখি তার একটি কপি চাইতে।',
                'সংশোধন: ভুল বা অসম্পূর্ণ ডেটা ঠিক করতে বলার।',
                'মুছে ফেলা: আপনার ব্যক্তিগত ডেটা মুছে দিতে অনুরোধ করার।',
                'আপত্তি: যেকোনো সময় মার্কেটিং যোগাযোগ থেকে অপ্ট-আউট করার।',
              ],
            },
            {
              type: 'p',
              text: 'এই অধিকারগুলো প্রয়োগ করতে privacy@prochestait.com এ ইমেইল করুন। আমরা ১০ কার্যদিবসের মধ্যে জবাব দেব।',
            },
          ],
        },
        {
          id: 'changes',
          title: '৮. পলিসি পরিবর্তন',
          blocks: [
            {
              type: 'p',
              text: 'আমরা সময়ে সময়ে এই প্রাইভেসি পলিসি আপডেট করতে পারি। এই পেজের শীর্ষে "সর্বশেষ আপডেট" তারিখ সাম্প্রতিক সংশোধন প্রতিফলিত করবে।',
            },
          ],
        },
        {
          id: 'contact',
          title: '৯. যোগাযোগ',
          blocks: [
            {
              type: 'ul',
              items: [
                'ইমেইল: privacy@prochestait.com',
                'ঠিকানা: বাড়ি ২৩, রোড ১৩, সেক্টর-১০, উত্তরা, ঢাকা-১২৩০',
                'ফোন: ০১৭২৬-৭২৪৩০০',
              ],
            },
          ],
        },
      ],
    },
  },
};
