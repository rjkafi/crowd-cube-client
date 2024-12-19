

const Footer = () => {
    return (
        <>
           <footer className="bg-gray-800 text-gray-300 py-8">
            {/* Main Footer Section */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Crowdcube</h3>
                    <p className="mt-4 text-gray-400">
                        Crowdcube is a crowdfunding platform to help you raise funds for personal causes, creative projects, 
                        and innovative startups. Join us to make a difference and bring your ideas to life.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/allcampaign" className="hover:text-white">All Campaigns</a></li>
                        <li><a href="/addCampaign" className="hover:text-white">Add Campaign</a></li>
                        <li><a href="/myCampaign" className="hover:text-white">My Campaigns</a></li>
                        <li><a href="/myDonations" className="hover:text-white">My Donations</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Contact Us</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>Email: <a href="mailto:support@crowdcube.com" className="hover:text-white">support@crowdcube.com</a></li>
                        <li>Phone: <a href="tel:+18001234567" className="hover:text-white">+1 (800) 123-4567</a></li>
                        <li>Address: 123 Crowdcube Lane, Innovation City</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} Crowdcube. All rights reserved.</p>
                <p className="mt-2">
                    Follow us: 
                    <a href="https://facebook.com" className="ml-2 text-blue-500 hover:text-white">Facebook</a> | 
                    <a href="https://twitter.com" className="ml-2 text-cyan-500 hover:text-white">Twitter</a> | 
                    <a href="https://instagram.com" className="ml-2 text-pink-500 hover:text-white">Instagram</a>
                </p>
            </div>
        </footer>
        
        </>
    );
};

export default Footer;