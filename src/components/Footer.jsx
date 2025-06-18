import { ArrowUp, Instagram, Linkedin, Code,} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-bold text-blue-950 text-4xl">{"</Dhruv Shaswat>"}</div>
        <div className=" text-blue-950">CV will be uploaded shortly!!</div>

        {/* Connect With Me section */}
        <div className="text-center md:text-left">
          <h4 className="font-medium mb-2">Connect With Me :</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://leetcode.com/u/dhruv-bit/" target="_blank">
              <Code />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-shashwat-9393392a6/" target="_blank">
              <Linkedin />
            </a>
            {/* <a href="#" target="_blank">
              <Twitter /> */}
            {/* </a> */}
            <a href="https://www.instagram.com/shashwat_dhruv_/" target="_blank">
              <Instagram />
            </a>
            {/* <a href="#" target="_blank">
              <Twitch />
            </a> */}
            <a href="https://codeforces.com/profile/Dr3w" target="_blank">
            <div className="font-bold ">CF</div>
            </a>
          </div>
        </div>

        {/* Scroll to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
