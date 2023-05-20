import React from 'react';

type SkillCardProps = {
  category: string;
  list: string[];
};
const SkillCard: React.FC<SkillCardProps> = (props) => {
  let renderList = props.list.map((item, index) => {
    return (
      <li key={index} className={`text-base font-segio mb-2 last:mb-0`}>
        {item}
      </li>
    );
  });
  return (
    <div
      className={`border border-solid border-opacity-90 border-white rounded-lg p-8`}
    >
      <h4>{props.category}</h4>
      <ul className={`mt-4 list-disc pl-4`}>{renderList}</ul>
    </div>
  );
};

export default SkillCard;
