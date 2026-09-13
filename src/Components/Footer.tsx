import footerLogo from "../assets/logo-text.png"
const Footer = () => {

    return <footer className="max-w-7xl mx-auto p-16 px-4">
        <div>
            <div className="grid  md:grid-cols-3 lg:grid-cols-5 justify-between gap-y-10 ">
                <div className="md:col-span-3 lg:col-span-2">
                    <img src={footerLogo} alt="" />
                    <p className="plus text-[#64748B] text-sm my-3">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className="space-x-3">
                        <a className="plus font-semibold text-sm text-[#475569]" href="">GitHub</a>
                        <a className="plus font-semibold text-sm text-[#475569]" href="">Twitter</a>
                        <a className="plus font-semibold text-sm text-[#475569]" href="">LinkedIn</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-[#0F172A] font-bold plus text-sm">Product</h3>
                    <p className="text-[#64748B] plus text-sm">Home</p>
                    <p className="text-[#64748B] plus text-sm">Technologies</p>
                    <p className="text-[#64748B] plus text-sm">Projects</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-[#0F172A] font-bold plus text-sm">Company</h3>
                    <p className="text-[#64748B] plus text-sm">About</p>
                    <p className="text-[#64748B] plus text-sm">Contact</p>
                    <p className="text-[#64748B] plus text-sm">Careers</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-[#0F172A] font-bold plus text-sm">Legal</h3>
                    <p className="text-[#64748B] plus text-sm">Privacy Policy</p>
                    <p className="text-[#64748B] plus text-sm">Terms of Service</p>
                </div>
            </div>
            <hr className="border border-[#F1F5F9] my-8 "/>
            <div className="flex justify-between items-center">
                <h3 className="plus text-sm text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</h3>
                <div className="flex gap-4">
                    <p className="plus text-sm text-[#94A3B8]">Privacy</p>
                    <p className="plus text-sm text-[#94A3B8]">Terms</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;