import { resources } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AudioWaveform, FileText, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPlaceholderImage } from "@/lib/utils";

function ResourceIcon({ type }: { type: "Article" | "Video" | "Audio" }) {
  if (type === "Article") return <FileText className="h-4 w-4" />;
  if (type === "Video") return <Video className="h-4 w-4" />;
  if (type === "Audio") return <AudioWaveform className="h-4 w-4" />;
  return null;
}

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Resource Library</h1>
        <p className="text-muted-foreground">
          Curated psychoeducational content for your well-being.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const { imageUrl, imageHint } = getPlaceholderImage(resource.imageId);
          return (
            <Card
              key={resource.id}
              className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
            >
              <Link href={`/resources/${resource.id}`} className="block">
                <Image
                  src={imageUrl}
                  alt={resource.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={imageHint}
                />
              </Link>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">{resource.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ResourceIcon type={resource.type} />
                    <span>{resource.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  <Link href={`/resources/${resource.id}`}>{resource.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>
                  {resource.content.substring(0, 100)}...
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/resources/${resource.id}`}
                  className="flex items-center text-sm font-semibold text-primary"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
