import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function LetterReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
}: Props) {
  const letters = useMemo(() => Array.from(text), [text]);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', fontSize: '120px' }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          style={{ display: 'inline-block' }}
          initial={{ y: '100%', opacity: 0, rotateX: -90 }}
          whileInView={{ y: '0%', opacity: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            delay: delay + i * stagger,
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
