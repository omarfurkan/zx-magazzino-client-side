import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        <div className='bg-[#F0ECE3] '>
            <div className='w-11/12 mx-auto py-12'>
                <h2 className='text-center text-2xl py-6 font-condensed font-bold'>Quse/Ans</h2>
                <div className='font-poppins'>
                    <p className='font-bold my-2 text-xl'>Ques 1. Difference between javascript and nodejs</p>
                    <p>Ans: javascript is a programming language that is used for writing script on the website.NodeJS is a javacript runtime environment.
                        <br />
                        JS is  basically used on the cliet-side and NodeJs is monstly used on the server-side.
                        <br />
                        JS is can onlu be run in the browsers but we can run JS outside the browser with the help of NodeJS.
                        <br />
                        JS is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.
                        <br />
                        JS can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.On the other hand V8 is the JS engine inside of node.js that parses and runs JS.
                        <br />
                        JS is used in frontend development.Nodejs is used in servoer-side development.
                        <br />
                        Some of the JS fraeworks are ReactJs, Vue,Angular etc and some of the NOdejs  modules are Lodash, express etc.
                        <br />
                        JS is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is writen in C, C++ and JS
                    </p>
                    <p className='font-bold my-2 text-xl mt-4'>Ques 2.When should we use NodeJS and When should we ue MongoDB</p>
                    <p>MongoDB ans NodeJS are tow different technologies.MongoDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data update, or to search documents by some criterias.
                        <br />
                        When to use Nodejs: Any project needs a programming environment and a runtime library that offers you basic programming tool/support and can/or interpret you code. Nodejs is such as tool for the JabaScript programming language.There are  other similar tools for other languages such as Python, Java, #,C++, Go etc.
                        <br />
                        When to use MongoDB: If your application needs the ability to persistently store data in a way that you can efficiently query or updata it later, then you would typically use some form of database. There are dozens of popular dattabase. MongoDb is one such database.MariaDB, MySql, CouchDB,DynamoDB, Postgres are some examples of other database.</p>
                    <p className='font-bold my-2 text-xl mt-4'>Ques 3. Difference between sql and nosql database.</p>
                    <p>SQL is known as Relational Data Management System (RDBMS).NoSQL is known as Non-relational or distributed database system.
                        <br />
                        SQL database have fixed or static predefined schema and NoSQL have dynamic schema.
                        <br />
                        SQL database are best suited for complex queries and NoSQl database are not so good for complex queries
                        <br />
                        SQL is Vertically Scalable and NoSql is horizontally Scalable.
                        <br />
                        SQL follows ACID Property and NoSql follows CAP (consistency, avalibility, partition, tolerance)
                        <br />
                        Example of SQL are MySQL, PosgreSQL, Oracle, MS-SOL Server etc.and some of the example of NoSQL are MonoDB, GraphQL, HBase, Neo4j,Cassandra etc.
                    </p>
                    <p className='font-bold my-2 text-xl mt-4'>Ques 4. What is the purpose of jwt and how does it work</p>
                    <p>JWT or JSON Web Token is an open standard used to share security information between two parties - a client and server. Each JWT contains encoded JSON objects, including a set of claims. JWT are signed using a cryptogrphic algorithm to ensure that the claims cannot be altered agter the token is issued.</p>
                    <p>In short, JWT are used as secure way to authenticate user and sgare information.</p>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Blogs;