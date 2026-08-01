export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-8rem)] w-full items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Blue Spinner */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute h-full w-full animate-spin rounded-full border-4 border-sky-200 border-t-[#1868cd]" />
          <div className="h-6 w-6 rounded-full bg-[#1868cd]/20" />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-base font-semibold text-slate-700 tracking-wide">
            Loading Dashboard...
          </p>
          <p className="text-xs text-slate-400">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
}
