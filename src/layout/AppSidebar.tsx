"use client";
import React, { useEffect, useRef, useState,useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { PiGearBold } from "react-icons/pi";
import { TbLibrary } from "react-icons/tb";
import { BsPieChartFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

import {
    ChevronDownIcon,
    HorizontaLDots,
} from "../icons/index"


type NavItem = {
name: string;
icon: React.ReactNode;
path?: string;
subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
{
    icon: <CiGrid41 className="text-gray-800 size-6 dark:text-white/90"/>,
    name: "Overview",
    path: "/"
},
{
    icon: <FaLayerGroup className="text-gray-800 size-6 dark:text-white/90" />,
    name: "Cohort Analysis",
    path: "/cohort-analysis",
},
{
    icon: <BsPieChartFill className="text-gray-800 size-5 dark:text-white/90" />,
    name: "Quartile Analysis",
    path: "/quartile-analysis",
},
{
    icon: <TbLibrary className="text-gray-800 size-6 dark:text-white/90" />,
    name: "Library",
    path: "/library",
},
{
    icon: <FaUser className="text-gray-800 size-4.5 dark:text-white/90" />,
    name: "Profile",
    path: "/profile",
},
{
    icon: <PiGearBold className="text-gray-800 size-6 dark:text-white/90" />,
    name: "Settings",
    path: "/settings",
},
];

const AppSidebar: React.FC = () => {
const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
const pathname = usePathname();

const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main"
) => (
    <ul className="flex flex-col gap-4">
    {navItems.map((nav, index) => (
        <li key={nav.name}>
        {nav.subItems ? (
            <button
            onClick={() => handleSubmenuToggle(index, menuType)}
            className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                ? "menu-item-active"
                : "menu-item-inactive"
            } cursor-pointer ${
                !isExpanded && !isHovered
                ? "lg:justify-center"
                : "lg:justify-start"
            }`}
            >
            <span
                className={` ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
            >
                {nav.icon}
            </span>
            {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
            )}
            {(isExpanded || isHovered || isMobileOpen) && (
                <Image src={ChevronDownIcon} width={20} height={20} alt="chevron-down-icon"
                className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                    ? "rotate-180 text-brand-500"
                    : ""
                }`}
                />
            )}
            </button>
        ) : (
            nav.path && (
            <Link
                href={nav.path}
                className={`menu-item group ${
                isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
            >
                <span
                className={`${
                    isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
                >
                {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
                )}
            </Link>
            )
        )}
        {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
            ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
            }}
            className="overflow-hidden transition-all duration-300"
            style={{
                height:
                openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
            }}
            >
            <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                <li key={subItem.name}>
                    <Link
                    href={subItem.path}
                    className={`menu-dropdown-item ${
                        isActive(subItem.path)
                        ? "menu-dropdown-item-active"
                        : "menu-dropdown-item-inactive"
                    }`}
                    >
                    {subItem.name}
                    <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                        <span
                            className={`ml-auto ${
                            isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                        >
                            new
                        </span>
                        )}
                        {subItem.pro && (
                        <span
                            className={`ml-auto ${
                            isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                        >
                            pro
                        </span>
                        )}
                    </span>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        )}
        </li>
    ))}
    </ul>
);

const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main";
    index: number;
} | null>(null);
const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
);
const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

// const isActive = (path: string) => path === pathname;
const isActive = useCallback((path: string) => path === pathname, [pathname]);

useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main"].forEach((menuType) => {
    navItems.forEach((nav, index) => {
        if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
            setOpenSubmenu({
                type: menuType as "main",
                index,
            });
            submenuMatched = true;
            }
        });
        }
    });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
    setOpenSubmenu(null);
    }
}, [pathname,isActive]);

useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
    const key = `${openSubmenu.type}-${openSubmenu.index}`;
    if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
        ...prevHeights,
        [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
    }
    }
}, [openSubmenu]);

const handleSubmenuToggle = (index: number, menuType: "main") => {
    setOpenSubmenu((prevOpenSubmenu) => {
    if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
    ) {
        return null;
    }
    return { type: menuType, index };
    });
};

return (
    <main
    className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
        isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
    onMouseEnter={() => !isExpanded && setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <div
        className={`py-8 flex  ${
        !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
    >
        <Link href="/">
        {isExpanded || isHovered || isMobileOpen ? (
            <div className="flex items-center gap-3">
                <Image
                    className=""
                    src="/images/logo/logo.svg"
                    alt="Logo"
                    width={40}
                    height={30}
                />
                <h3 className="dark:text-white text-gray-dark text-lg"> Listen </h3>
            </div>
        ) : (
            <Image
                className=""
                src="/images/logo/logo.svg"
                alt="Logo"
                width={40}
                height={30}
            />
        )}
        </Link>
    </div>
    <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
        <div className="flex flex-col gap-4">
            <div>
            <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
            >
                {isExpanded || isHovered || isMobileOpen ? (
                "Menu"
                ) : (
                <Image src={HorizontaLDots} alt="horizonatl-dots-icon" width={20} height={20} />
                )}
            </h2>
            {renderMenuItems(navItems, "main")}
            </div>
        </div>
        </nav>
    </div>
    </main>
);
};

export default AppSidebar;
