import { useMediaQuery } from 'react-responsive';
export const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="picture-container">
      <div>
        <img
          className="img2"
          src="https://media.licdn.com/dms/image/C4D03AQE2SqT-id0YOA/profile-displayphoto-shrink_800_800/0/1667911464034?e=2147483647&v=beta&t=-af3_jJ87nyUUfVCI83n3ptgcJTS_5aUlclavOb8i_o"
          alt="Example"
          height={430}
        />
      </div>
      <div className="content-container">
        <br></br>
        <ul>
          <strong>
            <h1>Dr.Sagar Srivastava</h1>
          </strong>
        </ul>
        <br></br>
        <ul>
          <p>
            <strong>
              My professional journey is characterized by a deep-seated passion
              for technology, a commitment to excellence, and a relentless
              pursuit of making a lasting impact on society. This journey began
              with a strong academic foundation in electronics and communication
              engineering, which was further enhanced by an MBA from the
              esteemed Indian Institute of Management (IIM) in Ahmedabad and an
              immersion program at the ESCP Business School in Berlin and Paris.
            </strong>
          </p>
        </ul>

        <ul>
          <p>
            <strong>
              {' '}
              I am the CEO of Direct Admission Global, an ed-tech venture that I
              bootstrapped, and have spent more than a decade forging
              partnerships with nearly 150 foreign universities. This initiative
              mirrors my commitment to expanding global educational
              opportunities for Indian students. My insights and perspectives on
              education, politics, start-ups, and more have been sought after by
              top-level media outlets on numerous occasions, further solidifying
              my reputation as a thought leader in my field.
            </strong>
          </p>
        </ul>

        <ul>
          <p>
            <strong>
              my journey from engineering to politics and entrepreneurship has
              been characterized by a deep-seated passion for technology, a
              commitment to excellence, and a relentless pursuit of making a
              lasting impact on society. With a varied and profound portfolio of
              experiences, including my academic foundation at IIM Ahmedabad and
              my immersion program at the ESCP Business School, I am
              well-equipped to tackle the challenges of the future and continue
              to drive positive change in the world.
            </strong>
          </p>
        </ul>
      </div>
    </div>
  );
};
export default Main;
