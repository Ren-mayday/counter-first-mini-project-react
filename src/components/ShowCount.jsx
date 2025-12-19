// Props count, que en el padre setearé un useState para que cambie el contenido dinámicamente

const ShowCount = ({ count }) => {
  return (
    <h1>
      You clicked here {count} {count === 1 ? "time" : "times"}
    </h1>
  );
};

export default ShowCount;
