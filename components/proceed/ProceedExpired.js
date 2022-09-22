import Link from "next/link";

const ProceedExpired = () => {
  return (
    <div className="border-2 border-stone-100 flex-[1] flex flex-col items-center justify-center gap-4 rounded-xl shadow-xl p-6">
      <h3 className="text-xl font-semibold">Make another order ?</h3>
      <Link href="/#signature">
        <button className="button bg-yellow">Go to menu</button>
      </Link>
    </div>
  );
};

export default ProceedExpired;
