import './ListItem.css';

const ListItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = (props) => (
  <li className="ListItem" {...props} />
);

export default ListItem;
