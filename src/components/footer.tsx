import { GITHUB_URL } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="sticky top-full w-full h-[84px] bg-neutral-50 text-neutral-400 px-5">
      <div className="h-full mx-auto flex justify-center items-center ">
      <div className="lg:w-2/5">
        <small className="block w-full lg:max-w-[612px] ml-auto">Review Analysis App | Created by <a href="#" className="text-indigo-500 hover:underline duration-300">@your-handle</a> &copy; 2025</small>
      </div>
      <div className="lg:w-3/5">
      <p className="w-full xl:w-[688px] text-right">
        <span>view on <a href={GITHUB_URL}>GitHub</a></span>
      </p>
      </div>
      </div>
    </footer>
  )
}