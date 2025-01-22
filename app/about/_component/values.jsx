import { FaCross, FaHandsHelping, FaHeart, FaShieldAlt, FaStar, FaUsers } from 'react-icons/fa';

const coreValues = [
  {
    title: 'Faith',
    description: 'We are rooted in unwavering faith in God, trusting His promises and seeking His guidance in all we do.',
    subtext: '"Now faith is confidence in what we hope for and assurance about what we do not see."',
    reference: 'Hebrews 11:1',
    icon: <FaCross className="text-4xl mb-2" />,
  },
  {
    title: 'Community',
    description: 'We value the power of togetherness, fostering authentic relationships and creating a sense of belonging for all.',
    subtext: '"And let us consider how we may spur one another on toward love and good deeds."',
    reference: 'Hebrews 10:24',
    icon: <FaUsers className="text-4xl mb-2" />,
  },
  {
    title: 'Service',
    description: 'We demonstrate Christ-like love by humility, compassion, and excellence, reflecting the love of Christ in action.',
    subtext: '"For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many."',
    reference: 'Mark 10:45',
    icon: <FaHandsHelping className="text-4xl mb-2" />,
  },
  {
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and accountability in all aspects of our ministry, honoring God in our words and actions.',
    subtext: '"The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity."',
    reference: 'Proverbs 11:3',
    icon: <FaShieldAlt className="text-4xl mb-2" />,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, whether in our work, worship, or relationships.',
    subtext: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.',
    reference: 'Colossians 3:23',
    icon: <FaStar className="text-4xl mb-2" />,
  },
  {
    title: 'Compassion',
    description: 'We demonstrate Christ-like love by being kind and compassionate to one another, forgiving each other.',
    subtext: '"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
    reference: 'Ephesians 4:32',
    icon: <FaHeart className="text-4xl mb-2" />,
  },
];

const CoreValues = () => {
  return (
    <div className="px-20 text-center my-16">
      <h2 className="text-3xl font-bold mb-8 relative pb-1">
        Our Core Values
      <span className="absolute left-1/2 bottom-0 w-[10%] h-1 bg-violet-500"></span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value) => (
          <div key={value.title} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-left">
              {value.icon}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700 mb-4">{value.description}</p>
              <p className="text-gray-500 italic">{value.subtext}</p>
              <p className="text-gray-5000-semibold">{value.reference}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;