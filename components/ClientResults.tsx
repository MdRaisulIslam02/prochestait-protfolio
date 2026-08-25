// "use client";

// import React from "react";

// const ClientResults = () => {
//   const results = [
//     {
//       client: "Direct Malaysia",
//       title: "Facebook Ads + Creative Strategy",
//       desc: "L'Oréal ও অন্যান্য Malaysian products এর জন্য sales campaign চালিয়ে ৩× return এনেছি।",
//       stats: [
//         { val: "3.2×", lbl: "ROAS", color: "text-green-500" },
//         { val: "42%", lbl: "CTR ↑", color: "text-violet-600" },
//         { val: "৳4.8L", lbl: "Revenue/mo", color: "text-orange-500" },
//       ],
//       tags: ["Facebook Ads", "Creative", "Retargeting"],
//     },
//     {
//       client: "Hemonto Fashion",
//       title: "Pixel + CAPI Full Setup",
//       desc: "Laravel site এ browser-side + server-side tracking setup করে perfect purchase event tracking।",
//       stats: [
//         { val: "8.2", lbl: "EMQ Score", color: "text-green-500" },
//         { val: "0", lbl: "Duplicates", color: "text-violet-600" },
//         { val: "100%", lbl: "Match Rate", color: "text-orange-500" },
//       ],
//       tags: ["CAPI", "GTM", "Stape"],
//     },
//     {
//       client: "TrueBuy Malaysia",
//       title: "Page Growth + Message Campaigns",
//       desc: "Page like campaign থেকে শুরু করে message campaign — complete funnel manage করেছি।",
//       stats: [
//         { val: "+5K", lbl: "Followers", color: "text-green-500" },
//         { val: "↑60%", lbl: "Messages", color: "text-violet-600" },
//         { val: "৳2.1L", lbl: "FB Sales", color: "text-orange-500" },
//       ],
//       tags: ["Page Growth", "Inbox Sales", "Audience"],
//     },
//   ];

//   return (
//     <section id="results" className="bg-white py-20 px-4 md:px-[5%]">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto mb-16 text-center">
//         <div className="text-violet-600 font-semibold tracking-wide uppercase text-sm mb-2">
//           Client Results
//         </div>
//         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
//           Proven Results, Real Growth.
//         </h2>
//         <p className="text-slate-500 text-lg">
//           We don’t just chase clicks; we focus on scaling your revenue and driving measurable impact.
//         </p>
//       </div>

//       {/* Grid: Desktop-3, Tablet-2, Mobile-1 */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {results.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white border-2 border-slate-100 rounded-[20px] p-8 transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 flex flex-col"
//           >
//             <div className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">
//               {item.client}
//             </div>
//             <h3 className="font-bold text-xl text-slate-900 mb-6 leading-tight">
//               {item.title}
//             </h3>

//             <div className="flex gap-6 mb-6">
//               {item.stats.map((stat, i) => (
//                 <div key={i}>
//                   <div className={`font-sans text-2xl font-black ${stat.color}`}>
//                     {stat.val}
//                   </div>
//                   <div className="text-[0.7rem] text-slate-400 font-medium mt-1 uppercase">
//                     {stat.lbl}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <p className="text-sm text-slate-600 leading-relaxed flex-grow">
//               {item.desc}
//             </p>

//             <div className="flex flex-wrap gap-2 mt-8">
//               {item.tags.map((tag, t) => (
//                 <span
//                   key={t}
//                   className="bg-violet-50 text-violet-700 text-[0.7rem] font-bold px-4 py-1.5 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientResults;