import { Octokit } from "octokit";
import RepoCard from "./RepoCard";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

const headers = {
    'X-GitHub-Api-Version': '2022-11-28'
};

const pins = [
    "audio-to-image",
    "imagefinder",
    "LENR.ai",
    "wild-lens",
    "virtual-memory-management",
    "scheduler"
];

const PinnedRepos = async () => {
    try {
        const res = await octokit.request('GET /users/{username}/repos', {
            username: 'rishavroy97',
            per_page: 60,
            headers: headers
        });

        const promisedData = Promise.all(
            res.data
                .filter(repo => pins.includes(repo.name))
                .map(async (repo) => {
                    const langRes = await octokit.request(repo.languages_url, { headers: headers });
                    return {
                        ...repo,
                        languages: Object.keys(langRes.data)
                    };
                }));

        const results = await promisedData;

        const data = results
            .map(repo => ({
                id: repo.id,
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                stack: repo.languages
            }));

        return (
            <ul className="grid grid-cols-2 gap-8">
                {data.map((repo: any) => (
                    <li key={repo.id}>
                        <RepoCard repo={repo} />
                    </li>
                ))}
            </ul>
        );

    } catch (error: any) {
        if (error.status)
            console.error("Error in fetching projects", error);
        return <h4>Error Fetching Projects 😞</h4>;
    }
};

export default PinnedRepos;
