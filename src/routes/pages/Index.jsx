import FeatureCard from "../../components/UI/FeatureCard";
import HeroSection from "../../components/sections/HeroSection";
import ContentSection from "../../components/sections/ContentSection";

const features = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered within 24 hours.",
    icon: "/assets/icons/delivery-svgrepo-com.svg",
  },
  {
    title: "Best Deals",
    description: "Exclusive discounts and offers just for you.",
    icon: "/assets/icons/deal-svgrepo-com.svg",
  },
  {
    title: "24/7 Support",
    description: "Our team is here to assist you anytime.",
    icon: "/assets/icons/hours-svgrepo-com.svg",
  },
  {
    title: "Secure Payments",
    description: "Shop safely with our secure payment options.",
    icon: "/assets/icons/credit-card-svgrepo-com.svg",
  },
];

function Index() {
  return (
    <div>
      <HeroSection />
      <section className="py-8 px-8 flex flex-wrap justify-between items-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <ContentSection
        title="The Joy of Shopping: A Journey of Discovery"
        description="Shopping is more than just a transaction; it's an experience that ignites excitement and curiosity. As we stroll through vibrant aisles or browse online, each item tells a story, inviting us to explore its potential..."
        imageSrc="/assets/image/section-3.jpg"
        reverse
      />
      <ContentSection
        title="The Transformative Power of Shopping"
        description="Shopping is a universal activity that transcends mere acquisition of goods; it is a powerful form of self-expression and exploration. Whether at a bustling market, a chic boutique, or an online platform, each shopping experience offers a unique blend of discovery and excitement..."
        imageSrc="/assets/image/section-4.jpg"
      />
    </div>
  );
}

export default Index;
