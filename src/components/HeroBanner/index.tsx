import Button from "../ui/Button";
function HeroBanner() {
  return (
    <div className=" min-h-[1116px]">
      <img
        src={"/herobanner.png"}
        alt="Neurovault"
        className="w-full absolute top-0 z-[-1] min-h-[1116px] max-h-[1500px]"
      />
      <div className="container flex flex-col justify-center items-center mt-25">
        <span className="typography-body1 bg-[#8C8C8C57] px-4 py-2 rounded-full" >
          Welcome to NeroVault
        </span>
        <h2 className="typography-h2 text-gradient-01 mt-6">
          Deposit, redeem, and grow
          <br />
          your stable assets
        </h2>

        <p className="max-w-[637px] text-center typography-body1 text-[#C4C4C4] my-10">
          NeroVault is a next-gen ERC4626 vault with async redemption, fee
          routing, and full NAV tracking via dual-token architecture (nUSD &
          xUSD).
        </p>
        <Button text="Launch Vault" />
      </div>
    </div>
  );
}

export default HeroBanner;
