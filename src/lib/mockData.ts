export interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  children?: FileItem[]
}

export const mockData: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "2", name: "Resume.pdf", type: "file", size: "1.2 MB" },
      { id: "3", name: "Cover Letter.docx", type: "file", size: "500 KB" },
    ],
  },
  {
    id: "4",
    name: "Photos",
    type: "folder",
    children: [
      { id: "5", name: "Vacation.jpg", type: "file", size: "3.5 MB" },
      { id: "6", name: "Family.png", type: "file", size: "2.7 MB" },
    ],
  },
  { id: "7", name: "Project.zip", type: "file", size: "10.2 MB" },
]

