import { CodePreview } from '@/components/CodePreview'
import { getNotionPageContent } from '@/lib/notion'
import shiki from 'shiki'

export const metadata = {
    title: 'About me'
}

export default async function Settings() {
    const pageId = "b8082d0ba4414657b4ed4815ff318284"
    const { content } = await getNotionPageContent(pageId)

    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon'
    })

    const code = highlighter.codeToHtml(content, { lang: 'md' })

    return <CodePreview code={code} />
}