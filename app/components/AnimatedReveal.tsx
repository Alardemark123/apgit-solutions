'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export default function AnimatedReveal({
  children,
  delay = 0,
  direction = 'right',
}: Props) {
  const ref = useRef(null);

  const [xStart, yStart] = direction === 'left'
    ? [-100, 0]
    : direction === 'right'
    ? [100, 0]
    : direction === 'top'
    ? [0, -100]
    : direction === 'bottom'
    ? [0, 100]
    : [0, 0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xStart, y: yStart }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay }}
    >
      {children}
    </motion.div>
  );
}
