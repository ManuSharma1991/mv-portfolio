import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
