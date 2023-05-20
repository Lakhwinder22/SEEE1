import React from 'react';

const Media = () => {
  return (
    <div className="MediaMain">
      <ul>
        {' '}
        <h1 className="Mediaheading">Media Coverage</h1>
      </ul>

      <br></br>

      <ul className="News">
        <a
          target="_self"
          href="https://www.business-standard.com/content/press-releases-ani/study-abroad-2021-22-direct-admission-platform-helping-students-in-pandemic-121071700755_1.html">
          <img
            src="https://www.edudag.com/wp-content/uploads/2022/09/business-standard.jpg"
            height={150}
          />
        </a>

        <a
          target="_self"
          href="https://www.indiatoday.in/impact-feature/story/top-10-iconic-leaders-of-2022-2297516-2022-11-15">
          <img
            src="https://www.edudag.com/wp-content/uploads/2022/11/indiay-today.jpg"
            height={150}
          />
        </a>

        <a
          target="_self"
          href="https://www.edudag.com/wp-content/uploads/2022/09/the-print.jpg">
          <img
            src="https://www.edudag.com/wp-content/uploads/2022/09/the-print.jpg"
            height={150}
          />
        </a>

        <a target="_self" href="https://www.youtube.com/watch?v=oP9BEDDNqL4">
          <img
            src="https://www.edudag.com/wp-content/uploads/2022/09/cnbc-aawaz-100x100.jpg"
            height={150}
          />
        </a>
      </ul>
    </div>
  );
};

export default Media;
