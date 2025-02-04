import { ChevronRight } from "lucide-react"
import type { FileItem } from "../lib/mockData"

interface BreadcrumbProps {
  path: FileItem[]
  onNavigate: (newPath: FileItem[]) => void
}

export function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <div className="flex items-center text-sm text-gray-400 overflow-x-auto">
      {path.map((item, index) => (
        <div key={item.id} className="flex items-center whitespace-nowrap">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-1 flex-shrink-0 text-gray-500" />}
          <span
            className="cursor-pointer hover:text-gray-200 truncate max-w-[150px]"
            onClick={() => onNavigate(path.slice(0, index + 1))}
            title={item.name}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

