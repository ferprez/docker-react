import React from "react";

const TimeLine = props => {
  const renderTimeLineRow = () => {
    return (
      <>
        <div className="container flex App-Timeline-row">
          <div className="App-Timeline-date flex justify-end items-center">
            <div className="text-right mr-16 mb-16">
              <h3 className="text-lg">2020-2023</h3>
              <p className="text-sm">Executive</p>
            </div>
          </div>
          <div className="App-Timeline-description flex flex-col justify-center">
            <div className="text-left ml-16 mb-2">
              <h3>COMPANY NAME</h3>
              <p className="text-sm max-w-md">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex App-Timeline-row">
          <div className="App-Timeline-date flex justify-end items-center">
            <div className="text-right mr-16 mb-16">
              <h3 className="text-lg">2020-2023</h3>
              <p className="text-sm">Executive</p>
            </div>
          </div>
          <div className="App-Timeline-description flex flex-col justify-center">
            <div className="text-left ml-16 mb-2">
              <h3>COMPANY NAME</h3>
              <p className="text-sm max-w-md">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex App-Timeline-row">
          <div className="App-Timeline-date flex justify-end items-center">
            <div className="text-right mr-16 mb-16">
              <h3 className="text-lg">2020-2023</h3>
              <p className="text-sm">Executive</p>
            </div>
          </div>
          <div className="App-Timeline-description flex flex-col justify-center">
            <div className="text-left ml-16 mb-2">
              <h3>COMPANY NAME</h3>
              <p className="text-sm max-w-md">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="App-Timeline my-6">
      <div className="App-Timeline-header h-full flex items-center justify-center mb-8">
        <h1>{props.headerTitle}</h1>
      </div>
      <div className="App-Timeline-container">{renderTimeLineRow()}</div>
    </div>
  );
};

export default TimeLine;
