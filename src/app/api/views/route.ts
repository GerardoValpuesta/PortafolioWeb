import env from "@/config/env";
import axios from "axios";
import { NextResponse } from "next/server";

export const cache = "no-cache";
export const revalidate = 0;

export async function GET() {
    // Fallback para desarrollo sin credenciales reales
    if (env.UNAMI_API_KEY === "dummy" || env.NEXT_PUBLIC_UMAMI_WEBSITE_ID === "dummy") {
        return NextResponse.json({ success: true, data: { pageviews: 0, visitors: 0 } });
    }

    const startAt = Date.now() - 365 * 24 * 60 * 60 * 1000; // último año
    const endAt = Date.now();

    try {
        const res = await axios.get(
            `https://api.umami.is/v1/websites/${env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}/stats?startAt=${startAt}&endAt=${endAt}`,
            {
                headers: {
                    "x-umami-api-key": env.UNAMI_API_KEY,
                    "Accept": "application/json",
                },
            }
        );

        const data = res.data;
        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("Error fetching website stats:", err);
        return NextResponse.json(
            { success: false, message: "Failed to fetch website stats" },
            { status: 500 }
        );
    }
}

