
import { useMediaQuery } from 'react-responsive';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ChooseCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
  <ul>
      <div>
      <div className="Featuredmain">
        <hr />
        <div>
          <h1 className="Featuredheader">Why Choose OUR MBA</h1>
        </div>
        <hr />
        <div className={`Featured ${isMobile ? 'Featured-mobile' : ''}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://global.lehigh.edu/sites/global.lehigh.edu/files/styles/banner_standard/public/banner/ISS%20Curricular%20Practical%20Training%20Banner.jpg?itok=b89vvxRV" />
            <br/>
            <Card.Body>
              <Card.Title >Practical </Card.Title>
              <Card.Text>
                Your study content is taught in small seminar-style lectures mainly utilising practical workshops and exercises.
              </Card.Text>
              <Button variant="primary">Go More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.acmecollinsschool.com/blog/wp-content/uploads/2019/08/Flexibility-in-Learning.jpg" />
            <Card.Body>
              <Card.Title>Flexible Start </Card.Title>
              <Card.Text>
                Start your MBA whenever suits you best. Choose from 4 intakes every year: January, March, June or September.
              </Card.Text>
              <Button variant="primary">Go More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/BF1fC0pVsZU/maxresdefault.jpg" />
            <Card.Body>
              <Card.Title>Like-Minded People </Card.Title>
              <Card.Text>
                Establish a professional network and increase your job opportunities by meeting people with the same goals and passions as you.
              </Card.Text>
              <Button variant="primary">Go More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </ul>
  );
};
export default ChooseCard