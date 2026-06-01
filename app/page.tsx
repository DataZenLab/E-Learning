import { Typography } from "@mui/material";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className={style.main}>
        <div className={style.description}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Next.js with Material-UI!
          </Typography>
        </div>
      </main>
    </div>
  );
}

