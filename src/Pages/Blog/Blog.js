import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 pb-16 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 class="text-center text-5xl font-bold my-5">Question and answer</h1>
      <div className="mt-6">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-1:</span> Difference between SQL and NoSQL?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

          There are five practical differences between SQL and NoSQL:
  
          1.Language 2.Scalability 3.Structure 4.Properties 5.Support and communities
          </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-2:</span> What is JWT, and how does it work?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          JWT is an open standard  for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-3:</span> What is the difference between javascript and NodeJS?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming languag. To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-4:</span> What is the difference between javascript and NodeJS?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. NodeJS can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without.
        </p>
      </div>
    </div>
    );
};

export default Blog;