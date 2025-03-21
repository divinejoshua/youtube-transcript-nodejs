import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from 'youtube-transcript';

export const config = {
    runtime: 'edge',
  }


// POST request
export async function GET (req: NextRequest) {
    let transcript = {}

    await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=NwZ26lxl8wU').then((data) => {
        console.log(data)
        transcript = data
    });

    //Data response
    let data = { response: transcript };

    //Response
    return NextResponse.json(data, {
        status: 200,
    });
}