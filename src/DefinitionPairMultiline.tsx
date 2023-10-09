import BlobActions from './BlobActions';
import MaybeJSONOutput from './MaybeJSONOutput';

export type DefinitionPairMultilineProps = {
  label: string;
  value: any;
  type?: string;
};

const DefinitionPairMultiline: React.FC<DefinitionPairMultilineProps> = ({ label, type, value }) => (
  <div>
    <div className="text-gray-600 font-mono">
      {label}
    </div>

    <div className="line-clamp-3 whitespace-pre-wrap break-words my-2 leading-6">
      <MaybeJSONOutput value={value} />
    </div>

    <div className="flex flex-row">
      <BlobActions type={type} value={value} />
    </div>
  </div>
);

export default DefinitionPairMultiline;
