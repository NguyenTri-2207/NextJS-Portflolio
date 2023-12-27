import {
  MdPhoneIphone,
  MdOutlineEmail,
  MdLocationOn,
  MdOutlineToday,
} from "react-icons/md";

const data = {
  experience: [
    {
      startYear: "06/2020",
      endYear: "2023",
      title: "Front-End Developer",
      company: "Gleads - Quận 7, HCM",
      description:
        "Convert website bbcincorp.com from GulpJs to NextJs , Configure and build source NextJS, Visually Breaking Down UI Components using Atomic Design",
    },
    {
      startYear: "07/2019",
      endYear: "05/2020",
      title: "Front-End Developer",
      company: "3FORCOM - Quận 10, HCM",
      description:
        "Expert in crafting interactive and responsive websites akin to renowned platforms such as Novaland, Gumac, and Adco. Proficient in leveraging JavaScript-based technologies, particularly React.js, to deliver cutting-edge web solutions.",
    },
    {
      startYear: "05/2019 ",
      endYear: "07/2019",
      title: "Front-End Developer Intern",
      company: "TECHNOLOGY & COMMUNICATION 3I COMPANY",
      description:
        "Transforming PSD files into HTML with precision, I specialize in creating responsive web designs using the latest technologies, including HTML5, CSS3, and Javascript.",
    },
    {
      startYear: "09/2014",
      endYear: "05/2019",
      title: "ĐH GTVT HCM",
      company: "450 Lê Văn Việt-Q.9, HCM",
      description:
        "I acquired comprehensive knowledge in database design, Node.js, HTML, CSS, and mobile programming. This educational journey provided me with a solid foundation in computer science, shaping my skills and understanding in these key areas.",
    },
  ],
  dataSocial: [
    {
      icon: <MdPhoneIphone className="text-[#E93B81]" />,
      name: "Phone",
      content: "0337368371",
    },
    {
      icon: <MdOutlineEmail className="text-[#6AB5B9]" />,
      name: "Email",
      content: "ngoctri2207@gmail.com",
    },
    {
      icon: <MdLocationOn className="text-[#FD7590]" />,
      name: "Location",
      content: "District 2, Ho Chi Minh City",
    },
    {
      icon: <MdOutlineToday className="text-[#C17CEB]" />,
      name: "Birthday",
      content: "July 22, 1996",
    },
  ],
};
export default data;
