import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";

const FaqVisual = () => {
  return (
    <div className="relative">
      <Image
        src={
          "https://i.ibb.co.com/jP85w9dg/shutterstock-587141267-compressed-1024x683.jpg"
        }
        width={500}
        height={650}
        alt="faq question image"
        className="rounded-lg md:h-[400px]"
      ></Image>
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={"/assets/icons/play.png"}
            width={50}
            height={50}
            alt="play image"
            className="absolute left-[45%] top-[42%] cursor-pointer"
          ></Image>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="max-w-xl">
          <DialogTitle>Video</DialogTitle>
          {/* Video Section */}
          <div className="relative w-full">
            <iframe
              src="https://www.youtube.com/embed/K21uaDuNYGM?si=gPFBgd4YdtsThEwC"
              frameBorder="0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FaqVisual;
