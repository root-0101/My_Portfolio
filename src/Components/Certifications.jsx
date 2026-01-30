import React from "react";
import { ExternalLink } from "lucide-react";
import apiSec from "../assets/logo/apisec_university_logo.jpg";
import bsideLogo from "../assets/logo/bsides.jpg";
import tryHackMe from "../assets/logo/tryhackme_logo.jpg";
import tcm from "../assets/logo/tcm_logo.jpg";
import peh from "../assets/peh.pdf";


const certificationsData = [
    {
        title: "OWASP API Security Top 10",
        issuer: "APIsec University",
        date: "Issued Jan 2026",
        credentialId: "",
        link: "https://www.linkedin.com/in/r4jv33r/details/certifications/1768842926573/single-media-viewer/?type=DOCUMENT&profileId=ACoAAECaS0YBnp61amZ_347taYmqr0kYbQ0cRsk",
        logo: apiSec,
    },
    {
        title: "Bsides Ahemdabad",
        issuer: "United Latino Students Association",
        date: "Issued Sep 2025",
        credentialId: "269f09e7-dfb5-4f66-865e-98dcd16bbc33",
        link: "https://credsverse.com/credentials/269f09e7-dfb5-4f66-865e-98dcd16bbc33",
        logo: bsideLogo,
    },
    {
        title: "Jr Penetration Tester",
        issuer: "TryHackMe",
        date: "Issued Oct 2024",
        credentialId: "",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-Z9HZAYYAJT.png",
        logo: tryHackMe,
    },
    {
        title: "Practicle Ethical Hacking",
        issuer: "TCM Security",
        date: "Issued Jan 2024",
        credentialId: "",
        link: peh,
        logo: tcm,
    },
];

const Certifications = () => {
    return (
        <div id="certifications" className="py-20 bg-[#040711] text-white">
            <div className="container mx-auto px-4 lg:px-20">
                <h2 className="text-4xl font-bold mb-12 text-center audiowide-regular">Licenses & Certifications</h2>
                <div className="space-y-8">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <img
                                    src={cert.logo}
                                    alt={cert.issuer}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain bg-white p-1"
                                />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold">{cert.title}</h3>
                                <p className="text-gray-400 font-medium">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                                {cert.credentialId && (
                                    <p className="text-gray-500 text-xs mt-1">Credential ID: {cert.credentialId}</p>
                                )}
                                <div className="mt-4">
                                    <button
                                        onClick={() => window.open(cert.link, "_blank")}
                                        className="flex items-center gap-2 px-4 py-2 border border-blue-500/50 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition-colors mx-auto md:mx-0"
                                    >
                                        Show credential <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center mt-12">
                <div className="border border-[#27272A] w-[80%]"></div>
            </div>
        </div>
    );
};

export default Certifications;
