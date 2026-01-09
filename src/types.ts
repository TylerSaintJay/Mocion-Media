
// Fix: Added React import to provide the React namespace for type definitions
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isEmphasized?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  image: string;
}
