import { forumPosts } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreatePostForm } from "./create-post-form";

export default function ForumPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peer Forum</h1>
          <p className="text-muted-foreground">
            Connect, share, and support each other in a moderated space.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Post</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a New Post</DialogTitle>
              <DialogDescription>
                Share your thoughts with the community. Your post will be anonymous if you choose.
              </DialogDescription>
            </DialogHeader>
            <CreatePostForm />
          </DialogContent>
        </Dialog>
      </header>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60%]">Topic</TableHead>
                <TableHead className="hidden text-center md:table-cell">
                  Replies
                </TableHead>
                <TableHead className="hidden text-center md:table-cell">
                  Views
                </TableHead>
                <TableHead className="text-right">Last Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forumPosts.map((post) => {
                const { imageUrl, imageHint } = getPlaceholderImage(
                  post.author.avatarId
                );
                return (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage
                            src={imageUrl}
                            alt={post.author.name}
                            data-ai-hint={imageHint}
                          />
                          <AvatarFallback>
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Link
                            href={`/forum/${post.id}`}
                            className="font-semibold hover:underline"
                          >
                            {post.title}
                          </Link>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              by {post.author.name}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden text-center md:table-cell">
                      {post.replies}
                    </TableCell>
                    <TableCell className="hidden text-center md:table-cell">
                      {post.views}
                    </TableCell>
                    <TableCell className="text-right">
                      {post.createdAt}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
