import { NextResponse } from "next/server";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";

export const revalidate = 3600; // ISR: 1 hour

export async function GET() {
  try {
    const [profile, repos] = await Promise.all([
      getGitHubProfile(),
      getGitHubRepos(),
    ]);

    return NextResponse.json(
      { profile, repos, timestamp: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
