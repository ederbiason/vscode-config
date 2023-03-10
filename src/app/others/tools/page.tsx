import { getNotionTableTools } from '@/lib/notion'

export const revalidate = 1800

export const metadata = {
    title: 'Tools',
}

export default async function Tools() {
    const pageId = "efbf821c08ff4b9ca12e72ce5b942936"
    const { content } = await getNotionTableTools(pageId)

    return (
        <div className="flex text-center justify-around">
            {content.map((tool) => (
                <div key={tool.id} className="bg-[#4b4670] w-60 p-3 rounded-lg hover:bg-opacity-80 border">
                    <div className="font-bold mb-1 underline underline-offset-2 text-white text-xl">
                        <a href={tool.url} target="_blank" rel="noreferrer">
                            {tool.name}
                        </a>
                    </div>

                    <div className="text-[#e3e3e3]">
                        {tool.description}
                    </div>
                </div>
            ))}
        </div>
    )
}