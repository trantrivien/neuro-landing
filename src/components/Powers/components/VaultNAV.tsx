export default function VaultNAV() {
  return (
    <div className="w-full max-w-[313px]">
      <div
        className="rounded-2xl p-4 border border-[#C4C4C4] flex flex-col gap-8"
        style={{
          background: "rgba(140, 140, 140, 0.34)",
          backdropFilter: "blur(12.5px)",
        }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-[#3D99F5] text-lg font-semibold">
            xUSD [Vault NAV]
          </h3>
          <p className="text-[#F7F7F7] text-3xl font-medium tracking-tight">
            $3,271.20
          </p>
        </div>

        {/* Simple area chart visualization */}
        <div className="h-32 w-full bg-gradient-to-b from-gray-600/30 to-gray-800/10 rounded-lg flex items-end px-2 pb-2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 280 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6B7280" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#374151" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 L0,80 L35,70 L70,65 L105,55 L140,50 L175,45 L210,40 L245,35 L280,30 L280,100 Z"
              fill="url(#areaGradient)"
            />
            <path
              d="M0,80 L35,70 L70,65 L105,55 L140,50 L175,45 L210,40 L245,35 L280,30"
              stroke="#9CA3AF"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
