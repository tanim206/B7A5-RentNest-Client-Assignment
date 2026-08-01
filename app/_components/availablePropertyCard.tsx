// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Check, MapPin, Tag, ShieldCheck, Gift } from "lucide-react";
// import { IProperty } from "@/lib/types";

// type Props = {
//   property?: IProperty; // ? যোগ করে optional করা হয়েছে
// };

// export default function AvailablePropertyCard({ property }: Props) {
//   // প্রপার্টি না থাকলে বা 'AVAILABLE' না হলে রেন্ডার হবে না
//   if (
//     !property ||
//     property?.availabilityStatus?.toUpperCase() !== "AVAILABLE"
//   ) {
//     return null;
//   }

//   return (
//     <Card className="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//       <CardContent className="flex flex-col justify-between p-6 sm:p-8 space-y-6">
//         {/* Header Section: Title & Short Description */}
//         <div className="text-center space-y-2">
//           <h3 className="text-2xl font-bold text-slate-900 line-clamp-1">
//             {property.title}
//           </h3>
//           <p className="text-xs text-slate-500 line-clamp-2 max-w-xs mx-auto leading-relaxed">
//             {property.description}
//           </p>
//         </div>

//         {/* Pricing & Offer Tag */}
//         <div className="text-center space-y-1 py-3 border-y border-slate-100">
//           <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             ৳ {property.price?.toLocaleString()}
//           </div>
//           <div className="text-xs font-medium text-slate-400">/ monthly</div>

//           {/* Badge Tag Style */}
//           <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
//             <Gift size={13} className="text-emerald-500" />
//             <span>Ready To Rent</span>
//           </div>
//         </div>

//         {/* Property Features / Checklist */}
//         <div className="space-y-3 py-1 text-xs text-slate-600 font-medium">
//           <div className="flex items-center gap-2.5">
//             <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
//               <Check size={12} strokeWidth={3} />
//             </div>
//             <span className="truncate flex items-center gap-1">
//               <MapPin size={13} className="text-slate-400 shrink-0" />
//               {property.location}
//             </span>
//           </div>

//           <div className="flex items-center gap-2.5">
//             <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
//               <Check size={12} strokeWidth={3} />
//             </div>
//             <span className="truncate flex items-center gap-1">
//               <Tag size={13} className="text-slate-400 shrink-0" />
//               Category: {property.propertyType}
//             </span>
//           </div>

//           <div className="flex items-center gap-2.5">
//             <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
//               <Check size={12} strokeWidth={3} />
//             </div>
//             <span className="truncate flex items-center gap-1">
//               <ShieldCheck size={13} className="text-slate-400 shrink-0" />
//               Verified & Secure Listing
//             </span>
//           </div>
//         </div>

//         {/* Bottom Dark CTA Button */}
//         <Button
//           asChild
//           className="w-full rounded-xl bg-[#1868cd] hover:bg-slate-900 text-white font-semibold py-6 text-sm shadow-md transition-all duration-300"
//         >
//           <Link href={`/properties/${property.id}`}>Details</Link>
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }
