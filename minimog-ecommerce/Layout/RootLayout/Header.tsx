"use client"

import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            label: 'Home',
            items: ['Home v1', 'Home v2', 'Home v3', 'Home v4']
        },
        {
            label: 'Shops',
            items: ['Shop Grid', 'Shop List', 'Shop Sidebar', 'Single Product']
        },
        {
            label: 'Products',
            items: ['Product Simple', 'Product Variable', 'Product Bundle', 'Product External']
        },
        {
            label: 'Pages',
            items: ['About Us', 'Contact', 'FAQ', 'Blog']
        },
        {
            label: 'FoxKit',
            items: ['Sales Popup', 'Size Chart', 'Bundle Products', 'Pre-Order']
        },
    ];

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-black hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation - Left */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="group relative">
                                <button className="flex items-center space-x-1 text-black hover:text-gray-900 text-[16px] font-medium transition-colors outline-none py-2">
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                                </button>

                                {/* Dropdown Content */}
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="py-1">
                                        {item.items.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logo - Center */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="/" className="flex items-center">
                            <img
                                src="https://fashion.minimog.co/cdn/shop/files/logo_a3f90005-86fb-4996-8c21-b46c5011524e.png?v=1709089146&width=500"
                                alt="Minimog"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* Icons - Right */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                            <User size={20} />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                            <Heart size={20} />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                        </button>
                        <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                            <ShoppingCart size={20} />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200">
                        {menuItems.map((item, index) => (
                            <div key={index} className="py-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-2 text-sm font-medium">
                                        <span>{item.label}</span>
                                        <ChevronDown size={16} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48">
                                        {item.items.map((subItem, subIndex) => (
                                            <DropdownMenuItem key={subIndex}>
                                                <a href="#" className="w-full">{subItem}</a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}