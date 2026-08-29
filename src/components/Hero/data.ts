export interface HeroCTA {
  text: string;
  link: string;
  type: 'whatsapp' | 'online';
}

export interface HeroInfoItem {
  text: string;
  icon: 'shield' | 'star' | 'map-pin' | 'phone';
  link?: string;
}

export interface HeroData {
  doctorImage: string;
  doctorName: string;
  badges: string[];
  subtitle: string;
  title: string;
  description: string;
  ctas: HeroCTA[];
  infoItems: HeroInfoItem[];
}

export const heroData: HeroData = {
  doctorImage: "/dr-romulo.png",
  doctorName: "Dr. Rômulo Oliveira",
  badges: ["NOVA LIMA · MG", "VILA DA SERRA", "HOSPITAL BIOCOR"],
  subtitle: "Médico Ortopedista Especialista em Coluna em Nova Lima",
  title: "Dr. Rômulo<br />Oliveira",
  description: "Atendimento no Hospital Biocor - Rede D'Or com foco em cirurgias minimamente invasivas e tratamento de hérnia de disco.",
  ctas: [
    {
      text: "Falar com um Atendente",
      link: "#whatsapp",
      type: "whatsapp",
    },
    {
      text: "Agendamento On-line",
      link: "#agendamento",
      type: "online",
    },
  ],
  infoItems: [
    {
      text: "CRM 73889 · RQE 59057 · TEOT 19406",
      icon: "shield",
    },
    {
      text: "Cirurgia Minimamente Invasiva",
      icon: "star",
    },
    {
      text: "Hospital Biocor - Rede D'Or",
      icon: "map-pin",
    },
    {
      text: "(31) 3289-5000",
      icon: "phone",
      link: "tel:3132895000",
    },
  ],
};
