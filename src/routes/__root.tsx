import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CustomCursor } from "@/components/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="section-num mb-4">— 404</p>
        <h1 className="font-display text-7xl">Lost the thread.</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist, or has moved without a forwarding address.
        </p>
        <div className="mt-8">
          <a href="/" className="editorial-link text-lg">
            Return to the index →
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
