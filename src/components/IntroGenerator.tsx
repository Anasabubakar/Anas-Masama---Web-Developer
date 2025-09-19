'use client';

import { useState, useTransition, useMemo } from 'react';
import { generatePersonalizedIntro } from '@/ai/flows/generate-personalized-intro';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const allKeywords = [
  { id: 'king', label: 'Live like a king' },
  { id: 'love', label: 'Love fearlessly' },
  { id: 'work', label: 'Build a legacy' },
  { id: 'agile', label: 'Agile Development' },
  { id: 'user-centric', label: 'User-Centric Design' },
  { id: 'performance', label: 'Performance Optimization' },
];

export function IntroGenerator() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>(['work', 'user-centric']);
  const [introduction, setIntroduction] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const handleCheckboxChange = (keywordId: string, checked: boolean) => {
    setSelectedKeywords(prev =>
      checked ? [...prev, keywordId] : prev.filter(id => id !== keywordId)
    );
  };

  const handleSubmit = async () => {
    startTransition(async () => {
      if (selectedKeywords.length === 0) {
        setIntroduction("Please select at least one keyword to generate an introduction.");
        return;
      }
      const result = await generatePersonalizedIntro({ keywords: selectedKeywords });
      setIntroduction(result.introduction);
    });
  };

  const displayedIntro = useMemo(() => {
    if (isPending) return "Generating...";
    if (introduction) return introduction;
    return "Select keywords and click 'Generate' to create a personalized intro about me.";
  }, [isPending, introduction]);

  return (
    <Card className="bg-background/70 backdrop-blur">
      <CardContent className="p-6">
        <p className="text-center text-muted-foreground mb-4 font-code">
          {displayedIntro}
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6">
          {allKeywords.map(keyword => (
            <div key={keyword.id} className="flex items-center space-x-2">
              <Checkbox
                id={keyword.id}
                checked={selectedKeywords.includes(keyword.id)}
                onCheckedChange={(checked) => handleCheckboxChange(keyword.id, !!checked)}
              />
              <Label htmlFor={keyword.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {keyword.label}
              </Label>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Generate AI Intro
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
