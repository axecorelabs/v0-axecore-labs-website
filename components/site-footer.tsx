import { Logo } from '@/components/logo'

const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
  {
    title: 'Solutions',
    links: ['AI & Automation', 'Product Engineering', 'Infrastructure'],
  },
  {
    title: 'Resources',
    links: ['Insights', 'Case Studies'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Axecore Labs home">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Axecore<span className="text-accent"> Labs</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Engineering intelligent systems, scalable platforms, and transformative technology for
              a digital future.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-7">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Axecore Labs. Engineering the Future.
          </p>
        </div>
      </div>
    </footer>
  )
}
