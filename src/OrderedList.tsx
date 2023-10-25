import './OrderedList.css';

const OrderedList: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = (props) => (
  <ol className="OrderedList" {...props} />
);

export default OrderedList;
