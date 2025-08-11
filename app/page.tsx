import { BlogPosts } from "app/components/posts";
import { CarouselDemo } from "./ui/project-carousel";

export default function Page() {
  return (
    <>
      {" "}
      <section >
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
              className="hover:animate-ping underline underline-offset-4"
              href={"https://fractalbootcamp.com/"}
            >
              Fractal Bootcamp
            </a>
          </p>
        </div>
      </section>
      <section>
        <div>
          <CarouselDemo />
        </div>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
