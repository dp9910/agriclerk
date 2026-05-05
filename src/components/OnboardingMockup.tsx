"use client";

export default function OnboardingMockup() {
  return (
    <div className="w-full max-w-[520px] rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
      <div className="flex h-[380px] md:h-[420px]">
        {/* Sidebar */}
        <div className="w-[160px] bg-[#1B4332] p-5 flex flex-col gap-1 shrink-0">
          <div className="text-white font-bold text-sm mb-6 tracking-tight">AgriClerk</div>
          {["Dashboard", "Lab Results", "Compliance", "Documents", "Settings"].map(
            (item, i) => (
              <div
                key={item}
                className={`text-xs px-3 py-2 rounded-md cursor-default ${
                  i === 0
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 bg-white p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-[#111111] font-bold text-lg mb-1">
            Welcome to AgriClerk
          </h3>
          <p className="text-[#9CA3AF] text-xs mb-6">
            Let&apos;s set up your farm profile
          </p>

          <div className="flex flex-col gap-3 mb-5">
            <div>
              <label className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider block mb-1">
                Farm name
              </label>
              <div className="border border-gray-200 rounded-md px-3 py-2 text-sm text-[#9CA3AF] bg-gray-50">
                Sunrise Ranch
              </div>
            </div>
            <div>
              <label className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider block mb-1">
                State
              </label>
              <div className="border border-gray-200 rounded-md px-3 py-2 text-sm text-[#9CA3AF] bg-gray-50">
                Texas
              </div>
            </div>
            <div>
              <label className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider block mb-1">
                Herd size
              </label>
              <div className="border border-gray-200 rounded-md px-3 py-2 text-sm text-[#9CA3AF] bg-gray-50">
                2,400 head
              </div>
            </div>
          </div>

          <button className="bg-[#1B4332] text-white text-sm font-semibold rounded-md px-5 py-2.5 w-full hover:bg-[#143728] transition-colors cursor-default">
            Get Started
          </button>
          <p className="text-[9px] text-[#9CA3AF] mt-3 leading-relaxed">
            AgriClerk will personalise your compliance dashboard based on your
            profile.
          </p>
        </div>
      </div>
    </div>
  );
}
