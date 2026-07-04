'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { TOPIC_GROUPS } from '@/lib/constants/topics';

interface Props {
  selected: string[];
  onChange: (topics: string[]) => void;
}

export function TopicCheckboxGroup({ selected, onChange }: Props) {
  const toggle = (id: string) => {
    onChange(selected.includes(id) ? selected.filter(t => t !== id) : [...selected, id]);
  };

  return (
    <div className="space-y-4">
      {Object.entries(TOPIC_GROUPS).map(([group, topics]) => (
        <div key={group}>
          <p className="text-sm font-semibold text-muted-foreground mb-2">{group}</p>
          <div className="space-y-2">
            {topics.map(topic => (
              <div key={topic.id} className="flex items-center gap-2">
                <Checkbox
                  id={topic.id}
                  checked={selected.includes(topic.id)}
                  onCheckedChange={() => toggle(topic.id)}
                />
                <Label htmlFor={topic.id}>{topic.label}</Label>
              </div>
            ))}
          </div>
          <Separator className="mt-3" />
        </div>
      ))}
    </div>
  );
}