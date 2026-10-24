import { Heart, Home, Sparkles, type LucideIcon } from 'lucide-react';

export interface TherapyService {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  format: string;
  icon: LucideIcon;
}

export class ServiceCatalog {
  private readonly items: TherapyService[] = [
    {
      id: 'individual',
      eyebrow: 'Pausa para você',
      title: 'Sessão individual',
      description: 'Um encontro dedicado à presença, ao relaxamento e ao cuidado integral, respeitando seu momento e seus limites.',
      format: 'Presencial ou online',
      icon: Heart,
    },
    {
      id: 'journey',
      eyebrow: 'Cuidado continuado',
      title: 'Jornada de equilíbrio',
      description: 'Uma sequência de encontros para quem deseja incluir o autocuidado energético de forma mais constante na rotina.',
      format: 'Plano personalizado',
      icon: Sparkles,
    },
    {
      id: 'distance',
      eyebrow: 'De onde você estiver',
      title: 'Atendimento à distância',
      description: 'Uma experiência de cuidado guiada para você desacelerar e cultivar mais consciência no conforto do seu espaço.',
      format: 'Online',
      icon: Home,
    },
  ];

  list(): TherapyService[] {
    return [...this.items];
  }
}

export class ContactLinkBuilder {
  constructor(private readonly therapistName: string) {}

  whatsapp(context = 'uma sessão de terapia energética'): string {
    const message = `Olá, ${this.therapistName}! Vi seu site e gostaria de saber mais sobre ${context}.`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
}
