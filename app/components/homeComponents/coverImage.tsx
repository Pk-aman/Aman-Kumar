import React from "react";
import Image from "next/image";
import coverImage from "../../assets/poster.jpg";
import profileImage from "../../assets/pp.jpg";
import { overviewData } from "@/app/data/data";
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail, AiOutlineCloudDownload, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

function CoverImage() {
  return (
    <div className="pb-10">
      <div className="relative">
        {/* Cover Image */}
        <Image
          src={coverImage}
          alt="Cover Image"
          className="w-screen h-100 object-fill"
        />
        {/* Profile Image */}
        <Image
          src={profileImage}
          alt="Profile Image"
          className="w-55 h-70 rounded-full shadow-lg absolute left-25 bottom-0 translate-y-1/2 p-3 bg-white object-cover"
        />
      </div>
      {/* Name and Title */}
      <div className="px-5 pr-8">
        <div>
          <div className="ml-80">
            {/* Name */}
            <div className="flex justify-between gap-4">
              <div className="flex-shrink-0">
                <div className="flex gap-3">
                  <p className="text-7xl font-bold text-black">
                    {overviewData.name}
                  </p>
                  <a href='/AmanKumar_Resume_Frontend.pdf' download>
                  <AiOutlineDownload className="font-bold text-blue mt-3"/>
                  </a>
                </div>
                <p
                  className="text-lg text-black"
                  style={{ letterSpacing: "1.05em" }}
                >
                  {overviewData.title}
                </p>
              </div>
              {/* Social Links */}
              <div className="p-2 flex flex-col items-end">
                <div className="flex items-center justify-between w-full">
                  <Link href="https://github.com/Pk-aman">
                    <AiOutlineGithub className="text-3xl hover:text-gray-600 transition-colors" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/aman-kumar-aa59741a0/">
                    <AiOutlineLinkedin className="text-3xl hover:text-blue-600 transition-colors" />
                  </Link>
                  <Link href="mailto:a.amankrpin2@gmail.com">
                    <AiFillMail className="text-3xl hover:text-red-600 transition-colors" />
                  </Link>
                </div>
                <Link
                  href="tel:+916202440500"
                  className="text-small text-black"
                >
                  +91-6202440500
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverImage;
