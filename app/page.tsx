"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";


export default function Home() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  return (
    <>
      {/* //hero section */}
      <div className="relative h-[80vh]">
        <div className="w-[1000px] z-100 h-full mx-auto flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-[30px]">
            Where Creativity Meets Cinematic Storytelling
          </h1>
          <p className="text-[14px] md:text-[18px] md:max-w-2xl md:mx-auto text-center">
            Through creative storytelling and cinematic visuals, we help brands
            share their message in a way that inspires, engages, and leaves a
            lasting impression.
          </p>

          <button>see our work</button>
        </div>

        <div className="absolute z-[-99] overflow-hidden w-full h-full inset-0 bg-amber-950">
          <video
            src="/videos/bg-vid.mp4"
            autoPlay
            muted
            loop
            controls={false}
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
          {/* <div className="w-full h-full bg-black absolute inset-0 z-100 opacity-[60%]"></div> */}
        </div>
      </div>

      {/* //about */}
      <div className="py-[5rem] w-[1000px] flex flex-col items-center mx-auto ">
        <h1 className="text-[30px] uppercase font-bold text-black">
          about okb
        </h1>
        <div className="flex-col pt-[2rem] flex gap-10 items-center justify-center">
          <img
            src="/okb_pic.jpg"
            alt=""
            className="rounded-[500px] w-[300px]"
          />
          <p className="text-[14px]">
            I&apos;m a Delaware-based videographer and content creator
            passionate about turning real moments into compelling visual
            stories. As a recent graduate with a strong creative drive, I
            specialize in capturing authentic experiences and transforming them
            into cinematic content that connects with audiences. Over the past
            few years, I’ve had the opportunity to work with a variety of
            clients—from local businesses and school organizations to large
            social events like ball dinners and community celebrations. Each
            project has helped me refine my eye for storytelling, composition,
            and creating visuals that feel both engaging and meaningful.
          </p>
          <p className="text-[14px]">
            Beyond client work, I’m also a well-known content creator who
            understands how powerful visual storytelling can be in today’s
            digital world. This perspective allows me to approach every project
            with both creativity and strategy—ensuring the content not only
            looks great but also resonates with the right audience. Whether I’m
            documenting an event, producing content for a brand, or creating
            something entirely new, my goal is always the same: to create
            visuals that leave a lasting impression and bring every story to
            life.
          </p>
        </div>
      </div>

      {/* work */}
      <div className="py-[5rem] w-full flex flex-col items-center mx-auto gap-[2rem]">
        <h1 className="text-[30px] uppercase font-bold text-black">Work</h1>

        <div className="w-full overflow-x-auto scroll-smooth">
          <div className="flex flex-nowrap gap-4">
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] h-[250px] md:h-[300px] bg-amber-600 rounded-lg">
              <img src="/okb_pic.jpg" className="w-full h-full" alt="" />
            </div>
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] h-[250px] md:h-[300px] bg-amber-600 rounded-lg"></div>
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] h-[250px] md:h-[300px] bg-amber-600 rounded-lg"></div>
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] h-[250px] md:h-[300px] bg-amber-600 rounded-lg"></div>
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] h-[250px] md:h-[300px] bg-amber-600 rounded-lg"></div>
          </div>
        </div>

        <p className="text-[18px]">
          To see more,{" "}
          <Link className="italic hover:underline text-blue-700" href="">
            click here
          </Link>
        </p>
      </div>

      {/*contact us form */}
      <div className="py-[5rem] w-[1000px] flex flex-col items-center mx-auto ">
        <h1 className="text-[30px] uppercase font-bold text-black">
          contact us
        </h1>
        <p className="text-[14px] text-center">
          Have a project in mind or want to collaborate? I’d love to hear from
          you.
        </p>
        <p className="text-[14px] text-center">
          Send me a message through the contact form below and let’s create
          something amazing together. 🎬
        </p>
        <div className="flex-col pt-[2rem] flex gap-10 items-center justify-center">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(console.log)}
          >
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="first name" className="capitalize">
                first name
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="w-[400px] border-2 p-2"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="first name" className="capitalize">
                last name
              </label>
              <input
                type="text"
                className="w-[400px] border-2 p-2"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="first name" className="capitalize">
                Email
              </label>
              <input
                type="text"
                className="w-[400px] border-2 p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="first name" className="capitalize">
                Phone
              </label>
              <input
                type="text"
                className="w-[400px] border-2 p-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="first name" className="capitalize">
                brief project scope
              </label>
              <textarea
                placeholder="Enter a brief project scope"
                className="w-[400px] border-2 p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-black p-3 text-white capitalize"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
