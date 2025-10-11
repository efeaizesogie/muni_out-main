import Image from "next/image";
import React from "react";

export const generalFaqItems = [
  {
    question: "What is Muni?",
    answer: "Muni is an AI-powered platform that streamlines customer service operations for municipalities. It allows residents to create service requests, make payments, receive important notifications, and access relevant information about their municipality quickly, easily, and reliably. Muni consists of an admin dashboard, a resident web portal, and a resident mobile app, all of which can be customized or integrated with existing systems to optimize customer service operations, enhance communication, and improve customer satisfaction without requiring additional resources."
  },
  {
    question: "What are Muni’s key features?",
    answer: "Muni offers several key features: Resident Relationship Management (a CRM for municipalities), Service Requests (submission and tracking capability), Notifications (email, push, SMS, or in-app notifications), Curbside Collection Reminders, Payments (infrastructure for various resident payments), and a Knowledge Base (AI-powered repository of municipal information)."
  },
  {
    question: "Tell me more about Resident Relationship Management",
    answer: "Muni’s Resident Relationship Management (RRM) feature acts as a CRM specifically for municipalities. It stores data relating to residents’ profiles, including their service requests, payment history, and communication logs, allowing Muni admins to monitor interactions and analyze data."
  },
  {
    question: "How do Service Requests work?",
    answer: "Muni’s service request process allows residents to submit reports via a user-friendly mobile app or web portal. These reports can cover a wide variety of issues such as crime, maintenance needs, or service interruptions. Residents can track the status of their requests in real-time, streamlining workflow for municipal staff and enhancing transparency."
  },
  {
    question: "How do notifications work?",
    answer: "Muni’s notification system keeps residents informed through push notifications, in-app alerts, emails, and SMS messages. Muni admins can send targeted alerts based on location or other criteria instantaneously, providing timely and geographically relevant updates."
  },
  {
    question: "How does Curbside Collection work?",
    answer: "Muni provides personalized garbage collection schedules for residents based on their listed address, along with reminders for upcoming collection days. It also alerts residents to any changes or delays to their collection schedule."
  },
  {
    question: "How does the Knowledge Base work?",
    answer: "Muni’s Knowledge Base is a repository of information specific to your municipality, collected during the onboarding process. When residents submit inquiries related to information in the knowledge base, they receive quick and accurate responses powered by Muni’s AI chatbot."
  }
];

export const pricingFaqItems = [
  {
    question: "How does pricing work?",
    answer: "Muni's pricing is designed to be straightforward and scalable to meet the varying needs of different municipalities. The base subscription fee is $2,000 per month, which includes up to 10 admin users. If your municipality requires more than 10 admin users, there is an additional cost of $100 per month for each extra user. <br/><br/> Additionally, there is a one-time onboarding fee, which typically ranges from $10,000 to $25,000. This fee varies depending on the scope of the integration and customization required to tailor Muni to your municipality's specific needs."
  },
  {
    question: "Is there an onboarding fee?",
    answer: "Muni’s onboarding fee is determined by the size of your municipality and the specific scope of your onboarding process. <br/><br/>Depending on the volume of discovery sessions, language model training, and staff education necessary to ensure your organisation is properly integrated with Muni, the onboarding fee will vary."
  },
  {
    question: "How does Muni save us money?",
    answer: "Muni can save your municipality money in several ways:<br/><br/><ol><li><strong>Improved Efficiency</strong>: Muni can handle a large volume of resident inquiries simultaneously, optimising resource allocation and decreasing response times.</li><br/><li><strong>Cost reduction</strong>: By automating routine tasks and inquiries, Muni can reduce staffing costs associated with customer support and other manual processes.</li><br/><li><strong>Customer Satisfaction</strong>: In tandem with its efficient service, Muni operates on a 24/7 basis, contributing to higher customer satisfaction by accommodating requests at any time.</li><br/><li><strong>Scalability</strong>: Muni can efficiently handle high volumes of resident inquiries without causing any significant need for additional resources.</li><br/><li><strong>Data-Driven Insights</strong>: Muni can gather and analyze data on resident interactions, providing you with valuable insights to inform any decision-making processes or service enhancements.</li></ol>"
  },
  {
    question: "Are there penalties for cancelling or modifying a subscription?",
    answer: "There are no penalties for cancelling your Muni subscription. However, please note that our subscription plans are charged on a yearly basis. If you choose to cancel your Muni subscription before the end of your current billing period, no refunds will be issued."
  }
];

export const functionalityFaqItems = [
  {
    question: "Is Muni white-labeled for us?",
    answer: "Yes! As part of the onboarding process, our team will white-label Muni for you at no additional cost, ensuring seamless consistency with your existing brand and identity."
  },
  {
    question: "Is there a demo we can try?",
    answer: "If you are interested in trying a demo version of Muni, [schedule a call](https://calendar.app.google/8KeUpeZEfLJQoKFT6) with us and we will coordinate an opportunity for you to do so."
  },
  {
    question: "Is there a limit on residential users?",
    answer: "There is no limit for residential users on Muni!"
  },
  {
    question: "Is there a limit to the amount of staff we can add?",
    answer: "There is no limit for additional Admin users, but each staff member added beyond the initial 10 alloted by your Muni subscription must be purchased at $100 per-user per-month."
  },
  {
    question: "What if I need a feature that Muni doesn’t have?",
    answer: "Muni clients have the ability to request custom features, enabling them to potentially tailor Muni to meet any unique or individual needs.<br/><br/> If approved, clients will be charged an hourly rate for any labour undertaken to fulfil the request. However, be aware that some requests may be declined if they deviate too far from Muni’s core purpose and functionality."
  },
  {
    question: "Is Muni cloud-hosted or available on-premises?",
    answer: "Muni is cloud-hosted by [DigitalOcean](https://www.digitalocean.com), and is not available as an on-premises solution."
  },
  {
    question: "Can muni integrate w/ X?",
    answer: "Muni has been built with flexibility in mind, meaning modular integration with other platforms is possible, as long as there is an existing API and documentation available. Nevertheless, each integration is carefully reviewed on a case-by-case basis to evaluate its potential impact on the Muni platform.<br/><br/> Note: in some scenarios, integration may not be feasible even if an API and documentation is present. This may be due to the limitations of the API itself, conflicts between the API and Muni’s existing infrastructure, or if integration will affect one or more of Muni’s core functionalities."
  },
  {
    question: "What level of support does Muni provide for training staff?",
    answer: "Our team offers a comprehensive training program prior to integration, including (but not limited to) interactive educational sessions, video tutorials, and a train-the-trainer approach.<br/><br/> If you or your staff encounter any issues post-integration, we also offer ongoing assistance, conduct regular check-ins, and update our training materials frequently to keep our clients up-to-date with any new features or best practices."
  },
  {
    question: "Does Muni offer any analytics or reporting?",
    answer: "Yes! Depending on the features you enable within your dashboard, Muni can provide analytics and reporting on a host of topics, including service ticket volume, average ticket resolution time and a full activity log that tracks all user interactions within the platform."
  },
  {
    question: "How reliable is the platform?",
    answer: "Muni boasts an uptime of over 99.9% — ensuring an extremely high degree of reliability."
  },
  {
    question: "How can we contact you?",
    answer: "You can email us at [alex@getmuni.co](mailto:alex@getmuni.co) or [schedule a meeting](https://calendar.app.google/8KeUpeZEfLJQoKFT6) to contact us directly."
  },
  {
    question: "Can we upload files to train the chatbot?",
    answer: "At present moment, chatbot training is completed by the Muni team during the onboarding phase, however, we are currently developing an update that will allow admins to have self-serve access to model training."
  },
  {
    question: "How do you collect payments?",
    answer: "We typically use Stripe to collect payments, but the Muni team can easily integrate with any pre-existing payment systems you have."
  },
  {
    question: "Is there a fee for collecting payments?",
    answer: "Muni does not collect any additional fee when processing payments, however municipalities are subject to the standard 2.9% + 30 cent fee from Stripe when collecting payments from residents."
  }
];

export const technologyFaqItems = [
  {
    question: "What is ChatGPT?",
    answer: "ChatGPT is an AI language model that can understand and generate human-like text based on received inputs. It can discuss a wide range of topics, answer questions, provide explanations, and even engage in productive tasks like content creation or chatbot development."
  },
  {
    question: "How does the AI work?",
    answer: "Muni's AI works by understanding resident queries, searching for relevant answers in the knowledge base, and providing accurate responses. It's trained on municipal data and continuously improves over time. This enables Muni to interpret resident questions accurately and provide helpful responses quickly and efficiently."
  },
  {
    question: "What is the tech stack?",
    answer: "Muni is hosted on DigitalOcean, and utilises ChatGPT for its AI conversational capabilities. The app was built using React Native, and the web applications built using Next.js."
  },
  {
    question: "Are your servers domestically hosted?",
    answer: "Muni can host servers in both the US and Canada depending on the location of the client."
  },
  {
    question: "How do notifications work?",
    answer: "Notifications in Muni are sent through various channels, including push notifications, in-app notifications, and email. Residents can opt to receive notifications based on their preferences and the type of information they want to stay updated on. Additionally, notifications can be triggered based on GPS location, ensuring that residents receive relevant information tailored to their specific area. These notifications are triggered based on relevant events, such as updates on service requests, important announcements from the municipality, or reminders for upcoming events."
  },
  {
    question: "We already have a CRM…",
    answer: "Muni was built with modularity in mind, meaning each component of Muni's product suite — the admin dashboard, web portal, and mobile app — can be decoupled and used independently. If you have an existing CRM, the Muni team can provide access to only the web portal or mobile app and integrate with your existing systems without requiring you to alter your existing workflow."
  },
  {
    question: "What type of content can we use to train the chatbot?",
    answer: "The chatbot can be trained on any and all municipal data, including information on the website, as well as any public domain information including information on PDF forms and data. There is no technical limitation on what the chatbot can be trained on, and defining the scope of content that the chatbot will be trained on is part of the onboarding process."
  },
  {
    question: "Do you retrain the chatbot automatically when the website content changes?",
    answer: "Yes — the chatbot can be automatically updated when website content changes. Defining the frequency of retraining and updating content is part of the onboarding process and decided in collaboration with municipality stakeholders."
  }
];

export const securityFaqItems = [
  {
    question: "What is your privacy policy?",
    answer: "Our privacy policy is available [here](https://www.getmuni.co/MUNI-privacy-policy.pdf)!"
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "To ensure data security and privacy, Muni adheres to industry-standard practices. You can review our detailed security and privacy policy [here](https://www.getmuni.co/MUNI-privacy-policy.pdf)."
  },
  {
    question: "Is it Soc2 compliant?",
    answer: "We are currently in the process of obtaining Soc2 compliance."
  },
  {
    question: "Where can we see your SLA?",
    answer: "Our Service Level Agreement is available here."
  },
  {
    question: "What encryption methods does Muni use?",
    answer: "Muni employs AES (Advanced Encryption Standard), an industry-standard encryption method, to secure resident data and communications."
  }
];

export const processFaqItems = [
  {
    question: "I want to get started. What's the next step?",
    answer: "Great! Feel free to book a call with our team [here](https://calendar.app.google/8KeUpeZEfLJQoKFT6)."
  }
];

