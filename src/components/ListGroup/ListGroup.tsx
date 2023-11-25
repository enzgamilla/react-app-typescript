interface Props {
  listState: string[];
}

function ListGroup({ listState }: Props) {
  return (
    <ul className="list-group">
      {listState.map((list) => (
        <li className="list-group-item text-center">{list}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
