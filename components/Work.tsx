import { maf, tss } from "@/public/images";
import Image from "next/image";
import {
  OpacityAnimatedElement,
  OpacityAnimatedText,
  PositionAnimatedText,
  SlideInText,
} from "./AnimateClientComps/HomeText";

const Work = () => {
  return (
    <div id="work" className="py-16  bg-lightWhite text-secondary">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-6xl font-moda">
          <PositionAnimatedText onScroll={true}>Work</PositionAnimatedText>
        </h1>
        <div className="py-3 mt-8 flex flex-col gap-16">
          <div className="">
            <OpacityAnimatedElement delay={0.5}>
              <div className="w-full bg-gray-300 h-auto md:h-[30rem] overflow-hidden ">
                <Image src={tss} alt="the soulspace" />
              </div>
            </OpacityAnimatedElement>
            <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
              <SlideInText onScroll={true}>the soulspace</SlideInText>
            </h1>
            <h2 className="text-primary">
              <SlideInText onScroll={true} delay={0.3}>
                eCommerce Site
              </SlideInText>
            </h2>
            <h4 className="text-gray-600 mt-2">
              <SlideInText onScroll={true} delay={0.5}>
                <strong>
                  Developed a full-fledged eCommerce website for "In the
                  SoulSpace," enhancing customer experience, online sales, and
                  brand presence.
                </strong>
                <br />
                <br />
                <br />
                <strong>User-Centric Design: </strong>
                Built a comprehensive product catalog with clear categorization
                and descriptions, facilitating easy product discovery and
                purchase. <br />
                <br />
                <strong>Seamless Shopping Journey: </strong>
                Created a smooth shopping cart and checkout process with secure
                payment gateway integration (e.g., Instamojo) for a frictionless
                buying experience. <br />
                <br />
                <strong>Customer Accounts: </strong>
                Implemented user account functionalities like registration,
                login, and profile management, fostering customer loyalty and
                enabling personalized shopping experiences.
                <br />
                <br />
                <strong>Mobile-Responsive Design: </strong>
                Ensured the website is responsive across various devices
                (mobiles, tablets, desktops) for improved accessibility and user
                satisfaction. <br />
                <br />
                <strong>Enhanced Transparency: </strong>
                Implemented order tracking to keep customers informed about
                their order status, building trust and confidence. Performance
                Optimization: Optimized website performance for faster loading
                times and a smooth user experience, leading to reduced bounce
                rates. <br />
                <br />
                <strong>Robust Security: </strong>
                Implemented security measures to safeguard customer data and
                transactions, maintaining customer trust and data integrity.{" "}
                <br />
                <br />
                <strong>Data-Driven Approach: </strong>
                Integrated analytics tools (e.g., Google Analytics, Microsoft
                Clarity) to track store performance, customer behavior, and
                inform data-driven decision-making for marketing and sales
                strategies. <br />
                <br />
                <strong>SEO Implementation: </strong>
                Contributed to Search Engine Optimization (SEO) efforts to
                increase organic website traffic and brand visibility.
              </SlideInText>
            </h4>
            {/* link to open external website */}
            <div className="my-5">
              <a
                href="https://thesoulspace.in?ref=sohel.tech"
                target="_blank"
                className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                Visit Site
              </a>
            </div>

            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js v13</span>
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble graphql">GraphQl</span>
              <span className="stack-bubble strapi">Strapi</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div>
          <div className="">
            <div>
              <OpacityAnimatedElement delay={0.5}>
                <iframe
                  className="w-full h-[30rem]"
                  src="https://www.youtube-nocookie.com/embed/J2yxxGCQ6ps?si=xyfzoVMPr6uxhJla&amp;controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </OpacityAnimatedElement>
            </div>
            <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
              <SlideInText onScroll={true}>Mirror Institute</SlideInText>
            </h1>
            <h2 className="text-primary">
              <SlideInText onScroll={true} delay={0.3}>
                Student Management System
              </SlideInText>
            </h2>
            <h4 className="text-gray-600 mt-2">
              <SlideInText onScroll={true} delay={0.5}>
                <strong>
                  Developed a comprehensive Student Management System for a K-12
                  institute, improving communication, efficiency, and
                  record-keeping for staff and parents.
                </strong>
                <br />
                <br />
                <strong>User-friendly Features: </strong>
                Designed a custom calendar UI for attendance tracking, a
                dedicated parent dashboard for easy access to student
                information, and intuitive faculty portals with role-based
                authorization. <br /> <br />
                <strong>Enhanced Communication: </strong>
                Implemented attendance reminders, SMS alerts for absences and
                test results, and work submission notifications, fostering
                better engagement between parents, staff, and students. <br />{" "}
                <br /> <strong>Streamlined Processes: </strong>
                Built modules for student management (add, view, export data),
                test results management (faculty input, parent updates), and
                work submissions, simplifying record-keeping and saving time for
                staff. <br /> <br />
                <strong>Data Management: </strong>
                Enabled easy import/export of data to Excel sheets, facilitating
                administrative tasks. <br />
                <br /> <strong>Modern UI/UX: </strong>
                Developed a responsive user interface with a clean, modern
                design for a smooth and intuitive user experience.
              </SlideInText>
            </h4>
            <div className=" cursor-not-allowed">
              <p className="py-3 font-semibold w-auto text-secondary">
                <OpacityAnimatedText>
                  Access Restricted to Authorized Personnel
                </OpacityAnimatedText>
              </p>
            </div>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js v12</span>
              <span className="stack-bubble js">Javascript</span>
              <span className="stack-bubble bg-black text-white">
                Tailwind CSS
              </span>
              <span className="stack-bubble strapi">Strapi</span>
              <span className="stack-bubble graphql">GraphQl</span>
              <span className="stack-bubble express">ExpressJs</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div>
          <div className="">
            <OpacityAnimatedElement delay={0.5}>
              <div className="w-full bg-gray-300 h-auto  overflow-hidden ">
                <Image src={maf} alt="Ma Ashapuri Fireworks" />
              </div>
            </OpacityAnimatedElement>
            <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
              <SlideInText onScroll={true}>Ashapuri Fireworks</SlideInText>
            </h1>
            <h2 className="text-primary">
              <SlideInText onScroll={true} delay={0.3}>
                Product Catalogue Website
              </SlideInText>
            </h2>
            <h4 className="text-gray-600 mt-2">
              <SlideInText onScroll={true} delay={0.5}>
                <strong>
                  Developed a comprehensive product catalog website and
                  implemented innovative solutions to streamline operations and
                  increase online presence for Ma Ashapuri Fireworks.
                </strong>
                <br />
                <br />
                <br />
                <strong>Robust Product Catalog: </strong>
                Built a website showcasing over 300 fireworks with detailed
                descriptions, enhancing product visibility and customer. <br />
                <br />
                <strong>Content Management System (CMS): </strong>
                Designed and implemented a user-friendly portal for effortless
                product maintenance, allowing the client to update the catalog
                without technical expertise. <br />
                <br />
                <strong>Custom WhatsApp Product Management: </strong>
                Developed a creative WhatsApp bot using web scraping techniques,
                enabling the owner to directly submit and update product
                information through messages, streamlining product management.
                <br />
                <br />
                <strong>Enhanced Online Presence: </strong>
                Increased brand visibility through strategic SEO implementation.
                This included adding the business to Google Maps and optimizing
                the website using Google Search Console and Bing Search Console,
                leading to significant improvements in search engine rankings.
              </SlideInText>
            </h4>
            {/* link to open external website */}
            <div className="my-5">
              <a
                href="https://maashapurifireworks.in?ref=sohel.tech"
                target="_blank"
                className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                Visit Site
              </a>
            </div>

            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble nextjs">Next.js v13</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
              <span className="stack-bubble graphql">Flask</span>
              <span className="stack-bubble supabase">Node.js</span>
              <span className="stack-bubble supabase">WPPConnect.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* ------- BREAK ------- */
}
{
  /* <div className="">
            <div className="w-full bg-gray-300 h-80"></div>
            <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
              Kanan International
            </h1>
            <h2 className="text-primary">Student Attendance Portal</h2>
            <h4 className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, est sit! Illo earum tempore est eligendi repudiandae
              quibusdam dolore similique? Porro velit adipisci quidem.
            </h4>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js</span>
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble tailwindcss">ShadCN</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div> */
}
