// src/components/Home/Facts.jsx
import React, { useEffect, useState } from 'react';
import { FaUsers, FaCheck, FaAward } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Facts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [winAwards, setWinAwards] = useState(0);

  useEffect(() => {
    if (inView) {
      const animateCount = (endValue, setState) => {
        let startValue = 0;
        const duration = 2000;
        const increment = endValue / (duration / 16); // 60fps

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }
          setState(Math.floor(startValue));
        }, 16);
      };

      animateCount(2534, setHappyClients);
      animateCount(1250, setProjectsDone);
      animateCount(110, setWinAwards);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center text-white" data-aos="zoom-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-primary text-3xl" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{happyClients.toLocaleString()}+</h3>
              <p className="text-xl opacity-90">Happy Clients</p>
            </div>
          </div>

          <div className="text-center text-white" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-primary text-3xl" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{projectsDone.toLocaleString()}+</h3>
              <p className="text-xl opacity-90">Projects Done</p>
            </div>
          </div>

          <div className="text-center text-white" data-aos="zoom-in" data-aos-delay="400">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-primary text-3xl" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{winAwards.toLocaleString()}+</h3>
              <p className="text-xl opacity-90">Win Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;