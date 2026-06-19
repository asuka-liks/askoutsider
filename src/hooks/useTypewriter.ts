import { useState, useEffect, useCallback } from 'react';

const words: string[] = [
  'Building things that matter.',
  'Exploring the unknown.',
  'Writing code & poetry.',
  'Always the outsider, never the follower.',
];

export function useTypewriter(phrases: string[] = words, typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (text.length < currentPhrase.length) {
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            // Pause at full phrase, then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
          }
        } else {
          // Deleting
          if (text.length > 0) {
            setText(currentPhrase.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}