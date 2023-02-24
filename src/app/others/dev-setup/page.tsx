import { CodePreview } from '@/components/CodePreview'
import { getNotionPageContent } from '@/lib/notion'
import shiki from 'shiki'

export const metadata = {
    title: 'Dev Setup'
}

export default async function DevSetup() {
    const pageId = "8d696fc8ee434810b9d0549acbb7df4a"
    const { content } = await getNotionPageContent(pageId)

    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon'
    })

    const code = highlighter.codeToHtml(content, { lang: 'md' })

    return <CodePreview code={code} />
}