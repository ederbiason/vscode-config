import { Github } from "lucide-react";

export function Footer() {
    return (
        <div className="text-sm px-3 text-[#8F8CA8] flex gap-3 items-center justify-end bg-[#2a273f]">
            <a
                href="https://github.com/ederbiason/vscode-config"
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 items-center text-xs hover:text-[#E0DEF2]"
            >
                <Github size={12} />
                Github
            </a>
        </div>
    )
}