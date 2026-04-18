export default function Header() {
  return (
<header className="w-full border-b">
  <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

    <h1 className="text-xl sm:text-3xl font-bold leading-tight">
      Fletcher <br /> NAC
    </h1>

    <nav className="flex gap-4 text-sm sm:text-base">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>

  </div>
</header>
  );
}