'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  value: string;
  onChange: (html: string) => void;
}

export function NewsletterEditor({ value, onChange }: Props) {
  const [mode, setMode] = useState<'visual' | 'html' | 'preview'>('visual');

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Link.configure({ openOnClick: false })],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <Tabs value={mode} onValueChange={(v) => setMode(v as any)}>
      <TabsList>
        <TabsTrigger value="visual">Visual</TabsTrigger>
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="visual">
        <div className="border rounded-md p-2 min-h-[400px]">
          <div className="flex gap-1 mb-2 border-b pb-2 flex-wrap">
            {[
              { label: 'B', action: () => editor?.chain().focus().toggleBold().run() },
              { label: 'I', action: () => editor?.chain().focus().toggleItalic().run() },
              { label: 'H2', action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run() },
              { label: 'UL', action: () => editor?.chain().focus().toggleBulletList().run() },
            ].map(btn => (
              <Button key={btn.label} variant="outline" size="sm" onClick={btn.action}>{btn.label}</Button>
            ))}
          </div>
          <EditorContent editor={editor} className="prose max-w-none" />
        </div>
      </TabsContent>
      <TabsContent value="html">
        <Textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            editor?.commands.setContent(e.target.value);
          }}
          className="min-h-[400px] font-mono text-sm"
          placeholder="Paste raw HTML..."
        />
      </TabsContent>
      <TabsContent value="preview">
        <div
          className="border rounded-md p-4 min-h-[400px] prose max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </TabsContent>
    </Tabs>
  );
}