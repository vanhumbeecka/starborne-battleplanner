import fetch from 'node-fetch'
import {GoogleSheetResponse, isGoogleSheetResponse} from './google-sheet-response'

export class GoogleSheetsClient {

  private url: URL

  setBaseUrl(uri: string): void {
    this.url = new URL(uri)
  }

  async fetchData(): Promise<GoogleSheetResponse> {
    if (!this.url) {
      throw new Error('Url not set. First use `setBaseUrl(url)`')
    }

    const response = await fetch(this.url)
    if (!response.ok) {
      throw new Error(`Could not fetch data: ${response.statusText}`)
    }

    let body: any
    try {
      body = await response.json()
    } catch (e) {
      throw new Error('Could not parse JSON from response')
    }

    // validate some props
    if (!isGoogleSheetResponse(body)) {
      throw new Error('Response not of type GoogleSheetResponse')
    }

    return body
  }

}
