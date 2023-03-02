import { Client, isFullBlock } from '@notionhq/client';
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
    auth: process.env.NOTION_API_KEY
})

export async function getNotionPageContent(pageId: string) {
    const { results } = await notion.blocks.children.list({
        block_id: pageId
    })

    const codeBlock = results.find(block => isFullBlock(block) && block.type === "code") as CodeBlockObjectResponse | undefined

    if(!codeBlock) {
        throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
    }

    const { plain_text } = codeBlock.code.rich_text[0]

    return { content: plain_text }
}

export async function getNotionTableTools() {
    const databaseIdId = "4ecd9716ff4f492dbd41e9c0d6dfe0eb"

    const { results } = await notion.databases.query({
        database_id: databaseIdId
    })

    const content = results.map((result) => {
        console.log(result)
    })

    return content
}