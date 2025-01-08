export type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
};
