interface IQuoteData {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}
// Fetching data server static:
// REST API
const getData = async () => {
  const res = await fetch("https://api.quotable.io/random");
  console.log(res);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  console.log(res.ok);
  return res.json();
};
export default async function Home() {
  const quoteData: IQuoteData = await getData();
  console.log(quoteData);
  return (
    <>
      <div>
      <h2>APPLICATION PROGRAMMING INTERFACE - api</h2>
        <p>
          API is a way for two or more computer programs to communicate with
          each other
        </p>
        <p>api is basically a backend i.e database</p>
        <p>
          API is a messenger that pulls information from one place and feeds it
          to another
        </p>
        <h3>
          {" "}
          api takes request from client and send it to server and then takes
          response from server and send it to client
        </h3>
        <p>Postman is an API platform for testing APIs</p>

        <h2>CRUD:</h2>
        <p>
          we perform crud operations - create , read , update , delete - on any
          endpoint
        </p>
        <h4>create : POST method</h4>
        <h4>read : GET method</h4>
        <h4>update : PUT,PATCH method</h4>
        <h4>delete : DELETE method</h4>
        <h1>REST API</h1>
        <p>Built-in API</p>
    

        <h1>1- Invoking and Using Rest api's</h1>
        {quoteData.content}
        <h1>CUSTOM API</h1>
        <p>Self-made API</p>
        <h1>2- Api Route Handler: </h1>
        <p>
          {" "}
          app folder =={">"} api folder =={">"} apiname folder =={">"} route.tsx
          file{" "}
        </p>
        
      </div>
      <h1>3- dynamic segments in api </h1>
      <p>dynamic segments in api is like dynamic segments in pages</p>
    </>
  );
}
