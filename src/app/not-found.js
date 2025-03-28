// import { Button } from "@/components/ui/button";
import { Button } from "@components/ui/button";
import Image from "next/image";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" text-center justify-center flex min-h-screen">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-auto ">
        <div>
          <Image
            className="mx-auto max-md:w-[80%]"
            src="https://i.ibb.co.com/Ndd0KDZc/error-Page.gif"
            alt="not-found"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="md:my-auto max-sm:mx-auto max-md:w-[80%] max-md:mx-auto">
          <h2 className="font-bold max-md:text-xl md:text-3xl mb-5">
            Page Not Found!
          </h2>
          <Link href="/">
            <Button variant="primary"> Go To Home Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
