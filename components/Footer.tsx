export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e0ddd7] bg-[#f4f1ea] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-[#5a5a5a]">
        <p>Native American Church of Fletcher, Oklahoma</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}