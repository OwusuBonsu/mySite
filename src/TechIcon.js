export default function techIcon({ logo, name }) {
  return (
    <div className="flex flex-col flex-wrap w-1/5 mt-auto">
      <div className="flex justify-center">
        <img src={logo} className="object-contain w-2/12" />
      </div>
      <div className="flex justify-center">{name}</div>
    </div>
  );
}
