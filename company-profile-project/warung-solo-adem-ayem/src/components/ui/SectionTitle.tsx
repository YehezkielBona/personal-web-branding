type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-forest">{title}</h2>

      {subtitle && <p className="text-leaf mt-2 max-w-xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-1 bg-sage mx-auto mt-4 rounded-full" />
    </div>
  );
};

export default SectionTitle;
