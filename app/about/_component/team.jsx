"use client";
import { useState } from "react";
import Image from "next/image";
import niiKwei1 from "@/public/Karen.jpeg";
import niiKwei2 from "@/public/singer2.png";
import niiKwei3 from "@/public/Ephraimm.jpeg";
import niiKwei4 from "@/public/singer4.png";
import niiKwei5 from "@/public/Ruby.jpeg";

const teamMembers = [
  {
    name: "Karen Ofori",
    title: "Outreach Coordinator",
    shortDescription:
      "Karen is a young woman, motivated to mentor, guide, and coach young people, particularly young women, to realise their academic and professional dreams regardless of the prevailing circumstances...",
    fullDescription:
      "Karen is a young woman, motivated to mentor, guide, and coach young people, particularly young women, to realise their academic and professional dreams regardless of the prevailing circumstances. Through her guidance, three young women have gained admission into universities, pursuing degrees aligned with their career aspirations. Karen currently serves at Nii Kwei Ministries as the Outreach Coordinator. There, she is responsible for advancing the ministry’s impact and spreading the gospel through service with a heart of compassion and dedication. Karen joined the ministry in January 2025. Karen also fellowships with the Fountain of Glory A/G, where she serves as the General Secretary of the Youth Ministry for 2.5 years and as a Youth Bible Study Teacher. She works as an Investment Banking Analyst in Accra and has participated in the arrangement of capital for corporate clients in the agriculture, pharmaceutical, hospitality and real estate industries. As an analyst, she is primarily responsible for providing financial and economic analysis, preparing key deal documents to facilitate corporate transactions and deal strategies, and maintaining client relationships.She holds a BSc. in Business Administration from Ashesi University.",
    imageUrl: niiKwei1,
  },
  {
    name: "Cherie Appiah Gyimah Twum",
    title: "Fundraising Coordinator and Partnership Manager",
    shortDescription:
      "Cherie is a passionate nutritionist, community advocate,...",
    fullDescription:
      "Cherie is a passionate nutritionist, community advocate, and Fundraising Coordinator and Partnership Manager for Nii Kwei Ministries. With extensive experience as a dietitian, she has developed personalized nutrition plans and collaborated with healthcare teams to improve patient outcomes, focusing on community nutrition and health equity. In ministry, Cherie has held leadership roles such as Bible Studies Coordinator and Sunday School Secretary, contributing to impactful outreach programs for underserved communities. Her current role involves spearheading fundraising strategies and building partnerships to advance the ministry’s mission. Cherie’s dedication to combining faith, service, and professional expertise drives her mission to empower individuals and transform communities",
    imageUrl: niiKwei2,
  },
  {
    name: "Ephraim Apetorgbor",
    title: "Web Content Manager",
    shortDescription: "Ephraim Apetorgbor serves as the Web Content Manager for Nii Kwei Ministries, bringing a unique blend of technical expertise and a heart for ministry to his role...",
    fullDescription:
      "Ephraim Apetorgbor serves as the Web Content Manager for Nii Kwei Ministries, bringing a unique blend of technical expertise and a heart for ministry to his role. With 5 years of experience in the corporate world, Ephraim has honed his skills in software engineering and established aeTech Digital Hub, a testament to his innovative mindset and entrepreneurial spirit. Beyond his professional achievements, Ephraim is an active member of his church, serving faithfully as a chorister. His passion for leadership and discipleship greatly informs his work at Nii Kwei Ministries, where he uses his talents to advance the ministry’s mission and connect with others through impactful digital platforms. Driven by a deep desire to serve and make a positive impact, Ephraim’s work embodies his commitment to excellence, both in the corporate space and in ministry. At Nii Kwei Ministries, he plays a crucial role in leveraging technology to enhance communication, engagement, and outreach efforts, ensuring that the ministry’s message reaches and transforms lives.",
    imageUrl: niiKwei3,
  },
  {
    name: "Kellie Twumwaa Twum ",
    title: "Finance Manager/Treasurer",
    shortDescription: "Kellie Twumwaa Twum serves as the Finance Manager and Treasurer for Nii Kwei Ministries, bringing a wealth of expertise in actuarial science and finance... ",
    fullDescription:
      "Kellie Twumwaa Twum serves as the Finance Manager and Treasurer for Nii Kwei Ministries, bringing a wealth of expertise in actuarial science and finance. She holds a Bachelor’s degree with first-class honors in Actuarial Science from the Kwame Nkrumah University of Science and Technology and an Executive MBA in Finance from the University of Ghana. With over five years of professional experience, Kellie began her career at Stallion Consultants Limited, gaining valuable expertise in actuarial consulting. She later transitioned to the banking sector, where she excelled as a Risk Analyst at Ecobank Ghana. Her leadership and financial acumen ensure that the ministry’s resources are managed with integrity and efficiency, enabling the organization to fulfill its mission and vision. In her role, Kellie is committed to fostering financial stewardship and sustainability, ensuring that Nii Kwei Ministries continues to impact lives and build a Christ-centered legacy.",
    imageUrl: niiKwei4,
  },
  {
    name: "Ruby Oye Otoo",
    title: "Administrative Manager",
    shortDescription: "With over two decades of diverse experience across various industries, Ruby Oye Otoo brings a wealth of expertise, professionalism, and passion to her role as Administrative Manager at Nii Kwei Ministries...",
    fullDescription:
      "With over two decades of diverse experience across various industries, Ruby Oye Otoo brings a wealth of expertise, professionalism, and passion to her role as Administrative Manager at Nii Kwei Ministries. Her dedication to the work of the Lord and her commitment to advancing the ministry’s mission make her an invaluable asset to the team. Ruby is a dynamic leader, known for her exceptional organizational skills and ability to foster efficient workflows, ensuring the ministry operates seamlessly to achieve its God-given purpose. She views her administrative role as a form of ministry, supporting the work of Nii Kwei Ministries with diligence and a servant’s heart. Her extensive career has honed her capabilities in administration, team management, and strategic planning, enabling her to address complex challenges with creativity and faith. Ruby’s unwavering commitment to excellence is driven by her deep desire to see God’s kingdom thrive and to empower  the team to fulfill their divine calling. At Nii Kwei Ministries, Ruby plays a pivotal role in overseeing operations, managing resources, and ensuring the smooth execution of programs and activities that impact lives and glorify God. She is deeply passionate about mentoring and inspiring others, creating a culture of collaboration, spiritual growth, and purpose within the organization.",
    imageUrl: niiKwei5,
  },
];

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="lg:px-20 px-6 lg:text-center my-16">
      <h2 className="text-3xl font-bold mb-8 relative pb-1">
        Meet Our Team
        <span className="absolute left-0 lg:left-1/2 bottom-0 w-[10%] h-1 rounded-full bg-violet-500"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg lg:shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-90 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-500 mt-2">{member.shortDescription}</p>
              <button
                className="text-violet-500 font-medium mt-2 hover:underline"
                onClick={() => openModal(member)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg shadow-lg relative overflow-y-auto h-[90%]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <Image
              src={selectedMember.imageUrl}
              alt={selectedMember.name}
              width={300}
              height={300}
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{selectedMember.name}</h2>
            <p className="text-gray-600 mb-2">{selectedMember.title}</p>
            <p>{selectedMember.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
