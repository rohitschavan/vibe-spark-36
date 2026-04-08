export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 VIBE IT SOLUTIONS
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">User Data Deletion</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
