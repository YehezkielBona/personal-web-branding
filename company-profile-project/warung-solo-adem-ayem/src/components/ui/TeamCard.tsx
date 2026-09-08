import type { TeamMember } from "../../types";

type TeamCardProps = {
  member: TeamMember;
};

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:-translate-y-1 transition-transform duration-300">
      <img src={member.photo} alt={member.name} className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-sage" />
      <h3 className="font-bold text-lg text-forest mt-4">{member.name}</h3>
      <p className="text-leaf font-medium text-sm">{member.role}</p>
      <p className="text-forest/70 font-medium text-sm">{member.bio}</p>
    </div>
  );
};

export default TeamCard;
