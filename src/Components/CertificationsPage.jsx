import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Certifications from "./Certifications";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const CertificationsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#040711] min-h-screen">
            <Navbar />
            <div className="pt-24 pb-12 px-4">
                <Certifications />
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default CertificationsPage;
