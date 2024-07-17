"use client";
import Link from "next/link";
// components/Layout.js
import React, { useState, useEffect } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniUserCircle } from "react-icons/hi2";
import { LogoutAction } from "@/actions";
import { useRouter } from "next/navigation";

const Layout = (
  { children }: { children: React.ReactNode },
  { token }: { token: string }
) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
   const result= await LogoutAction();
   console.log(result)
    router.push("/login");
  };

  return (
    <>
      <header
        className={`fixed w-full  transition-all duration-300 z-50 overflow-x-hidden ${
          scrolled
            ? "bg-purple-800 shadow-md py-2"
            : " bg-purple-800 md:bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-12  flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">
            <p className="font-extrabold">SS</p>
            <p className="text-sm">Patharia Public School</p>
          </Link>

          {/* Mobile menu button */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <HiMiniBars2 />}
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 font-bold text-white ">
            <Link href="/" className="text-white relative">
              <li className="navItemUnderLine list-none">Home</li>
            </Link>

            <Link href="/about" className=" relative">
              <li className="navItemUnderLine list-none">About</li>
            </Link>
            <Link href="/contact" className=" relative">
              <li className="navItemUnderLine list-none">Contact</li>
            </Link>
            {
              token ? (
                <Link href="/login" className=" relative">
                  <li className=" list-none">
                  <div className="w-full flex items-center justify-center text-2xl">
                      <HiMiniUserCircle />
                    </div>
                  </li>
                </Link>
              ) : (
                <Link href="#" className=" relative">
                  <li
                    onClick={handleLogout}
                    className=" list-none"
                  >
                    <div className="w-full flex items-center justify-center text-2xl">
                      <HiMiniUserCircle />
                    </div>
                  </li>
                </Link>
              )
            }
          </nav>
        </div>
        {/*  Mobile navigation */}
        {menuOpen && (
          <div className="md:hidden bg-purple-800">
            <nav className="flex flex-col items-center mt-4 gap-4 text-white">
              <Link onClick={()=>setMenuOpen(false)} href="/" className=" hover:text-white  relative">
                <li className="navItemUnderLine list-none">Home</li>
              </Link>
              <Link onClick={()=>setMenuOpen(false)} href="/about" className="e hover:text-white relative">
                <li className="navItemUnderLine list-none">About</li>
              </Link>

              <Link onClick={()=>setMenuOpen(false)} href="/contact" className=" hover:text-white relative">
                <li className="navItemUnderLine list-none">Contact</li>
              </Link>
              {
              token ? (
                <Link onClick={()=>setMenuOpen(false)} href="/login" className=" relative">
                  <li className=" list-none">
                  <div className="w-full flex items-center justify-center text-2xl">
                      <HiMiniUserCircle />
                    </div>
                  </li>
                </Link>
              ) : (
                <Link onClick={()=>setMenuOpen(false)} href="#" className=" relative">
                  <li
                    onClick={handleLogout}
                    className=" list-none"
                  >
                    <div className="w-full flex items-center justify-center text-2xl">
                      <HiMiniUserCircle />
                    </div>
                  </li>
                </Link>
              )
            }
            </nav>
          </div>
        )}
      </header>

      <div>{children}</div>
    </>
  );
};

export default Layout;
