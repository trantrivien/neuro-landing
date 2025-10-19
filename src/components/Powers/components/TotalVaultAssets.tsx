const BarVisualization = ({ reversed = false }: { reversed?: boolean }) => {
  const bars = Array.from({ length: 30 }, (_, i) => ({
    key: i,
    height: Math.random() > 0.5 ? 69 : 69 * 0.6,
    gradient: Math.random() > 0.5,
  }));

  return (
    <div className="h-[69px] w-full flex items-end justify-between gap-[6px]">
      {bars.map((bar) => (
        <div
          key={bar.key}
          className="w-[7px] rounded-[20px] transition-all"
          style={{
            height: `${bar.height}px`,
            background: bar.gradient
              ? "linear-gradient(180deg, #A5A5A5 0%, rgba(149, 149, 149, 0) 100%)"
              : "#C4C4C4",
          }}
        />
      ))}
    </div>
  );
};

export default function TotalVaultAssets() {
  return (
    <div className="w-full max-w-[424px]">
      <div
        className="rounded-2xl p-4 border border-[#C4C4C4] flex flex-col gap-8"
        style={{
          background: "rgba(140, 140, 140, 0.34)",
          backdropFilter: "blur(12.5px)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#3D99F5] text-lg font-semibold">
            Total Vault Assets
          </h3>
          <p className="text-[#F7F7F7] text-3xl font-medium tracking-tight">
            $6,222.93
          </p>
        </div>

        {/* xUSD Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.80006 3.4C6.46869 2.95817 5.84189 2.86863 5.40006 3.2C4.95823 3.53137 4.86869 4.15817 5.20006 4.6L10.7501 12L12.0001 10.3333L6.80006 3.4ZM13.2501 12L12.0001 13.6667L17.2001 20.6C17.5314 21.0418 18.1582 21.1314 18.6001 20.8C19.0419 20.4686 19.1314 19.8418 18.8001 19.4L13.2501 12Z"
                    fill="black"
                  />
                  <path
                    opacity="0.5"
                    d="M17.2001 3.40006L12.0001 10.3334L10.7501 12.0001L5.20006 19.4001C4.86869 19.8419 4.95823 20.4687 5.40006 20.8001C5.84189 21.1314 6.46869 21.0419 6.80006 20.6001L12.0001 13.6667L13.2501 12.0001L18.8001 4.60006C19.1314 4.15823 19.0419 3.53143 18.6001 3.20006C18.1582 2.86869 17.5314 2.95823 17.2001 3.40006Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#F7F7F7] text-lg font-semibold">
                  xUSD
                </span>
                <span
                  className="text-lg"
                  style={{
                    background:
                      "linear-gradient(109deg, #9BBDFF 13.01%, #D5B696 96.14%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  NAV
                </span>
              </div>
            </div>
            <span className="text-[#F7F7F7] text-lg font-semibold">
              $3,271.20
            </span>
          </div>
          <BarVisualization />
        </div>

        {/* nUSD Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 4.5C20 3.94772 19.5523 3.5 19 3.5C18.4477 3.5 18 3.94772 18 4.5V17.3386V20.0894C18.9055 20.4093 20 19.7752 20 18.6693V4.5ZM6 6.66145V3.91061C5.09453 3.59068 4 4.22482 4 5.33072V19.5C4 20.0523 4.44772 20.5 5 20.5C5.55228 20.5 6 20.0523 6 19.5V6.66145Z"
                    fill="black"
                  />
                  <path
                    opacity="0.5"
                    d="M6 6.66149L17.3711 19.6571C17.555 19.8671 17.7715 20.0087 18 20.0894V17.3386L6.62887 4.34301C6.44505 4.13293 6.22855 3.9914 6 3.91064V6.66149Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#F7F7F7] text-lg font-semibold">
                  nUSD
                </span>
                <span
                  className="text-lg"
                  style={{
                    background:
                      "linear-gradient(109deg, #9BBDFF 13.01%, #D5B696 96.14%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Claimable Shares
                </span>
              </div>
            </div>
            <span className="text-[#F7F7F7] text-lg font-semibold">
              $2,951.73
            </span>
          </div>
          <BarVisualization reversed />
        </div>
      </div>
    </div>
  );
}
