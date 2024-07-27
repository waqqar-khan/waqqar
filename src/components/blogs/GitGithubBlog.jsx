import '../../App.css';

const GitGithubBlog = () => {
  const qnaList = [
    {
      question: "What is the difference between `git fetch` and `git pull`?",
      answer: "`git fetch` downloads updates from the remote repository but does not merge them into your working branch. `git pull` fetches the updates and merges them into your current branch in one step.",
    },
    {
      question: "How do you resolve merge conflicts in Git?",
      answer: "To resolve merge conflicts, you need to manually edit the files to resolve the differences, then add the resolved files using `git add`, and finally complete the merge with `git commit`.",
    },
    {
      question: "What is the purpose of `.gitignore`?",
      answer: "The `.gitignore` file specifies which files and directories Git should ignore. This is useful for excluding files that do not need to be versioned, such as build artifacts or sensitive information.",
    },
    {
      question: "How do you revert a commit in Git?",
      answer: "To revert a commit, use the `git revert <commit-hash>` command. This creates a new commit that undoes the changes made by the specified commit.",
    },
    {
      question: "What are Git tags and how are they used?",
      answer: "Git tags are used to mark specific points in history as important, usually for releases. Tags can be lightweight or annotated, with annotated tags storing more information like a message and the tagger's name.",
    },
];

    return (
      <div className='blog-container'>
        <h1 className='blog-header'>Git & Github Blog</h1>
        {qnaList.map((qa, index) => (
          <div key={index} className='blog-qaContainer'>
            <h2 className='blog-question'>{qa.question}</h2>
            <p className='blog-answer'>{qa.answer}</p>
          </div>
        ))}
      </div>
    );
  };

export default GitGithubBlog;