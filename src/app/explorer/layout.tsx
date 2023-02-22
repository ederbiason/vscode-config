import { Explorer } from "@/components/Explorer";


export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Explorer />

            <div className="h-full relative">
                {children}
            </div>
        </>
    )
}
