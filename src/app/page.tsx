"use client";

import { useState } from "react";
import { mockData, type FileItem } from "../lib/mockData";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "~/components/ui/button";
import { Upload, FolderIcon, FileIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function Home() {
  const [currentPath, setCurrentPath] = useState<FileItem[]>([
    { id: "root", name: "My Drive", type: "folder" },
  ]);

  const handleItemClick = (item: FileItem) => {
    if (item.type === "folder") {
      setCurrentPath([...currentPath, item]);
    }
  };

  const getCurrentFolderContents = (): FileItem[] => {
    let contents = mockData;
    for (let i = 1; i < currentPath.length; i++) {
      const folder = contents.find((item) => item.id === currentPath[i]?.id);
      if (folder?.children) {
        contents = folder.children;
      } else {
        break;
      }
    }
    return contents;
  };

  const handleUpload = () => {
    // Placeholder for upload functionality
    console.log("Upload button clicked");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Borsch Drive</h1>
        <div className="mb-4 flex items-center justify-between">
          <Breadcrumb path={currentPath} onNavigate={setCurrentPath} />
          <Button
            onClick={handleUpload}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCurrentFolderContents().map((item) => (
              <TableRow
                key={item.id}
                className="cursor-pointer hover:bg-gray-800"
                onClick={() => handleItemClick(item)}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {item.type === "folder" ? (
                      <FolderIcon className="mr-2 h-5 w-5 text-yellow-400" />
                    ) : (
                      <FileIcon className="mr-2 h-5 w-5 text-blue-400" />
                    )}
                    {item.name}
                  </div>
                </TableCell>
                <TableCell>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </TableCell>
                <TableCell>{item.size ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
