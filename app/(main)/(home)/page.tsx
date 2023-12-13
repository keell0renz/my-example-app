import Headline from "@/app/ui/main/home/headline"
import CodeSnippet from "@/app/ui/main/home/code-snippet"

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