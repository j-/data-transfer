import JSONOutput from './JSONOutput';

export type DefinitionPairInlineProps = {
  label: string;
  value: any;
  defaultExpanded?: boolean;
};

const DefinitionPairInline: React.FC<DefinitionPairInlineProps> = ({ label, value }) => (
  <div>
    <div className="inline-block text-gray-400 max-w-[50%] truncate font-mono after:content-['\27f9'] after:mx-2 after:text-gray-400">
      {label}
    </div>

    <div className="inline-block truncate">
      <JSONOutput value={value} />
    </div>
  </div>
);

export default DefinitionPairInline;
