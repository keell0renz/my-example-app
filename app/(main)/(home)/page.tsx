import Headline from "../ui/headline"
import CodeSnippet from "../ui/code-snippet"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <div className="mt-48">
            <Headline />
            <div className="mt-10 flex justify-center">
                <CodeSnippet />
            </div>
        </div>
    </div>
  )
}