import { Users, Clock, Award, Headphones } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: Clock,
      value: "7+",
      label: "Years of Service",
    },
    {
      icon: Award,
      value: "100%",
      label: "Satisfaction Rate",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Availability",
    },
  ];

  return (
    <section className="py-16 bg-background relative -mt-8 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-white text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="text-primary" size={28} />
              </div>
              <p className="font-heading text-3xl md:text-6xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
