export default function RedemptionPaths() {
  return (
    <div className="w-full max-w-[313px]">
      <div
        className="rounded-2xl p-4 border border-[#C4C4C4] flex flex-col gap-8"
        style={{
          background: "rgba(140, 140, 140, 0.34)",
          backdropFilter: "blur(12.5px)",
        }}
      >
        <h3 className="text-[#3D99F5] text-2xl font-medium tracking-tight">
          Redemption Paths
        </h3>

        <div className="relative flex flex-col gap-4">
          {/* Instant Redeem */}
          <div
            className="rounded-full p-4 border border-[#C4C4C4] flex items-center gap-6"
            style={{
              background: "rgba(140, 140, 140, 0.34)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0">
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
                  Instant Redeem
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
                  nUSD
                </span>
              </div>
            </div>
          </div>

          {/* Swap Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center z-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 8.5V18.25C25 18.6478 24.842 19.0294 24.5607 19.3107C24.2794 19.592 23.8978 19.75 23.5 19.75H13.3103L14.2806 20.7194C14.3503 20.7891 14.4056 20.8718 14.4433 20.9628C14.481 21.0539 14.5004 21.1515 14.5004 21.25C14.5004 21.3485 14.481 21.4461 14.4433 21.5372C14.4056 21.6282 14.3503 21.7109 14.2806 21.7806C14.2109 21.8503 14.1282 21.9056 14.0372 21.9433C13.9461 21.981 13.8485 22.0004 13.75 22.0004C13.6515 22.0004 13.5539 21.981 13.4628 21.9433C13.3718 21.9056 13.2891 21.8503 13.2194 21.7806L10.9694 19.5306C10.8996 19.461 10.8443 19.3783 10.8066 19.2872C10.7688 19.1962 10.7494 19.0986 10.7494 19C10.7494 18.9014 10.7688 18.8038 10.8066 18.7128C10.8443 18.6217 10.8996 18.539 10.9694 18.4694L13.2194 16.2194C13.3601 16.0786 13.551 15.9996 13.75 15.9996C13.949 15.9996 14.1399 16.0786 14.2806 16.2194C14.4214 16.3601 14.5004 16.551 14.5004 16.75C14.5004 16.949 14.4214 17.1399 14.2806 17.2806L13.3103 18.25H23.5V8.5H13V9.25C13 9.44891 12.921 9.63968 12.7803 9.78033C12.6397 9.92098 12.4489 10 12.25 10C12.0511 10 11.8603 9.92098 11.7197 9.78033C11.579 9.63968 11.5 9.44891 11.5 9.25V8.5C11.5 8.10218 11.658 7.72064 11.9393 7.43934C12.2206 7.15804 12.6022 7 13 7H23.5C23.8978 7 24.2794 7.15804 24.5607 7.43934C24.842 7.72064 25 8.10218 25 8.5ZM19.75 22C19.5511 22 19.3603 22.079 19.2197 22.2197C19.079 22.3603 19 22.5511 19 22.75V23.5H8.5V13.75H18.6897L17.7194 14.7194C17.5786 14.8601 17.4996 15.051 17.4996 15.25C17.4996 15.449 17.5786 15.6399 17.7194 15.7806C17.8601 15.9214 18.051 16.0004 18.25 16.0004C18.449 16.0004 18.6399 15.9214 18.7806 15.7806L21.0306 13.5306C21.1004 13.461 21.1557 13.3783 21.1934 13.2872C21.2312 13.1962 21.2506 13.0986 21.2506 13C21.2506 12.9014 21.2312 12.8038 21.1934 12.7128C21.1557 12.6217 21.1004 12.539 21.0306 12.4694L18.7806 10.2194C18.6399 10.0786 18.449 9.99958 18.25 9.99958C18.051 9.99958 17.8601 10.0786 17.7194 10.2194C17.5786 10.3601 17.4996 10.551 17.4996 10.75C17.4996 10.949 17.5786 11.1399 17.7194 11.2806L18.6897 12.25H8.5C8.10218 12.25 7.72064 12.408 7.43934 12.6893C7.15804 12.9706 7 13.3522 7 13.75V23.5C7 23.8978 7.15804 24.2794 7.43934 24.5607C7.72064 24.842 8.10218 25 8.5 25H19C19.3978 25 19.7794 24.842 20.0607 24.5607C20.342 24.2794 20.5 23.8978 20.5 23.5V22.75C20.5 22.5511 20.421 22.3603 20.2803 22.2197C20.1397 22.079 19.9489 22 19.75 22Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="16"
                  y1="7"
                  x2="16"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9BBDFF" />
                  <stop offset="1" stopColor="#D5B696" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Async Redeem */}
          <div
            className="rounded-full p-4 border border-[#C4C4C4] flex items-center gap-6"
            style={{
              background: "rgba(140, 140, 140, 0.34)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0">
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
                  Async Redeem
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
                  xUSD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
