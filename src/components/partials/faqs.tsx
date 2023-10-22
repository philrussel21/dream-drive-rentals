'use client';

import {Accordion, Heading, Text} from '..';

type FAQ = {
  question: string;
  answer: string;
};

type FAQsProperties = {
  heading: string;
  faqs: FAQ[];
};

const FAQs = ({heading, faqs}: FAQsProperties): JSX.Element => (
  <div className="py-10">
    <Heading
      label={heading}
      variant="heading-two"
      element="h2"
      className="text-center"
    />
    <div className="mt-10">
      <Accordion.Container>
        {faqs.map((faq) => (
          <Accordion.Panel label={faq.question} key={faq.question}>
            <div className="text-black">
              <Text>{faq.answer}</Text>
            </div>
          </Accordion.Panel>
        ))}
      </Accordion.Container>
    </div>
  </div>
);

export default FAQs;

export type {FAQsProperties as FAQsProps};
