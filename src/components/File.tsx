import type { FileItem } from "../lib/mockData"
import { FileIcon } from "lucide-react"

interface FileProps {
  file: FileItem
}

export function File({ file }: FileProps) {
  return (
    <div className="flex items-center p-2 hover:bg-gray-800 rounded">
      <FileIcon className="w-5 h-5 mr-2 text-blue-400" />
      <span>{file.name}</span>
    </div>
  )
}

