"use client";

import { useEffect, useState } from "react";
import { summarizeResource } from "@/ai/flows/summarize-resource";
import { Skeleton } from "@/components/ui/skeleton";

export function ResourceSummary({ resourceText }: { resourceText: string }) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSummary() {
      try {
        setIsLoading(true);
        const result = await summarizeResource({ resourceText });
        setSummary(result.summary);
      } catch (error) {
        setSummary("Could not generate summary at this time.");
      } finally {
        setIsLoading(false);
      }
    }
    getSummary();
  }, [resourceText]);

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  return <p className="text-sm text-muted-foreground">{summary}</p>;
}
