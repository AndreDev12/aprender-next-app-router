export interface Blog {
  id: number;
  title: string;
  content: Content;
  author: string;
  date: Date;
  category: string;
}

export enum Content {
  LoremIpsumDolorSitAmetConsecteturAdipiscingElit = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
}
