import { RowsStructure } from '@/@types/types';
import { Client, isFullBlock, isFullPage } from '@notionhq/client';
import { CodeBlockObjectResponse, DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

type Row = { 
    name: {
        id: string,
        title: {
            text: {
                content: string
            }
        }[]
    }
    description: {
        id: string,
        rich_text: {
            text: {
                content: string
            }
        }[]
    }
    url: {
        id: string
        url: string
    }
}

export async function getNotionTableTools(pageId: string) {
    const { results } = await notion.databases.query({
        database_id: pageId
    })

    // @ts-ignore
    const rows = results.map((res) => res.properties) as Row[]

    const rowsStructure: RowsStructure = rows.map((row) => ({
        id: row.name.id,
        name: row.name.title[0].text.content,
        description: row.description.rich_text[0].text.content,
        url: row.url.url
    }))

    return { content: rowsStructure }
}