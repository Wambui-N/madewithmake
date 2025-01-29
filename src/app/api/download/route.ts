import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import path from 'path'
import fs from 'fs/promises'
import { createReadStream } from 'fs'

async function logDownload(ip: string) {
  try {
    const timestamp = new Date().toISOString()
    const logEntry = `${timestamp} - Download from IP: ${ip}\n`

    const logPath = path.join(process.cwd(), 'logs', 'downloads.log')

    // Ensure logs directory exists
    await fs.mkdir(path.dirname(logPath), { recursive: true })

    // Append to log file asynchronously
    await fs.appendFile(logPath, logEntry)
  } catch (err) {
    console.error('Logging error:', err)
  }
}

export async function GET() {
  try {
    const ip = (await headers()).get('x-forwarded-for')?.split(',')[0] || 'unknown'

    const filePath = path.join(process.cwd(), 'public', 'Email Attachment to Google Drive Automation documentation.pdf')

    try {
      await fs.access(filePath) // Check if file exists
    } catch {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Log the download
    logDownload(ip)

    const fileStream = createReadStream(filePath)

    return new NextResponse(fileStream as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Email_Attachment_to_Google_Drive_Automation_documentation.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json({ error: 'Error downloading file' }, { status: 500 })
  }
}
