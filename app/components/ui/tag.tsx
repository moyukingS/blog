export default function Tag() {
  return (
    <div
      className={`group/tag relative box-content h-5 min-w-20 cursor-pointer rounded-full border border-solid border-soyo-50 p-1 text-center text-sm duration-300 ease-out dark:border-wakaba-300`}
    >
      <div
        className={`absolute bottom-1 left-1 top-1 z-10 w-1/5 rounded-l-full bg-soyo-50 duration-1000 ease-out group-hover/tag:w-[calc(100%-0.5rem)] group-hover/tag:rounded-r-full group-hover/tag:bg-opacity-100 dark:bg-wakaba-300`}
      ></div>
      <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 dark:text-soyo-50">
        tag
      </span>
    </div>
  );
}
