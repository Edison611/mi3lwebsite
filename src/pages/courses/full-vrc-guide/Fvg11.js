import ProgressBar from "../components/ProgressBar";
// import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
// import FillBlank from "../components/FillBlank";
import Mcq from "../components/Mcq";
import Activity from "../components/Activity";
// import im1 from './images/ch11-1.png'; 

const Fvg11 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 11;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Liveshare and GitHub</h1>
            <p className="text-lg leading-relaxed mb-8">In this chapter, you'll learn about two essential tools for collaborative development: Visual Studio Code Liveshare and GitHub. These tools help you work together with your team and manage your code effectively.</p>
            <div className="flex">
                <img className="size-40 mx-auto" src="https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare/1.0.5932/1718214903014/Microsoft.VisualStudio.Services.Icons.Default" alt="Liveshare"></img>
                <img className="size-40 mx-auto"src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub"></img>
            </div>
            <h2 className="text-2xl mt-5 mb-5 font-bold">Liveshare</h2>
            <p className="text-lg leading-relaxed mb-8">Liveshare allows you to share your code and work on it in real-time with your teammates. You can edit code together, debug, and even share terminals.</p>
            <ol className="text-lg leading-relaxed ml-10 list-decimal">
                <li className="text-lg leading-relaxed">Install Liveshare Extension: Go to the Extensions view in Visual Studio Code and search for "Live Share". Install the extension.</li>
                <li className="text-lg leading-relaxed">Start a Session: Click on the Liveshare icon in the sidebar and select "Start collaboration session". This will generate a link that you can share with your teammates.</li>
                <li className="text-lg leading-relaxed">Join a Session: Your teammates can join the session by clicking on the link you shared. They will be able to see and edit your code in real-time.</li>
            </ol>

            <h2 className="text-2xl mt-10 mb-5 font-bold">GitHub</h2>
            <p className="text-lg leading-relaxed mb-8">GitHub is a platform for version control and collaboration. It allows you to manage and track changes to your codebase, collaborate with others, and maintain a history of your project.</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Creating a Repository: A repository is where your project's files are stored. You can create a new repository on GitHub by clicking on the "New" button on the GitHub homepage and following the prompts.</li>
                <li className="text-lg leading-relaxed">Cloning a Repository: To work on a repository locally, you need to clone it. This can be done by clicking on the "Code" button in the repository page and copying the URL. Then, in your terminal, use the command:
                <CodeBlock codeString={`git clone <repository-url>`} language="bash"/>
                </li>
                <li className="text-lg leading-relaxed">Committing Changes: When you make changes to your project, you need to commit them to your repository. This can be done using the following commands:
                <CodeBlock codeString={`git add .\ngit commit -m "Your commit message"`} language="bash"/>
                </li>
                <li className="text-lg leading-relaxed">Pushing Changes: After committing your changes, you need to push them to the remote repository on GitHub:
                <CodeBlock codeString={`git push origin main`} language="bash"/>
                </li>
            </ul>
            <p className="text-lg leading-relaxed mt-5 mb-8">NOTE: The above practices are only recommended for beginners. Pushing directly to the main branch is something you will almost never see in industry practices.</p>
            <h2 className="text-2xl mt-10 mb-5 font-bold">GitHub Desktop</h2>
            <p className="text-lg leading-relaxed mt-5 mb-8">Similarily you can download <a className="text-blue-500" href="https://desktop.github.com/download/">Github Desktop</a> which is a GUI version that makes it much easier for beginners to use.</p>
            <img className="mx-auto" alt="Github Desktop" src="https://www.gitkraken.com/wp-content/uploads/2024/02/githubdesktop-1024x704.png"></img>

            <Activity 
              question="Create a new repository for your VRC code on GitHub. Add a README.md file, commit the changes, and push them to GitHub."
              answer={
`// Example steps
1. Create a new repository on GitHub
2. Create a README.md file
3. Add the file and all of your other files to the repository
4. Commit the changes
5. Push the changes to GitHub`
              }
            />

            <Mcq 
              question="What command do you use to add all changes in your local repository to be committed?"
              options={[
                "git commit",
                "git push",
                "git add .",
                "git clone"
              ]}
              correctAnswer="git add ."
            />
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        {/* <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/> */}
      </div>
    );
};

export default Fvg11;
