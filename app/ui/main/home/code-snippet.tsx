"use client"

import { useState, useEffect } from "react"

const commandsList = [
    "magic create my-app",
    "magic develop my-app",
    "magic debug my-app",
    "magic deploy my-app",
]

export default function CodeSnippet() {
    const [commandLine, setCommandLine] = useState("");
    const [commandIndex, setCommandIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      let currentCommand = commandsList[commandIndex];
  
      const typeCommand = () => {
        if (!isDeleting && letterIndex < currentCommand.length) {
          setCommandLine((prev) => prev + currentCommand[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else if (isDeleting && commandLine !== "") {
          setCommandLine((prev) => prev.slice(0, -1));
        } else if (!isDeleting && letterIndex >= currentCommand.length) {
          setIsDeleting(true);
        }
      };
  
      const intervalId = setInterval(typeCommand, isDeleting ? 50 : 100);
  
      return () => clearInterval(intervalId);
    }, [commandIndex, letterIndex, isDeleting, commandLine]);
  
    useEffect(() => {
      if (commandLine === "") {
        setIsDeleting(false);
        setCommandIndex((prev) => (prev + 1) % commandsList.length);
        setLetterIndex(0);
      }
    }, [commandLine]);


    return (
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono" style={{ minHeight: '150px'}}>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ {commandLine}</p>
        </div>
      </aside>
    )
  }