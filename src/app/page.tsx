import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { clients } from "@/constants/clients";
import { features } from "@/constants/features";
import { featuresBlock } from "@/constants/features";
import { FeatureCard } from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import PricingSection from "@/components/PricingSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
      <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />
      <div className="relative container">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="background"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
        />
        {/* Home Section */}
        <section id="home" className="relative">
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs cursor-pointer rounded-3xl hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                New Feature is Now Available
                <ArrowRightCircle className="inline ml-1 h-4 w-4" />
              </p>
              <Heading title={"A CRM Dashboard For Engineering Teams"} />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team's productivity with Ocean CRM dashboard
                that steamlines project management, collaboration, and
                data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get Started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outlined">View Pricing</Button>
                </Link>
              </div>
              <Image
                src="/Hero-image.svg"
                alt="banner"
                width={670}
                height={370}
                className="mx-auto shadow-xl"
              />
            </div>
          </div>
        </section>
        {/* Clients Section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-20 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Features Section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="second banner"
              className="absolute -z-50 w-full top-0 left-0 opacity-5 h-full"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit, justo a luctus pharetra, mauris lacus feugiat lorem,
                nec.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  imageUrl={feature.imageUrl}
                  content={feature.content}
                />
              ))}
            </div>
          </div>
          {/* Part 2 */}
          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
        </section>
        {/* Pricing Section */}
        <PricingSection />
        {/* Testimonials Section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Try our Services!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
