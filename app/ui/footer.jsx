import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-background py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">© 2024 Your Company. All rights reserved.</div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-4 md:mb-0">
          <Button variant="link" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-foreground">
            Services
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-foreground">
            Contact
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Button>
        </nav>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="container mx-auto text-center text-xs text-muted-foreground">Made with ❤️ using shadcn/ui</div>
    </footer>
  )
}

