import Image from "next/image";
import VirtualCards from "./VirtualCards";

const PageTitleComponent = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <div className="container mx-auto flex flex-col justify-center items-center px-4 pt-24 md:pt-32 lg:pt-48 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
        <h1 className="text-[40px] md:text-[80px] lg:text-[140px] font-bold font-eudoxus bg-gradient-to-r from-white to-[#525151] bg-clip-text text-transparent">
          {title}
        </h1>

        <div className="mt-20 z-10">
          <VirtualCards />
        </div>
      </div>

      <div className="absolute bottom-32 left-0 right-0 overflow-hidden">
        <div className="relative w-screen h-[450px]">
          <Image
            src="/images/curly-line.svg"
            alt="Curly Line"
            fill
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PageTitleComponent;
