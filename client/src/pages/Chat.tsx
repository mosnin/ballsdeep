import { Terminal } from "@/components/chat/Terminal";

export default function Chat() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Chat with Shevoki
      </h1>
      <div className="max-w-3xl mx-auto">
        <Terminal />
      </div>
    </div>
  );
}
