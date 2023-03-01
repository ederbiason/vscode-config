import { CodePreview } from '@/components/CodePreview'
import { getNotionPageContent } from '@/lib/notion'
import shiki from 'shiki'

export const revalidate = 1800

export const metadata = {
    title: 'Stacks and Skills'
}

export default async function Extensions() {
    const pageId = "db86e0e1ad7f4c209f9a8930e9c79e76"
    const { content } = await getNotionPageContent(pageId)

    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon'
    })

    const code = highlighter.codeToHtml(content, { lang: 'md' })

    return <CodePreview code={code} />
}