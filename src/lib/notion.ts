import { Client, isFullBlock } from '@notionhq/client';
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
    auth: process.env.NOTION_API_KEY
})

export default async function getNotionPageContent(pageId: string) {
    const { results } = await notion.blocks.children.list({
        block_id: pageId
    })

    const codeBlock = results.find(block => isFullBlock(block) && block.type === "code") as CodeBlockObjectResponse | undefined

    console.log(results)

    if(!codeBlock) {
        throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
    }

    const { plain_text } = codeBlock.code.rich_text[0]

    return { content: plain_text }
}