'use client';
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [courses, setCourseData] = useState<any>();

  async function fetchQuery() {
    
    const baseUrl = 'http://localhost:1337/api';
    const response = await fetch(`${baseUrl}/courses`);
    const data = await response.json();
    setCourseData(data);
    console.log(data); 
    return data
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          Hello World
          <Button variant="contained" onClick={fetchQuery}>
            Fetch Data
          </Button>
        </div>
      </main>
    </div>
  );
}
