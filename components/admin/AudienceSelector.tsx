'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TopicCheckboxGroup } from '@/components/shared/TopicCheckboxGroup';
import { Separator } from '@/components/ui/separator';
import { TOPIC_GROUPS } from '@/lib/constants/topics';

interface Props {
  segment: string;
  onSegmentChange: (v: string) => void;
  topics: string[];
  onTopicsChange: (topics: string[]) => void;
}

export function AudienceSelector({ segment, onSegmentChange, topics, onTopicsChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Target Segment</label>
        <Select value={segment} onValueChange={onSegmentChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subscribers</SelectItem>
            <SelectItem value="trust_code">Trust Code Solutions</SelectItem>
            <SelectItem value="arvi_yatra">Arvi Yatra</SelectItem>
            <SelectItem value="easy_pc">Easy to PC</SelectItem>
            <SelectItem value="custom">Custom Topics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {segment === 'custom' && (
        <>
          <Separator />
          <div>
            <label className="text-sm font-medium">Specific Topics</label>
            <p className="text-xs text-muted-foreground mb-2">
              Only subscribers with at least one matching topic will receive this.
            </p>
            <div className="space-y-4 mt-2">
              {Object.entries(TOPIC_GROUPS).map(([group, topicsList]) => (
                <div key={group}>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{group}</p>
                  <div className="flex flex-wrap gap-4">
                    {topicsList.map(topic => (
                      <div key={topic.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={topic.id}
                          checked={topics.includes(topic.id)}
                          onChange={() => {
                            onTopicsChange(
                              topics.includes(topic.id)
                                ? topics.filter(t => t !== topic.id)
                                : [...topics, topic.id]
                            );
                          }}
                        />
                        <label htmlFor={topic.id} className="text-sm">
                          {topic.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}