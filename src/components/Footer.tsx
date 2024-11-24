export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="/products/ml" className="text-sm text-muted-foreground hover:text-primary">Machine Learning</a></li>
              <li><a href="/products/nlp" className="text-sm text-muted-foreground hover:text-primary">NLP</a></li>
              <li><a href="/products/analytics" className="text-sm text-muted-foreground hover:text-primary">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="https://www.linkedin.com/company/aievolve/jobs/" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="/jobs" className="text-sm text-muted-foreground hover:text-primary">Jobs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground flex justify-center mb-0">
          <p>&copy; {new Date().getFullYear()} AIVOLVE. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}