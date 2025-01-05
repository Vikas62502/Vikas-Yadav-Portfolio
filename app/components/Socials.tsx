import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMediaSection() {
    const socialLinks = [
        { icon: <FaInstagram />, link: "https://www.instagram.com/iam_yadav_vikas/", label: "Instagram" },
        { icon: <FaTwitter />, link: "https://x.com/vikasyadav_eth", label: "Twitter" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vikasyadav62/", label: "LinkedIn" },
        { icon: <FaGithub />, link: "https://github.com/Vikas62502", label: "GitHub" },
    ];

    return (
        <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-3xl text-gray-600 transition-transform duration-300 transform hover:scale-150 hover:text-[crimson]"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
