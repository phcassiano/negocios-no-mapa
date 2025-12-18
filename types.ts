import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  message: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  quote: string;
  rating: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}