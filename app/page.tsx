import { BlogPosts } from "app/components/posts";
import { list } from "./project-list";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <div className="mb-4">
        <p>{`My name is Sam, and I'm just a wordcel living in the shape rotators' world. 
        Join me on my coding journey and read my thoughts if you're so inclined.`}</p>
        <br></br>
        <p>
          What I'm currently doing:{" "}
          <a
            className="hover:animate-ping"
            href={"https://fractalbootcamp.com/"}
          >
            Fractal Bootcamp
          </a>
        </p>
        <br></br>
        <p>{`What I've shipped:`}</p>
        <ul className="mt-3">
          {list.map((item) => (
            <li key={item.project} className="hover:animate-pulse mb-1">
              <a href={item.link} target="_blank">
                {item.project}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
