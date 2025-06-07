import { BlogPosts } from "app/components/posts";

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
        <p>{`What I'm currently doing:
        Fractal Bootcamp`}</p>
        <br></br>
        <p>{`What I've shipped:`}</p>
        <ul>
          <li>
            <a href="https://tictactoe-lime-sigma.vercel.app/">Tic-Tac-Toe</a>
          </li>
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
