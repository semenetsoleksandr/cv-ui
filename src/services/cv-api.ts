import type { ISendMessageRequestBody } from '../types/messages.ts';

export class CvApi {
  async sendMessage(data: ISendMessageRequestBody) {
    const res = await fetch('http://localhost:8080/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
  }
}

export const cvApi = new CvApi();
