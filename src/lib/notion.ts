import { NextApiRequest, NextApiResponse } from 'next'

const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_API_KEY
})

export default async function handler(databaseId: string) {
    const database = await notion.databases.query({
        database_id: databaseId
    })
}