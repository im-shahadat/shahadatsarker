import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
          What I Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Services</h2>
        <p className="text-[#666] text-sm mb-12 max-w-lg">
          From quick WordPress fixes to full-stack builds — here's what I can help you with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#111] border border-[#1a1a1a] rounded-xl p-6 hover:border-sky-400/30 transition-colors duration-300"
            >
              <span className="text-2xl mb-4 block">{service.icon}</span>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-sky-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}