import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
    title: 'Dev Setup'
}

const markdown = `
# Dev Setup

- Ryzen 5 2600 3.40Ghz
- 2x Kllisre 8GB 3000Mhz
- ASrock A320M-HDV
- KCAS 600W 80 Plus Bronze
- Corsair SSD 480GB NVMe
- AMD RX550 2GB


## Peripherals
- HyperX Pulsefire Core
- Motospeed CK104 (Blue Switch)
- Asus Tuf 23,8" 144hz 1ms Ips

That's it, nothing more... for now!
`.trim()

export default async function DevSetup() {
    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon'
    })

    const code = highlighter.codeToHtml(markdown, { lang: 'md' })

    return <CodePreview code={code} />
}