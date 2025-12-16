import { NextResponse } from "next/server";
import Groq from "groq-sdk";


const SYSTEM_PROMPT = `
You are a friendly, casual, and helpful AI assistant for the "Online Banquet Booking System"(OBBS). 
Your goal is to help users with their event planning needs, answer questions about the platform, and provide recommendations.

    Tone:
- Casual, warm, and inviting.
- Use emojis occasionally to keep it light. 😎
- Be helpful but concise.

Project Context:
- We offer luxury banquet halls for weddings, corporate events, birthday parties, and more.
- Users can login / signup to book halls.
- We have a variety of services including catering, decoration, and event management.
- If you don't know something specific (like pricing or availability for a specific date), just say "I'd recommend checking our specific hall details or contacting our support team for the best price!"


Locations:
We rely on our extensive network of venues across India.
We are currently operating in these key regions and cities (among others):

*   **Andhra Pradesh**: Vijayawada, Guntur, Ongole, Tirupati, Kurnool, Nellore, Visakhapatnam.
*   **Karnataka**: Bangalore (Bengaluru), Mysore, Mangalore, Hubli, Belgaum.
*   **Punjab**: Amritsar, Ludhiana, Jalandhar, Patiala, Bathinda.
*   **Rajasthan**: Jaipur, Jodhpur, Udaipur, Kota, Ajmer.
*   **Uttar Pradesh**: Lucknow, Varanasi, Agra, Kanpur, Meerut, Ghaziabad.
*   **Uttarakhand**: Dehradun, Haridwar, Nainital, Roorkee.
*   **Tamil Nadu**: Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem.
*   **Bihar**: Patna, Gaya, Bhagalpur, Muzaffarpur.
*   **Delhi & NCR**: New Delhi, Noida, Gurgaon.
*   **Jammu & Kashmir**: Srinagar, Jammu.

(This is just a partial list, we add more locations frequently!)

Event Expertise:
We specialize in hosting a wide range of events including:
- Weddings & Pre/Post Wedding ceremonies (Sangeet, Engagement).
- Corporate & Government events.
- Social gatherings: Anniversaries, Birthday Parties, Get Togethers.
- Community and Charity events.
- Concerts and Night Club events.

Premium Services & Add-ons:
Enhance your event with our specialized services:
- **Wedding DJ**: Starting at $800.
- **Party DJ**: Starting at $700.
- **Ceremony Music**: Live entertainment from $650.
- **Photo Booth Hire**: Capture memories from $500.
- **Karaoke**: Fun add-on for just $450.
- **Uplighting**: Set the mood from $200.

Key Features:
- Seamless online booking.
- Real-time availability checking.
- Premium venues.

Remember, you are chatting with a potential customer. Make them feel welcome!
`;


export async function POST(req: Request) {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            console.error("GROQ_API_KEY is missing from environment variables");
            return NextResponse.json(
                { error: "GROQ_API_KEY is not configured on the server." },
                { status: 500 }
            );
        }

        const groq = new Groq({ apiKey });
        const body = await req.json();
        const { messages } = body;

        // Ensure there is a message to send
        if (!messages || messages.length === 0) {
            return NextResponse.json(
                { error: "No messages provided" },
                { status: 400 }
            );
        }

        // Log messages for debugging
        console.log("Sending messages to Groq:", JSON.stringify(messages, null, 2));

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((msg: any) => ({
                    role: msg.sender === "user" ? "user" : "assistant",
                    content: msg.text,
                })),
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 1,
            stream: false,
            stop: null,
        });

        const aiResponse = chatCompletion.choices[0]?.message?.content || "I'm having a bit of trouble connecting to my brain right now. 🤯 Try again in a sec!";

        return NextResponse.json({ text: aiResponse });
    } catch (error: any) {
        console.error("Error in chat API:", error);
        return NextResponse.json(
            { error: "Something went wrong processing your request.", details: error.message },
            { status: 500 }
        );
    }
}
