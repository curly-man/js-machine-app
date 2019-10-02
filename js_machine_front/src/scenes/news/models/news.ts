export interface NewsModel {
  newsData: DigestCycle[];
}

export interface DigestCycle {
  id: string;
  content: string;
  date: string;
  description: string;
  title: string;
  visible: boolean;
}
