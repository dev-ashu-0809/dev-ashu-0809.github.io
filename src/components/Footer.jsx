import { FaLinkedin, FaHeart, FaPen } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm flex items-center gap-1">
          Built with <FaHeart className="text-red-500 text-xs" /> by Ashutosh Singh
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/dev-ashu/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://www.c-sharpcorner.com/members/ashutosh-singh83"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
            title="C# Corner Blog"
          >
            <FaPen className="text-lg" />
          </a>
        </div>
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
