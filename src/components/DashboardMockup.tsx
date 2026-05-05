"use client";

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-[560px] rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <span className="text-sm font-bold text-[#111111]">Sunrise Ranch</span>
        <span className="text-[10px] font-medium bg-[#FEF3C7] text-[#B07D2B] px-2.5 py-1 rounded-full">
          3 tasks pending
        </span>
      </div>

      {/* Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Card 1 */}
        <div className="border-l-3 border-l-[#1B4332] bg-gray-50 rounded-md p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#111111]">Batch #7</span>
            <span className="text-[9px] font-medium text-[#111111]">Active</span>
          </div>
          <p className="text-[10px] text-[#9CA3AF] mb-2">pH: 4.5 · Day 23 of 60</p>
          <span className="inline-block text-[9px] font-medium bg-[#E8F5EE] text-[#1B4332] px-2 py-0.5 rounded-full mb-1.5">
            Agent working
          </span>
          <p className="text-[9px] text-[#9CA3AF] leading-relaxed">
            Analysing lab result against Texas E. coli threshold
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-3 border-l-[#1B4332] bg-gray-50 rounded-md p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#111111]">FDA Filing</span>
            <span className="text-[9px] font-medium text-[#111111]">Due in 14 days</span>
          </div>
          <span className="inline-block text-[9px] font-medium bg-[#E8F5EE] text-[#1B4332] px-2 py-0.5 rounded-full mb-1.5">
            Auto-filing
          </span>
          <p className="text-[9px] text-[#9CA3AF] leading-relaxed">
            Form pre-filled. Review before submission.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-l-3 border-l-[#1B4332] bg-gray-50 rounded-md p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#111111]">State Reg.</span>
            <span className="text-[9px] font-medium text-[#111111]">Ohio</span>
          </div>
          <span className="inline-block text-[9px] font-medium bg-[#FEF3C7] text-[#B07D2B] px-2 py-0.5 rounded-full mb-1.5">
            Action needed
          </span>
          <p className="text-[9px] text-[#9CA3AF] leading-relaxed">
            Form updated March 2025. Agent flagged for your review.
          </p>
        </div>
      </div>

      {/* Agent Activity Log */}
      <div className="px-5 pb-4">
        <h4 className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">
          Recent Agent Activity
        </h4>
        <div className="flex flex-col gap-1.5">
          {[
            { icon: "check", text: "Lab result received — Batch #7", time: "2 hours ago" },
            { icon: "check", text: "E. coli threshold checked — Texas guidelines", time: "2 hours ago" },
            { icon: "check", text: "FDA pre-harvest interval calculated", time: "1 hour ago" },
            { icon: "pending", text: "State fertilizer registration — Ohio", time: "In progress" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-[10px]">
              <span className={item.icon === "check" ? "text-[#1B4332]" : "text-[#B07D2B]"}>
                {item.icon === "check" ? "✓" : "⏳"}
              </span>
              <span className="text-[#374151] flex-1">{item.text}</span>
              <span className="text-[#9CA3AF] shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
