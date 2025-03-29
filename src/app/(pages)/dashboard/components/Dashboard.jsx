"use client";
import { useState } from "react";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { Button } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";
import SidebarContent from "./SidebarContent";

export function Dashboard({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-2 top-2 z-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden w-[280px] border-r bg-muted/40 lg:block">
        <ScrollArea className="h-full">
          <SidebarContent />
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="h-full p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}

