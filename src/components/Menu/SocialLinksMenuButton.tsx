"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Github, User, Linkedin, Instagram } from 'lucide-react';
import { MenuButton } from './MenuButton';

const socialLinks = [
    {
        name: 'github',
        url: 'https://github.com/ederbiason',
        icon: <Github size={14} />
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/eder-biason-b0a7b920b/',
        icon: <Linkedin size={14} />
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/ederbiason_/',
        icon: <Instagram size={14} />
    },
]

export function SocialLinksMenuButton() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <MenuButton icon={User} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content side="right" className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto">
                    {socialLinks.map((socialItem) => {
                        return (
                            <DropdownMenu.Item key={socialItem.url} className="outline-none">
                                <a 
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]'
                                >
                                    {socialItem.icon}
                                    {socialItem.name}
                                </a>
                            </DropdownMenu.Item>
                        )
                    })}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}