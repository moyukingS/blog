export default function Home() {
  return (
    <>
      <div className={`flex h-screen w-screen items-center justify-center bg-primary pb-10`}>
        <nav className={`sticky top-0 rounded-full bg-white p-5`}>
          <ul className={`flex justify-evenly gap-2`}>
            {Array.from({ length: 5 }, (_, index) => {
              return (
                <li className={`cursor-pointer`} key={index}>
                  {index} menu
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={`h-[50vh]`}>1</div>
    </>
  );
}
