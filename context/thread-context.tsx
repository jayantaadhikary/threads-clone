import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generate-dummy-data";

export const ThreadContext = createContext<Thread[]>([]);

export const ThreadProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const threads = generateThreads();
    setThreads(threads);
  }, []);

  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};
