// eslint-disable-next-line react/prop-types
const Article = ({ title, text, tags }) => {
    return <div className="alura-card" 
        >
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className=" w-full flex-row justify-end gap-2 hidden sm:flex">
            {
                // eslint-disable-next-line react/prop-types
                tags.map((tag) => <span key={tag} className="alura-tag">{tag}</span>)
            }
        </div>
        <div>

        </div>
        <div className="grid gap-1">
            {
                // eslint-disable-next-line react/prop-types
                text.map((content, index) => <p key={index} className={"text-alura-200 dark:text-gray-400 line-clamp-6 sm:line-clamp-none"}>{content}</p>)
            }
        </div>
      
    </div>
}

export default Article;