import React from "react";
import Image from "next/image";
import coverImage from "../../assets/cover-image.jpg";
import profileImage from "../../assets/profilePhoto.jpg";
import { overviewData } from "@/app/data/data";
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail } from "react-icons/ai";
import Link from "next/link";

function CoverImage() {
  return (
    <div className="pb-10">
      <div className="relative">
        {/* Cover Image */}
        <Image
          src={coverImage}
          alt="Cover Image"
          className="w-screen h-90 object-cover"
        />
        {/* Profile Image */}
        <Image
          src={profileImage}
          alt="Profile Image"
          className="w-55 h-70 rounded-full shadow-lg absolute left-25 bottom-0 translate-y-1/2 p-3 bg-white"
        />
      </div>
      {/* Name and Title */}
      <div className="px-5 pr-8">
        <div>
          <div className="ml-80">
            {/* Name */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-shrink-0">
                <p className="text-7xl font-bold text-black">
                  {overviewData.name}
                </p>
                <p
                  className="text-lg text-black"
                  style={{ letterSpacing: "1.05em" }}
                >
                  {overviewData.title}
                </p>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link href="https://github.com/aman-kumar-007">
                  <AiOutlineGithub className="text-3xl hover:text-gray-600 transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/aman-kumar-007/">
                  <AiOutlineLinkedin className="text-3xl hover:text-blue-600 transition-colors" />
                </Link>
                <Link href="mailto:aman@gmail.com">
                  <AiFillMail className="text-3xl hover:text-red-600 transition-colors" />
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
