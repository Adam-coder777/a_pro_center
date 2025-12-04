'use client';

import React from "react";

interface CommunityCtaProps {
  title: string;
  description: string;
  buttonText: string;
  applyButtonText: string;
  watchVideoText: string;
}

export function CommunityCta({ title, description, buttonText, applyButtonText, watchVideoText }: CommunityCtaProps) {
  return (
    <section className="py-16 pb-24">
      <div className="container mx-auto px-4">
        <div
          className="bg-gradient-to-r from-[#22543d] to-[#2d6a4f] rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-center border-4 border-[#fbbf24]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdr6R9Qh41Dz03Aa7awoBRv3HoH_Ge_BAammO10pTkN3kLicg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-[#22543d] font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {applyButtonText}
            </a>
            <a
              href="https://wa.me/77781309977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-[#22543d] font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {buttonText}
            </a>
            <a
              href="https://www.instagram.com/reel/DQdPtGiiAuo/?igsh=MWh1NWtmazZ6N2o0dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-[#22543d] font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {watchVideoText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


