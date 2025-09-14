import { ChatMessages } from "./chat-messages";

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground">
          Your confidential space to talk and get initial support.
        </p>
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatMessages />
      </div>
    </div>
  );
}
