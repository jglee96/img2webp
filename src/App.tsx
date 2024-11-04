import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useRef, useState } from "react";

export default function App() {
  const [images, setImages] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files === null || files.length === 0) return;

    setImages((prev) => [...prev, ...files]);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <h1>Image to WebP</h1>
      <Label>Upload Images</Label>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        aria-describedby="file-upload-description"
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Button>Convert All</Button>
        <Button>Delete All</Button>
        <Button>Download All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {images.map((f) => (
          <Card key={f.lastModified}>
            <CardHeader>
              <CardTitle>{f.name}</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
              <Button>Convert</Button>
              <Button>Delete</Button>
              <Button>Download</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
