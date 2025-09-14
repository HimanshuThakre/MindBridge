import { resources } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AudioWaveform, FileText, Video } from "lucide-react";
import { getPlaceholderImage } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResourceSummary } from "./resource-summary";

function ResourceIcon({ type }: { type: "Article" | "Video" | "Audio" }) {
  if (type === "Article")
    return <FileText className="h-5 w-5 text-muted-foreground" />;
  if (type === "Video")
    return <Video className="h-5 w-5 text-muted-foreground" />;
  if (type === "Audio")
    return <AudioWaveform className="h-5 w-5 text-muted-foreground" />;
  return null;
}

export default function ResourceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const resource = resources.find((r) => r.id === params.id);

  if (!resource) {
    notFound();
  }

  const { imageUrl, imageHint } = getPlaceholderImage(resource.imageId);

  return (
    <div className="mx-auto max-w-4xl">
      <article className="space-y-8">
        <header className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            {resource.category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {resource.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ResourceIcon type={resource.type} />
              <span className="font-medium">{resource.type}</span>
            </div>
            {resource.duration && (
              <>
                <span>•</span>
                <span>{resource.duration}</span>
              </>
            )}
          </div>
        </header>

        <Image
          src={imageUrl}
          alt={resource.title}
          width={1200}
          height={675}
          className="aspect-video w-full rounded-lg border object-cover shadow-md"
          data-ai-hint={imageHint}
          priority
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="prose prose-stone dark:prose-invert md:col-span-2">
            <p>{resource.content}</p>
          </div>
          <aside className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Takeaways</CardTitle>
              </CardHeader>
              <CardContent>
                <ResourceSummary resourceText={resource.content} />
              </CardContent>
            </Card>
          </aside>
        </div>

      </article>
    </div>
  );
}
