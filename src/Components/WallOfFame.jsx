import React, { useState, useEffect, useRef } from "react";
import { X, Linkedin, ExternalLink, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react";
import zoho from "../assets/logo/zoho_logo.jpg";
import britishAirways from "../assets/logo/british_airways_logo.png";
import makeMyTrip from "../assets/logo/makemytrip.png";
import klook from "../assets/logo/klook_logo.png";
import britshhallOfFame from "../assets/bounty/british.png";
import zohoHallOfFame from "../assets/bounty/zoho.png";
import mmtHallOfFame from "../assets/bounty/mmt.png";
import klookHallOfFame from "../assets/bounty/klook.png";

const wallOfFameData = [
    {
        id: 1,
        category: "Broken Object Property Level Authorization",
        severity: "Medium",
        company: "Zoho",
        logo: zoho,
        linkedin: "https://www.linkedin.com/company/zoho/",
        screenshot: zohoHallOfFame,
        details: "Identify a vulnerable endpoint in the user profile management system that allowed unauthorized access to sensitive user data",
        date: "Jan 2026",
        reward: "Hall of Fame + Bounty",
    },
    {
        id: 2,
        category: "Authentication Bypass",
        severity: "Medium",
        company: "British Airways",
        logo: britishAirways,
        linkedin: "https://www.linkedin.com/company/british-airways/",
        screenshot: britshhallOfFame,
        details: "Discovered an authentication flow vulnerability in a British Airways–managed asset.",
        date: "Oct 2025",
        reward: "Hall of Fame",
    },
    {
        id: 3,
        category: "Information Disclosure",
        severity: "Medium",
        company: "MakeMyTrip",
        logo: makeMyTrip,
        linkedin: "https://www.linkedin.com/company/makemytrip.com",
        screenshot: mmtHallOfFame,
        details: "Collaborate with Ravindra Jatav and together we found an vulnerable endpoint that exposed PII detail.",
        date: "Dec 2025",
        reward: "Bounty",
        externalLink: "https://www.linkedin.com/posts/ravindra-jatav-2b390a1b8_bugbounty-yeswehack-cybersecurity-activity-7408801149375483907-X0vV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECaS0YBnp61amZ_347taYmqr0kYbQ0cRsk",
    },
    {
        id: 4,
        category: "Broken Link Hijacking",
        severity: "Low",
        company: "Klook",
        logo: klook,
        linkedin: "https://www.linkedin.com/company/klook/",
        screenshot: klookHallOfFame,
        details: "Through in-depth reconnaissance, I identified a broken link hijacking vulnerability",
        date: "Aug 2025",
        reward: "Bounty",
    },
];

const SeverityBadge = ({ severity }) => {
    const colors = {
        Critical: "bg-red-500/20 text-red-500 border-red-500/50",
        High: "bg-orange-500/20 text-orange-500 border-orange-500/50",
        Medium: "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
        Low: "bg-blue-500/20 text-blue-500 border-blue-500/50",
    };
    return (
        <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold border ${colors[severity] || colors.Low}`}>
            {severity}
        </span>
    );
};

const WallOfFame = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollBy({ left: -340, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                if (isZoomed) setIsZoomed(false);
                else setSelectedAchievement(null);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isZoomed]);

    return (
        <div id="wall-of-fame" className="py-20 bg-[#040711] text-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-20">
                <h2 className="text-4xl font-bold mb-4 text-center audiowide-regular">Wall of Fame</h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Showcasing some of my top findings in globally recognized companies.
                </p>

                <div className="relative flex w-full items-center justify-center">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 z-10 p-2 bg-gray-900/80 border border-gray-700 rounded-full hover:bg-gray-800 text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar px-10 py-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {wallOfFameData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedAchievement(item)}
                                className="group relative min-w-[320px] md:min-w-[400px] p-6 rounded-2xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm shrink-0"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center justify-start h-12 w-auto max-w-[180px]">
                                        <img src={item.logo} alt={item.company} className="h-full w-auto object-contain rounded-xl" />
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 bg-gray-800 rounded-full hover:text-blue-400 transition-colors"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                        <SeverityBadge severity={item.severity} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">{item.category}</h3>
                                <p className="text-gray-400 text-sm mb-4">Company: <span className="text-white font-medium">{item.company}</span></p>

                                <div className="flex items-center text-blue-400 text-xs font-semibold uppercase tracking-wider">
                                    View Details <ExternalLink size={12} className="ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 z-10 p-2 bg-gray-900/80 border border-gray-700 rounded-full hover:bg-gray-800 text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className={`relative w-full max-w-5xl bg-[#0d1117] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 ${isZoomed ? 'hidden' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedAchievement(null)}
                            className="absolute top-6 right-6 z-10 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                            {/* Left Side: Screenshot */}
                            <div className="md:w-1/2 w-full bg-black/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-800 overflow-hidden p-4 group/image relative cursor-zoom-in"
                                onClick={() => setIsZoomed(true)}
                            >
                                <img
                                    src={selectedAchievement.screenshot}
                                    alt="Vulnerability Screenshot"
                                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/image:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">Click to Maximize</span>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="md:w-1/2 w-full p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-start h-16 w-auto max-w-[240px]">
                                        <img src={selectedAchievement.logo} alt={selectedAchievement.company} className="h-full w-auto object-contain rounded-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{selectedAchievement.company}</h3>
                                        <p className="text-gray-400">{selectedAchievement.date}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShieldAlert size={18} className="text-blue-500" />
                                        <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">Category</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">{selectedAchievement.category}</h4>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Severity</p>
                                        <SeverityBadge severity={selectedAchievement.severity} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Recognition</p>
                                        <p className="text-white font-semibold">{selectedAchievement.reward}</p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Vulnerability Description</p>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {selectedAchievement.details}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 items-center mb-8">
                                    <a
                                        href={selectedAchievement.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:scale-105"
                                    >
                                        <Linkedin size={20} /> Connect for references
                                    </a>
                                    {selectedAchievement.externalLink && (
                                        <a
                                            href={selectedAchievement.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl font-bold transition-all hover:scale-105"
                                        >
                                            <ExternalLink size={20} className="text-blue-500" /> View Post
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Zoomed Image Lightbox */}
            {isZoomed && selectedAchievement && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-in fade-in duration-300 cursor-zoom-out"
                    onClick={() => setIsZoomed(false)}
                >
                    <button
                        onClick={() => setIsZoomed(false)}
                        className="absolute top-8 right-8 z-10 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700 text-white transition-colors border border-white/10"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedAchievement.screenshot}
                        alt="Maximized Screenshot"
                        className="max-w-[95vw] max-h-[95vh] object-contain shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                </div>
            )}

            <div className="w-full flex justify-center mt-12">
                <div className="border border-[#27272A] w-[80%]"></div>
            </div>
        </div>
    );
};

export default WallOfFame;
