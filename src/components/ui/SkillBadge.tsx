interface SkillBadgeProps {
   name: string; 
}

const SkillBadge = ({name}: SkillBadgeProps) => {
    return (
        <span className="inline-block px-3 py-1 text-sm rounded-md bg-sage/20 text-forest border border-sage/40">
            {name}
        </span>
    )
}

export default SkillBadge