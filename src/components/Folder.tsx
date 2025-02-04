import { useState } from "react"
import type { FileItem } from "../lib/mockData"
import { File } from "./File"
import { ChevronRight, ChevronDown, FolderIcon } from "lucide-react"

interface FolderProps {
  folder: FileItem
  level: number
  onFolderClick: (folderId: string) => void
}

export function Folder({ folder, level, onFolderClick }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFolder = () => {
    setIsOpen(!isOpen)
    onFolderClick(folder.id)
  }

  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      <div className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer" onClick={toggleFolder}>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 mr-2 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 mr-2 text-gray-400" />
        )}
        <FolderIcon className="w-5 h-5 mr-2 text-yellow-400" />
        <span>{folder.name}</span>
      </div>
      {isOpen && folder.children && (
        <div>
          {folder.children.map((item) =>
            item.type === "folder" ? (
              <Folder key={item.id} folder={item} level={level + 1} onFolderClick={onFolderClick} />
            ) : (
              <div style={{ marginLeft: `${(level + 1) * 20}px` }} key={item.id}>
                <File file={item} />
              </div>
            ),
          )}
        </div>
      )}
    </div>
  )
}

