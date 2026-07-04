import { Badge } from '@/components/ui/badge';
import { TOPICS } from '@/lib/constants/topics';

interface TopicBadgeProps {
  topic: string;
}

export function TopicBadge({ topic }: TopicBadgeProps) {
  const topicInfo = TOPICS.find(t => t.id === topic);
  return (
    <Badge variant="outline" className="text-xs">
      {topicInfo?.label || topic}
    </Badge>
  );
}