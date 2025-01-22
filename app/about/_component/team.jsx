import Image from 'next/image';
import niiKwei1 from '@/public/singer1.png'
import niiKwei2 from '@/public/singer2.png'
import niiKwei3 from '@/public/singer3.png'
import niiKwei4 from '@/public/singer4.png'
import niiKwei5 from '@/public/singer5.png'

const teamMembers = [
  {
    name: 'Nii Kwei',
    title: 'Founder and Lead Pastor',
    imageUrl: niiKwei1, 
  },
  {
    name: 'Ama Serwaa',
    title: 'Director of Outreach and Community Programs',
    imageUrl: niiKwei2, 
  },
  {
    name: 'Kwame Asante',
    title: 'Worship and Creative Arts Director',
    imageUrl: niiKwei3,
  },
  {
    name: 'Efua Mensah',
    title: 'Youth and Discipleship Coordinator',
    imageUrl: niiKwei4, 
  },
  {
    name: 'Kofi Ansah',
    title: 'Operations and Finance Manager',
    imageUrl: niiKwei5, 
  },
];

const TeamSection = () => {
  return (
    <div className="px-20 text-center my-16">
      <h2 className="text-3xl font-bold mb-8 relative pb-1">
        Meet Our Team
      <span className="absolute left-1/2 bottom-0 w-[8%] h-1 bg-violet-500"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;