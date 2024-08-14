import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p className="flex items-center">
        Made with&nbsp;<span><HeartIcon className="h-4 w-4 text-red-900" /></span>&nbsp;by Nezle Fe Doncillo.
      </p>
    </footer>
  );
}
