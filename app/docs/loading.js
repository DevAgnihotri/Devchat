import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" className="text-indigo-500" />
        <p className="text-white/70 text-lg">Loading documentation...</p>
      </div>
    </div>
  );
}
