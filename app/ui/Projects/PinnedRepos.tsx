import RepoCard from "@/app/ui/Projects/RepoCard";
import asl from "@/public/projects/asl.jpg";
import audio from "@/public/projects/audio.png";
import lenr from "@/public/projects/lenr.jpg";
import db from "@/public/projects/db.png";
import imagefinder from "@/public/projects/web_crawler.jpg";
import scheduler from "@/public/projects/scheduler.webp";
import vmm from "@/public/projects/virtual-memory-management.webp";
import wildlens from "@/public/projects/wild-lens.jpg";
import { StaticImageData } from "next/image";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

const headers = {
    'X-GitHub-Api-Version': '2022-11-28'
};

type PinnedReposType = {
    [key: string]: {
        name: string;
        image: StaticImageData;
    };
};

const pinnedRepos: PinnedReposType = {
    "ASL-Interpreter": {
        name: "ASL Interpreter",
        image: asl
    },
    "LENR.ai": {
        name: "LENR.ai",
        image: lenr
    },
    "replicated-concurrent-db": {
        name: "Replicated Concurrent Database",
        image: db
    },
    "audio-to-image": {
        name: "Audio2Image",
        image: audio
    },
    "scheduler": {
        name: "Process Scheduler",
        image: scheduler
    },
    "imagefinder": {
        name: "Image Finder",
        image: imagefinder
    },
    "wild-lens": {
        name: "Wild Lens",
        image: wildlens
    },
    "virtual-memory-management": {
        name: "Virtual Memory Management",
        image: vmm
    }
};

const PinnedRepos = async () => {
    try {
        const res = await octokit.request('GET /users/{username}/repos', {
            username: 'rishavroy97',
            per_page: 60,
            headers: headers
        });

        const promisedData = Promise.all(
            res.data
                .filter(repo => Object.keys(pinnedRepos).includes(repo.name))
                .map(async (repo) => {
                    const langRes = await octokit.request(repo.languages_url, { headers: headers });
                    return {
                        ...repo,
                        languages: Object.keys(langRes.data)
                    };
                })
        );

        const results = await promisedData;

        const data = results
            .map(repo => ({
                id: repo.id,
                name: pinnedRepos[repo.name].name,
                url: repo.html_url,
                description: repo.description,
                stack: repo.languages,
                image: pinnedRepos[repo.name].image
            }));

        return (
            <ul className="flex flex-wrap -mx-2">
                {data.map((repo: any) => (
                    <li key={repo.id} className="flex-1 px-2 mb-16">
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
