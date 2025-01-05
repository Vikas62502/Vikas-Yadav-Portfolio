import Image from "next/image";

export default function GitHubStats() {
    return (
        <div className="flex flex-col items-center space-y-6 mt-8">
            <h2 className="text-2xl font-semibold">GitHub Stats</h2>
            {/* GitHub Profile Stats */}
            <div className="w-full flex justify-center">
                <Image
                    src="https://github-readme-streak-stats.herokuapp.com/?user=vikas62502"
                    alt="GitHub Stats"
                    width={500}
                    height={200}
                    className="rounded-lg shadow-lg"
                />
            </div>
            {/* Top Languages */}
            <div className="w-full flex justify-center">
                <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=vikas62502&show_icons=true&locale=en&layout=compact"
                    alt="Top Languages"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
