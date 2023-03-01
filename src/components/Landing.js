import React from 'react'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="card1">
          <div className="head">
            <h2 className="find">Find Errors</h2>
          </div>
          <div className="imgel">
            <img
              className="img1"
              src="https://www.currentschoolnews.com/wp-content/uploads/2020/06/error-error-error.png"
              alt=""
            />
          </div>
          <div className="down">
            <h3>
              Here, you can check for language-specific errors. Try writing your
              broken code and getting the working code.
            </h3>
            {/* <button className="red">Click here</button> */}
          </div>
        </div>

        <div className="card2">
          <a style={{ textDecoration: "none" }} href="#webint">
            <div className="head">
              <h2 className="find">Check your Web Page</h2>
            </div>
            <div className="imgel">
              <img
                className="img1"
                src="https://www.trio.dev/hubfs/Imported_Blog_Media/263a75529a1752b75d64f9f21fd07c92-3-2.jpg"
                alt=""
              />
            </div>
            <div className="down">
              <h3>
                If you are a web developer, this is the place to write your
                html, CSS, and javascript and see how your webpage will look.
              </h3>
              {/* <button className="grey"> Click here</button> */}
            </div>
          </a>
        </div>

        <div className="card3">
          <a style={{ textDecoration: "none" }} href="#outweb">
            <div className="head">
              <h2 className="find">Get Your Output</h2>
            </div>
            <div className="imgel">
              <img
                className="img1"
                src="https://contentstatic.techgig.com/thumb/msid-91462794,width-460,resizemode-4/Top-5-preferred-languages-for-competitive-programming.jpg?20146"
                alt=""
              />
            </div>
            <div className="down3">
              <h3>
                Wish to program in your preferred language? Write your program
                and determine potential results.
              </h3>
              {/* <button className="blue">Click here</button> */}
            </div>
          </a>
        </div>
      </div>
    </>
  );
  
}

export default Landing