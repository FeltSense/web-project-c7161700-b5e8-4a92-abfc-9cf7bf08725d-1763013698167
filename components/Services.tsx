'use client';

import { Code, Database, Cloud, Shield, Smartphone, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to your exact specifications, ensuring seamless integration with your business processes and maximum efficiency.',
      color: 'blue',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business. From migration to optimization, we handle all your cloud computing needs.',
      color: 'indigo',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
      color: 'purple',
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform raw data into actionable insights with our advanced analytics and artificial intelligence solutions.',
      color: 'cyan',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive security measures, threat detection, and compliance management.',
      color: 'green',
    },
    {
      icon: Cpu,
      title: 'IoT Integration',
      description: 'Connect your devices and systems with cutting-edge Internet of Things solutions for smart automation and monitoring.',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to propel your business forward in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}