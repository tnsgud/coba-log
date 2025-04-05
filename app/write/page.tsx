import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WritePage() {
  return (
    <div>
      <Input type="text" placeholder="Title" required />
      <Input type="text" placeholder="Subtitle" required />
      <Textarea />
    </div>
  );
}
