"use client";

import { useState } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about" },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * TEMPORARY AUTH STATE
   * Later replace with Redux/Auth Provider
   */
  const isLoggedIn = true;

  /**
   * TEMP USER DATA
   * Later get from backend/provider
   */
  const user = {
    name: "Sajid Hasan",
    image: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* =========================
            LOGO
        ========================== */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              Sajan Sir
            </h1>

            <p className="text-xs text-slate-500">Learn Mathematics Smartly</p>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-2 text-sm font-medium transition-all duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-primary after:transition-all after:duration-300 ${
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-slate-600 after:scale-x-0 hover:text-primary hover:after:scale-x-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* =========================
            DESKTOP RIGHT SIDE
        ========================== */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <Button className="rounded-xl bg-indigo-600 px-5 hover:bg-indigo-700">
              Login
            </Button>
          ) : (
            <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:border-indigo-200 hover:bg-slate-50">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>

              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">
                  {user.name}
                </p>

                <p className="text-xs text-slate-500">Student</p>
              </div>

              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          )}
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-[600px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="space-y-2 bg-white px-4 py-4">
          {/* Mobile User */}
          {isLoggedIn && (
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <Avatar className="h-11 w-11">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {user.name}
                </p>

                <p className="text-xs text-slate-500">Student Account</p>
              </div>
            </div>
          )}

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary underline"
                    : "text-slate-600 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-4">
            {!isLoggedIn ? (
              <Button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700">
                Login
              </Button>
            ) : (
              <Button variant="outline" className="w-full rounded-xl">
                Go to Dashboard
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
