export default function Home() {
  console.log('executing')
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}


// this function is rendered in server.. this is a server side component in next js
// here we don't see the console.log in developers tooö instead in our terminal..which means this component ren dered in servers ide
//in the end it's just a regular react component but treated as server component by next js and executed in the server


// how about adding a another route for example localhost:3000/about
// we have t add a about folder in appp folder.. adding only a folder is not enought we have to add a page.js file inside about folder