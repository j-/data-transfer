import JSONOutput from './JSONOutput';
import BlobActions from './BlobActions';

export type DefinitionPairMultilineProps = {
  label: string;
  value: any;
  type?: string;
};

const DefinitionPairMultiline: React.FC<DefinitionPairMultilineProps> = ({ label, type, value }) => (
  <div className="flex flex-col">
    <div className="text-gray-400 font-mono">
      {label}
    </div>

    <div className="line-clamp-3 whitespace-pre-wrap break-words my-2 leading-8">
      <JSONOutput value={value} />
    </div>

    <div className="flex flex-row">
      <BlobActions type={type} value={value} />
    </div>
  </div>
);

export default DefinitionPairMultiline;
