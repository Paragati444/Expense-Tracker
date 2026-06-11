export default function Header(props: any) {
  return (
    <div>
      <header
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
        }}
      >
        <h1>{props.title}</h1>
      </header>
    </div>
  );
}
