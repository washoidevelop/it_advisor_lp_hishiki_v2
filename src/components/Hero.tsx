import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={isMobile ? '/images/hero_mobile.png' : '/images/hero_desktop.png'}
        alt="Hero"
        className="w-full h-auto object-contain object-top"
        style={{ minWidth: '100%' }}
      />
    </div>
  );
};

export default Hero;
