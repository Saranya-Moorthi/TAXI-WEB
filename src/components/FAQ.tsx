import { ChevronDown } from "lucide-react";
import { useState } from "react";
import bgImage from "../assets/final.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How to book a ride with Easy Maxi Cabs?",
      answer: "You can book a ride through our website, call us at (03) 9075 4956, or use our online booking system or email us on book@easymaxicabs.com.au.",
    },
    {
      question: "How many fit in a maxi taxi?",
      answer: "A maxi taxi can typically fit 10 to 11 passengers. This makes it perfect for larger groups or families traveling together.",
    },
    {
      question: "Can you pre book a maxi taxi?",
      answer: "Yes, you can pre-book a maxi cab taxi. Just fill the form online or call us or email us, especially during peak hours or for early morning trips.",
    },
    {
      question: "Can you fit push bikes or big surfboards in your van?",
      answer: "Yes, our vans are spacious and can accommodate bikes and big surfboards. This makes them perfect for outdoor enthusiasts and surfers who need extra room for their gear.",
    },
    {
      question: "Do you provide baby seats?",
      answer: "Yes, we offer taxis with car seats for safe and comfortable travel with children. Just mention your requirements when booking.",
    },
    {
      question: "What areas do you service?",
      answer: "We service all Melbourne suburbs including the airport, CBD, Port Phillip, Eastern suburbs, Mornington Peninsula, and more.",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Maxi Cab Melbourne"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => console.error("Image failed to load:", e)}
          onLoad={() => console.log("Image loaded successfully")}
        />
      </div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-6xl font-bold text-navy mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto md:text-3xl">
            Everything you need to know about our maxi cab services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-white overflow-hidden border-2 border-primary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="font-heading text-2xl text-navy pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-4 px-4" : "max-h-0"
                  }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
