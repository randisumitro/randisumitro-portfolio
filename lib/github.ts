// ============================================================
// GITHUB API CLIENT
// ============================================================

import type { GitHubStats, GitHubRepo } from "@/types";

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = "randisumitro";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
  Accept: "application/vnd.github.v3+json",
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
};

export async function getGitHubProfile(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      }),
      fetch(
        `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        {
          headers,
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API error");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    // Count stars
    const totalStars = repos.reduce(
      (acc: number, repo: { stargazers_count?: number }) =>
        acc + (repo.stargazers_count || 0),
      0
    );

    // Language breakdown
    const languageCounts: Record<string, number> = {};
    repos.forEach((repo: { language?: string }) => {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + 1;
      }
    });

    const totalWithLanguage = Object.values(languageCounts).reduce(
      (a, b) => a + b,
      0
    );
    const topLanguages = Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([language, count]) => ({
        language,
        count,
        percentage: Math.round((count / totalWithLanguage) * 100),
      }));

    let totalCommits = 0;
    if (GITHUB_TOKEN) {
      try {
        const graphqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "${GITHUB_USERNAME}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                    }
                  }
                }
              }
            `,
          }),
        });
        const graphqlData = await graphqlRes.json();
        totalCommits = graphqlData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
      } catch {
        // ignore
      }
    }

    return {
      login: user.login,
      name: user.name || "Randi Sumitro",
      bio: user.bio || "Full Stack Developer | IoT Engineer | ML Researcher",
      avatarUrl: user.avatar_url,
      htmlUrl: user.html_url,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      totalStars,
      totalCommits,
      topLanguages,
      location: user.location,
      blog: user.blog,
    };
  } catch {
    // Fallback static data if API fails
    return {
      login: "randisumitro",
      name: "Randi Sumitro",
      bio: "Full Stack Developer | IoT Engineer | ML Researcher",
      avatarUrl: "https://avatars.githubusercontent.com/u/136390141?v=4",
      htmlUrl: "https://github.com/randisumitro",
      followers: 0,
      following: 0,
      publicRepos: 9,
      totalStars: 0,
      totalCommits: 0,
      topLanguages: [
        { language: "Python", count: 5, percentage: 36 },
        { language: "PHP", count: 3, percentage: 27 },
        { language: "JavaScript", count: 2, percentage: 18 },
        { language: "HTML", count: 1, percentage: 9 },
        { language: "Jupyter Notebook", count: 1, percentage: 9 },
      ],
    };
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch repos");

    const repos = await res.json();
    return repos.map(
      (r: {
        id: number;
        name: string;
        full_name: string;
        description: string | null;
        html_url: string;
        homepage: string | null;
        language: string | null;
        stargazers_count: number;
        forks_count: number;
        topics: string[];
        created_at: string;
        updated_at: string;
        size: number;
      }) => ({
        id: r.id,
        name: r.name,
        fullName: r.full_name,
        description: r.description,
        htmlUrl: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stargazersCount: r.stargazers_count,
        forksCount: r.forks_count,
        topics: r.topics || [],
        createdAt: r.created_at,
        updatedAt: r.updated_at,
        size: r.size,
      })
    );
  } catch {
    return [];
  }
}
