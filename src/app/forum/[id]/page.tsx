import { forumPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getPlaceholderImage } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ForumPostPage({ params }: { params: { id: string } }) {
  const post = forumPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const { imageUrl: authorImageUrl, imageHint: authorImageHint } =
    getPlaceholderImage(post.author.avatarId);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Card>
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={authorImageUrl}
              alt={post.author.name}
              data-ai-hint={authorImageHint}
            />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.createdAt}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{post.content}</p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Comments ({post.comments.length})</h2>
        {post.comments.map((comment, index) => {
          const { imageUrl: commentAuthorImageUrl, imageHint: commentAuthorImageHint } =
            getPlaceholderImage(comment.author.avatarId);
          return (
            <Card key={comment.id}>
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={commentAuthorImageUrl}
                    alt={comment.author.name}
                    data-ai-hint={commentAuthorImageHint}
                  />
                  <AvatarFallback>
                    {comment.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{comment.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.createdAt}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{comment.content}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Separator />

      <div>
        <h3 className="text-xl font-bold mb-4">Add a comment</h3>
        <div className="grid w-full gap-2">
          <Textarea placeholder="Type your comment here." />
          <Button>Post Comment</Button>
        </div>
      </div>
    </div>
  );
}
