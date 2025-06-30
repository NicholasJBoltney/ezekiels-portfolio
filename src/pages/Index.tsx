
import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const artworks = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      description: "Complete brand identity system for a modern tech startup."
    },
    {
      id: 2,
      title: "Editorial Layout",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Magazine layout design with contemporary typography."
    },
    {
      id: 3,
      title: "Digital Campaign",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      description: "Social media campaign for sustainable fashion brand."
    },
    {
      id: 4,
      title: "Packaging Design",
      category: "Product",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      description: "Minimalist packaging design for premium cosmetics."
    },
    {
      id: 5,
      title: "Website Interface",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description: "Clean and modern website interface design."
    },
    {
      id: 6,
      title: "Visual Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      description: "Visual identity system for cultural institution."
    },
    {
      id: 7,
      title: "Print Campaign",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
      description: "Print advertising campaign for luxury brand."
    },
    {
      id: 8,
      title: "Mobile App Design",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop",
      description: "Mobile application interface for wellness platform."
    },
    {
      id: 9,
      title: "Art Direction",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      description: "Art direction and creative concept development."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl">
            Graphic Designer crafting visual stories through bold typography and minimal aesthetics
          </p>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce hover:animate-none transition-all duration-300 hover:text-gray-600"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Alex Chen Portrait"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a graphic designer with over 8 years of experience creating compelling visual narratives for brands and institutions worldwide. My work spans across identity design, editorial, and digital experiences.
                </p>
                <p>
                  I believe in the power of simplicity and the impact of thoughtful design. Every project begins with understanding the story that needs to be told, then finding the most elegant way to tell it.
                </p>
                <p>
                  Based in San Francisco, I work with clients ranging from emerging startups to established cultural institutions, always with a focus on creating timeless, impactful design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16">
            Selected Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <Card 
                key={artwork.id}
                className="group cursor-pointer overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedWork(artwork.id)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    {artwork.category}
                  </p>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {artwork.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Let's Work Together</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="space-x-8">
            <a href="mailto:hello@alexchen.design" className="hover:text-gray-300 transition-colors">
              hello@alexchen.design
            </a>
            <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6">
          <div className="max-w-4xl w-full relative">
            <button 
              onClick={() => setSelectedWork(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            {artworks.find(work => work.id === selectedWork) && (
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={artworks.find(work => work.id === selectedWork)?.image}
                  alt={artworks.find(work => work.id === selectedWork)?.title}
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    {artworks.find(work => work.id === selectedWork)?.category}
                  </p>
                  <h3 className="text-2xl font-medium mb-4">
                    {artworks.find(work => work.id === selectedWork)?.title}
                  </h3>
                  <p className="text-gray-700">
                    {artworks.find(work => work.id === selectedWork)?.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
