import {
  Plus,
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "react-avatar";
import UserStore from "@/store/user";
import Link from "next/link";

export function DropdownMenuDemo() {
  const user = UserStore((state) => state.user);
  const logOut = UserStore((state) => state.logOut);
  return (
    <DropdownMenu>
      {user ? (
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="rounded-full">
            <Avatar name={user} size="40" className="rounded-full" />
          </Button>
        </DropdownMenuTrigger>
      ) : (
        <div className="gap-4 flex items-center">
          <Link href={"/login"} className={buttonVariants({variant: "link"})}>Login</Link>{" "}
          <Link
            href={"/register"}
            className={buttonVariants({ variant: "default" })}
          >
            Register
          </Link>
        </div>
      )}

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={
                user
                  ? `profile/${user.toLowerCase().replace(" ", "-")}`
                  : "/login"
              }
              className="flex flex-1 items-center"
            >
              <User className="mr-2 h-4 w-4" />

              {user ? "Profile" : "Login"}
            </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
            <DropdownMenuItem>
          <Link href="/new" className="flex w-full">
              <Plus className="mr-2 h-4 w-4" />
              <span>Add Component</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>{" "}
          </Link>
            </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {user && (
            <button
              onClick={() => {
                logOut();
              }}
              className="flex w-full items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </button>
          )}
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
