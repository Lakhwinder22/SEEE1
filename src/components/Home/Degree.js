import React from 'react';
import Card from 'react-bootstrap/Card';

const Degree = () => {
  return (
    <div className="Degreepage">
      <hr />
      <ul>
        {' '}
        <h2 className="Featuredheader"><strong>Your Degree in a Nutshell.</strong></h2>
      </ul>
      <hr />
      <div className="Degreemain">
        <div >
          <ul>
            <p>
              <h5><strong>Degree</strong></h5> <span><strong>Master of Admistration</strong></span>
              <br />
              <br />
              <h5><strong>Accreditation</strong></h5> <span><strong>State Accreditation</strong></span>
              <br />
              <br />
              <h5><strong>Duration</strong></h5>
              <span><strong> 1 year</strong></span>
              <br />
              <br />
              <h5><strong>Start Dates</strong></h5> <span><strong>January March June September</strong></span>
              <br />
              <br />
              <h5><strong>Language</strong></h5> <span><strong>English </strong></span>
              <br />
              <br />
              <h5><strong>Fee</strong></h5>
            </p>
          </ul>
        </div>
        <div>
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <Card.Text>
              <div className='Degr'>
            <box>
            <ul>
                <h5> <strong>1. Build a solid foundation within areas such as Customer
                Environment, Innovation Management and Strategic Vision.</strong></h5>
                <h5>
                  <br></br>
                  <strong>
                  2. Progress and delve deeper into exciting topics
                including Strategic, Quality, Change & Culture Management or
                Social Performance
                  </strong>
                </h5>
                <br></br>
                <h5>
                  <strong>
                  3.You'll have the opportunity to work on a variety of
                projects before writing your master thesis.
                  </strong>
                </h5>
               </ul>
            </box>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Degree;
