import { certifications } from "../constants"; // <-- Import new data
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Certifications & Credentials"
          sub="🎓 My validated skills and achievements"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {certifications.map((cert, index) => (
            <GlowCard card={cert} key={index} index={index}>
              
              {/* --- Wrapper div added to increase padding/height --- */}
              <div className="p-8">
                {/* 1. Big Certificate Image */}
                <div className="mb-4">
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>

                {/* 2. Issuer Info (like the old profile) */}
                <div className="flex items-center gap-3">
                  <div>
                    <img 
                      src={cert.issuerImgPath} 
                      alt={cert.issuer} 
                      className="w-10 h-10 rounded-full object-cover" // Added size
                    />
                  </div>
                  <div>
                    <p className="font-bold">{cert.title}</p>
                    <p className="text-white-50">{cert.issuer}</p>
                  </div>
                </div>
              </div>
              {/* --- Wrapper div ends --- */}

            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;