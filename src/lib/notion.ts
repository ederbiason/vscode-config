import { Client, isFullBlock } from '@notionhq/client';
import { CodeBlockObjectResponse, ColumnBlockObjectResponse, ColumnListBlockObjectResponse, ListBlockChildrenResponse, TableBlockObjectResponse, TableRowBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

export async function getNotionTableTools(pageId: string) {

    const { results } = await notion.blocks.children.list({
        block_id: pageId
    })

    const tableBlock = results.find(block => isFullBlock(block)) as TableBlockObjectResponse

    if(!tableBlock) {
        throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
    }

    return { content: tableBlock }
}

export async function getNotionTableTools2(pageId: string) {
    const { results } = await notion.databases.query({
        database_id: pageId
    })

    return { content: results }
}