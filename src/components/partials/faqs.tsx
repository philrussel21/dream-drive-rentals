'use client';

import {Accordion} from '..';

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
    <h2 className="text-center">{heading}</h2>
    <div className="mt-6">
      <Accordion.Container>
        {faqs.map((faq) => (
          <Accordion.Panel label={faq.question} key={faq.question}>
            <div className="text-black">
              <p>{faq.answer}</p>
            </div>
          </Accordion.Panel>
        ))}
      </Accordion.Container>
    </div>
  </div>
);

export default FAQs;

export type {FAQsProperties as FAQsProps};
