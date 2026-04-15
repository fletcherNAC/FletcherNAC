export default function Header() {
  return (
    <header className="w-full border-b border-[#e0ddd7] bg-[#f4f1ea]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-sm font-semibold text-[#1a1a1a]">
          Fletcher NAC
        </h1>

        <nav className="flex gap-6 text-sm text-[#3a3a3a]">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#experience" className="hover:text-black">Experience</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>

      </div>
    </header>
  );
}