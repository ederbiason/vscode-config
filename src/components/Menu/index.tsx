import { Bug, Files, FlaskConical, GitFork, Monitor, Puzzle, Search } from "lucide-react";
import { MenuButton } from "./MenuButton";

export function Menu() {
    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <MenuButton icon={Files} isActive />
                <MenuButton icon={Search} />
                <MenuButton icon={GitFork} />
                <MenuButton icon={Bug} />
                <MenuButton icon={Puzzle} />
                <MenuButton icon={Monitor} />
                <MenuButton icon={FlaskConical} />
            </div>
        </div>
    )
}